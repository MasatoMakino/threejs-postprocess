"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var three_1 = require("three");
var PostProcessEffectComposer_1 = require("../postprocess/PostProcessEffectComposer");
var UnrealBloomPass_1 = require("three/examples/jsm/postprocessing/UnrealBloomPass");
var postprocess_1 = require("../postprocess");
var MaterialSwitcher_1 = require("./MaterialSwitcher");
/**
 * 切り替え可能なUnrealBloomPassを内包したEffectComposer.
 * BloomEffectComposer.BLOOMレイヤーに含まれるオブジェクトのみをBloomさせる.
 */
var BloomEffectComposer = /** @class */ (function (_super) {
    __extends(BloomEffectComposer, _super);
    function BloomEffectComposer(scene, renderer, renderPassOption) {
        var _this = _super.call(this, renderer) || this;
        _this.switcher = new MaterialSwitcher_1.MaterialSwitcher(scene);
        var size = renderer.getSize(new three_1.Vector2());
        _this.bloomPass = new UnrealBloomPass_1.UnrealBloomPass(size, 1.5, 0.4, 0.4);
        // TODO : PR d.ts
        // @ts-ignore
        _this.renderToScreen = false;
        postprocess_1.RenderPassOption.init(renderPassOption);
        _this.addPass(renderPassOption.renderPass);
        _this.addPass(_this.bloomPass);
        _this.onBeforeRender = _this.switcher.darkenNonBloomed;
        _this.onAfterRender = _this.switcher.restoreMaterial;
        return _this;
    }
    Object.defineProperty(BloomEffectComposer.prototype, "result", {
        /**
         * 描画結果を反映したテクスチャを取得する。
         */
        get: function () {
            return this.renderTarget2.texture;
        },
        enumerable: true,
        configurable: true
    });
    BloomEffectComposer.ENTIRE = 0;
    BloomEffectComposer.BLOOM = 30;
    return BloomEffectComposer;
}(PostProcessEffectComposer_1.PostProcessEffectComposer));
exports.BloomEffectComposer = BloomEffectComposer;
