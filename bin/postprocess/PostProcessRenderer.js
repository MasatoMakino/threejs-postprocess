import { Vector2 } from "three";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass";
import { PostProcessEffectComposer } from "./PostProcessEffectComposer";
import { RAFTickerEvent } from "raf-ticker";
/**
 * 複数のエフェクトコンポーザーと、WebGLRendererを管理し、
 * 連続してポストエフェクト処理を行うためのクラス。
 */
export class PostProcessRenderer {
    constructor(scene, camera, renderer) {
        this._composers = [];
        this.render = (arg) => {
            let delta;
            if (arg instanceof RAFTickerEvent) {
                delta = arg.delta;
            }
            else {
                delta = arg;
            }
            this._composers.forEach(composer => {
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
    get composers() {
        return this._composers;
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
            renderPass: renderPass
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
        const composer = new PostProcessEffectComposer(renderer);
        composer.addPass(renderPassOption.renderPass);
        passes.forEach(p => {
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
        this._composers.forEach(composer => {
            composer.setSize(w, h);
        });
    }
    /**
     * WebGLRendererのレンダリングサイズを取得する。
     */
    getSize() {
        return this.renderer.getSize(new Vector2());
    }
}
/**
 * getComposer関数で利用するRenderPass初期化オプション
 *
 * sceneとcameraのセット、もしくはrenderPassインスタンスを代入する必要がある。
 * sceneとcameraのセットの場合 : RenderPassインスタンスを生成する。
 * renderPassインスタンスの場合 : そのままrenderPassインスタンスを利用する。
 */
export class RenderPassOption {
    static init(option) {
        if (option.renderPass == null) {
            option.renderPass = new RenderPass(option.scene, option.camera);
        }
    }
}
