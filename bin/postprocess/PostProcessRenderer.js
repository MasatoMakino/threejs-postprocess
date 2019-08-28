import { Vector2 } from "three";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer";
/**
 * 複数のエフェクトコンポーザーと、WebGLRendererを管理し、
 * 連続してポストエフェクト処理を行うためのクラス。
 */
export class PostProcessRenderer {
    constructor(scene, camera, renderer) {
        this.composers = [];
        /**
         * requestAnimationFrameハンドラ
         * @param timestamp
         */
        this.onRequestAnimationFrame = (timestamp) => {
            if (this.lastUpdateTimestamp == null) {
                this.lastUpdateTimestamp = timestamp;
            }
            const delta = timestamp - this.lastUpdateTimestamp;
            if (this.onBeforeRequestAnimationFrame) {
                this.onBeforeRequestAnimationFrame(timestamp);
            }
            this.render(delta);
            this.lastUpdateTimestamp = timestamp;
            this.id = requestAnimationFrame(this.onRequestAnimationFrame);
        };
        this.renderer = renderer;
        this.scene = scene;
        this.camera = camera;
    }
    getRenderPass() {
        return new RenderPass(this.scene, this.camera, undefined, undefined, undefined);
    }
    /**
     * シェーダーパスを挟んだEffectComposerを初期化する。
     * @param renderer
     */
    initComposer(passes, renderer) {
        const renderPass = this.getRenderPass();
        const composer = new EffectComposer(renderer);
        composer.addPass(renderPass);
        passes.forEach(p => {
            composer.addPass(p);
        });
        this.composers.push(composer);
        return composer;
    }
    /**
     * レンダリングを開始する。
     */
    start() {
        if (this.id != null)
            return;
        this.id = requestAnimationFrame(this.onRequestAnimationFrame);
    }
    /**
     * レンダリングを停止する。
     */
    stop() {
        if (this.id == null)
            return;
        cancelAnimationFrame(this.id);
        this.lastUpdateTimestamp = null;
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
        this.composers.forEach(composer => {
            composer.setSize(w, h);
        });
    }
    /**
     * WebGLRendererのレンダリングサイズを取得する。
     */
    getSize() {
        return this.renderer.getSize(new Vector2());
    }
    render(delta) {
        this.composers.forEach(composer => {
            composer.render(delta);
        });
    }
}
