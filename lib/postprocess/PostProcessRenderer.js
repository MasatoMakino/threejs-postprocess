"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RenderPassOption = exports.PostProcessRenderer = void 0;
const three_1 = require("three");
const RenderPass_1 = require("three/examples/jsm/postprocessing/RenderPass");
const PostProcessEffectComposer_1 = require("./PostProcessEffectComposer");
const raf_ticker_1 = require("@masatomakino/raf-ticker");
/**
 * 複数のエフェクトコンポーザーと、WebGLRendererを管理し、
 * 連続してポストエフェクト処理を行うためのクラス。
 */
class PostProcessRenderer {
    get composers() {
        return this._composers;
    }
    constructor(scene, camera, renderer) {
        this._composers = [];
        this.render = (arg) => {
            let delta;
            if (arg instanceof raf_ticker_1.RAFTickerEventContext) {
                delta = arg.delta;
            }
            else {
                delta = arg;
            }
            this._composers.forEach((composer) => {
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
    /**
     * シェーダーパスを挟んだEffectComposerを生成、登録する。
     * @param passes
     * @param renderPass
     */
    addComposer(passes, renderPass) {
        const composer = PostProcessRenderer.getComposer(passes, this.renderer, {
            scene: this.scene,
            camera: this.camera,
            renderPass: renderPass,
        });
        this._composers.push(composer);
        return composer;
    }
    /**
     * コンポーザーを生成する。
     * @param passes
     * @param renderer
     * @param renderPassOption
     */
    static getComposer(passes, renderer, renderPassOption) {
        RenderPassOption.init(renderPassOption);
        const composer = new PostProcessEffectComposer_1.PostProcessEffectComposer(renderer);
        composer.addPass(renderPassOption.renderPass);
        passes.forEach((p) => {
            composer.addPass(p);
        });
        return composer;
    }
    /**
     * ウィンドウリサイズ時の処理
     * @param w
     * @param h
     */
    setSize(w, h) {
        this.camera.aspect = w / h;
        this.camera.updateProjectionMatrix();
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.renderer.setSize(w, h);
        this._composers.forEach((composer) => {
            composer.setSize(w, h);
        });
    }
    /**
     * WebGLRendererのレンダリングサイズを取得する。
     */
    getSize() {
        return this.renderer.getSize(new three_1.Vector2());
    }
}
exports.PostProcessRenderer = PostProcessRenderer;
/**
 * getComposer関数で利用するRenderPass初期化オプション
 *
 * sceneとcameraのセット、もしくはrenderPassインスタンスを代入する必要がある。
 * sceneとcameraのセットの場合 : RenderPassインスタンスを生成する。
 * renderPassインスタンスの場合 : そのままrenderPassインスタンスを利用する。
 */
class RenderPassOption {
    static init(option) {
        if (option.renderPass == null) {
            option.renderPass = new RenderPass_1.RenderPass(option.scene, option.camera);
        }
    }
}
exports.RenderPassOption = RenderPassOption;
