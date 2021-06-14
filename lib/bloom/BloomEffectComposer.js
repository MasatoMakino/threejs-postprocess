"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BloomEffectComposer = void 0;
const three_1 = require("three");
const PostProcessEffectComposer_1 = require("../postprocess/PostProcessEffectComposer");
const UnrealBloomPass_1 = require("three/examples/jsm/postprocessing/UnrealBloomPass");
const postprocess_1 = require("../postprocess");
const MaterialSwitcher_1 = require("./MaterialSwitcher");
/**
 * 切り替え可能なUnrealBloomPassを内包したEffectComposer.
 * BloomEffectComposer.BLOOMレイヤーに含まれるオブジェクトのみをBloomさせる.
 */
class BloomEffectComposer extends PostProcessEffectComposer_1.PostProcessEffectComposer {
    constructor(scene, renderer, renderPassOption) {
        super(renderer);
        this.switcher = new MaterialSwitcher_1.MaterialSwitcher(scene);
        const size = renderer.getSize(new three_1.Vector2());
        this.bloomPass = new UnrealBloomPass_1.UnrealBloomPass(size, 1.5, 0.4, 0.4);
        // TODO : PR d.ts
        // @ts-ignore
        this.renderToScreen = false;
        postprocess_1.RenderPassOption.init(renderPassOption);
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
exports.BloomEffectComposer = BloomEffectComposer;
BloomEffectComposer.ENTIRE = 0;
BloomEffectComposer.BLOOM = 30;
