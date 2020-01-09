"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var three_1 = require("three");
var RenderPass_1 = require("three/examples/jsm/postprocessing/RenderPass");
var PostProcessEffectComposer_1 = require("./PostProcessEffectComposer");
var raf_ticker_1 = require("raf-ticker");
/**
 * 複数のエフェクトコンポーザーと、WebGLRendererを管理し、
 * 連続してポストエフェクト処理を行うためのクラス。
 */
var PostProcessRenderer = /** @class */ (function () {
    function PostProcessRenderer(scene, camera, renderer) {
        var _this = this;
        this._composers = [];
        this.render = function (arg) {
            var delta;
            if (arg instanceof raf_ticker_1.RAFTickerEvent) {
                delta = arg.delta;
            }
            else {
                delta = arg;
            }
            _this._composers.forEach(function (composer) {
                if (!composer.enabled)
                    return;
                if (composer.onBeforeRender)
                    composer.onBeforeRender(delta);
                composer.render(delta);
                if (composer.onAfterRender)
                    composer.onAfterRender(delta);
            });
        };
        this.renderer = renderer;
        this.scene = scene;
        this.camera = camera;
    }
    Object.defineProperty(PostProcessRenderer.prototype, "composers", {
        get: function () {
            return this._composers;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * シェーダーパスを挟んだEffectComposerを生成、登録する。
     * @param passes
     * @param renderPass
     */
    PostProcessRenderer.prototype.addComposer = function (passes, renderPass) {
        var composer = PostProcessRenderer.getComposer(passes, this.renderer, {
            scene: this.scene,
            camera: this.camera,
            renderPass: renderPass
        });
        this._composers.push(composer);
        return composer;
    };
    /**
     * コンポーザーを生成する。
     * @param passes
     * @param renderer
     * @param renderPassOption
     */
    PostProcessRenderer.getComposer = function (passes, renderer, renderPassOption) {
        RenderPassOption.init(renderPassOption);
        var composer = new PostProcessEffectComposer_1.PostProcessEffectComposer(renderer);
        composer.addPass(renderPassOption.renderPass);
        passes.forEach(function (p) {
            composer.addPass(p);
        });
        return composer;
    };
    /**
     * ウィンドウリサイズ時の処理
     * @param w
     * @param h
     */
    PostProcessRenderer.prototype.setSize = function (w, h) {
        this.camera.aspect = w / h;
        this.camera.updateProjectionMatrix();
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.renderer.setSize(w, h);
        this._composers.forEach(function (composer) {
            composer.setSize(w, h);
        });
    };
    /**
     * WebGLRendererのレンダリングサイズを取得する。
     */
    PostProcessRenderer.prototype.getSize = function () {
        return this.renderer.getSize(new three_1.Vector2());
    };
    return PostProcessRenderer;
}());
exports.PostProcessRenderer = PostProcessRenderer;
/**
 * getComposer関数で利用するRenderPass初期化オプション
 *
 * sceneとcameraのセット、もしくはrenderPassインスタンスを代入する必要がある。
 * sceneとcameraのセットの場合 : RenderPassインスタンスを生成する。
 * renderPassインスタンスの場合 : そのままrenderPassインスタンスを利用する。
 */
var RenderPassOption = /** @class */ (function () {
    function RenderPassOption() {
    }
    RenderPassOption.init = function (option) {
        if (option.renderPass == null) {
            option.renderPass = new RenderPass_1.RenderPass(option.scene, option.camera);
        }
    };
    return RenderPassOption;
}());
exports.RenderPassOption = RenderPassOption;
