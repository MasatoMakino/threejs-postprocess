import { WebGLRenderer, Scene, Texture } from "three";
import { PostProcessEffectComposer } from "../postprocess/PostProcessEffectComposer.js";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass.js";
import { RenderPassOption } from "../postprocess/index.js";
import { MaterialSwitcher } from "./MaterialSwitcher.js";
/**
 * 切り替え可能なUnrealBloomPassを内包したEffectComposer.
 * BloomEffectComposer.BLOOMレイヤーに含まれるオブジェクトのみをBloomさせる.
 */
export declare class BloomEffectComposer extends PostProcessEffectComposer {
    bloomPass: UnrealBloomPass;
    protected switcher: MaterialSwitcher;
    static readonly ENTIRE: number;
    static readonly BLOOM: number;
    constructor(scene: Scene, renderer: WebGLRenderer, renderPassOption: RenderPassOption);
    /**
     * 描画結果を反映したテクスチャを取得する。
     */
    get result(): Texture;
}
//# sourceMappingURL=BloomEffectComposer.d.ts.map