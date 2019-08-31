import { Vector2 } from "three";
import { PostProcessEffectComposer } from "../postprocess/PostProcessEffectComposer";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass";
import { RenderPassOption } from "../postprocess";
import { MaterialSwitcher } from "./MaterialSwitcher";
/**
 * 切り替え可能なUnrealBloomPassを内包したEffectComposer.
 * BloomEffectComposer.BLOOMレイヤーに含まれるオブジェクトのみをBloomさせる.
 */
export class BloomEffectComposer extends PostProcessEffectComposer {
    constructor(scene, renderer, renderPassOption) {
        super(renderer);
        this.switcher = new MaterialSwitcher(scene);
        const size = renderer.getSize(new Vector2());
        this.bloomPass = new UnrealBloomPass(size, 1.5, 0.4, 0.4);
        // TODO : PR d.ts
        // @ts-ignore
        this.renderToScreen = false;
        RenderPassOption.init(renderPassOption);
        this.addPass(renderPassOption.renderPass);
        this.addPass(this.bloomPass);
        this.onBeforeRender = this.switcher.darkenNonBloomed;
        this.onAfterRender = this.switcher.restoreMaterial;
    }
    /**
     * 描画結果を反映したテクスチャを取得する。
     */
    get result() {
        return this.renderTarget2.texture;
    }
}
BloomEffectComposer.ENTIRE = 0;
BloomEffectComposer.BLOOM = 30;
