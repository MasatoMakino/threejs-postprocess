import { WebGLRenderer } from "three";
import { Scene } from "three";
import { PerspectiveCamera } from "three";
import { Vector2 } from "three";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass";
import { Pass } from "three/examples/jsm/postprocessing/Pass";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer";
/**
 * 複数のエフェクトコンポーザーと、WebGLRendererを管理し、
 * 連続してポストエフェクト処理を行うためのクラス。
 */
export declare class PostProcessRenderer {
    protected renderer: WebGLRenderer;
    protected composers: EffectComposer[];
    protected scene: Scene;
    protected camera: PerspectiveCamera;
    protected id: number;
    protected lastUpdateTimestamp: number;
    constructor(scene: Scene, camera: PerspectiveCamera, renderer: WebGLRenderer);
    protected getRenderPass(): RenderPass;
    /**
     * シェーダーパスを挟んだEffectComposerを初期化する。
     * @param renderer
     */
    initComposer(passes: Pass[], renderer: WebGLRenderer): EffectComposer;
    /**
     * レンダリングを開始する。
     */
    start(): void;
    /**
     * レンダリングを停止する。
     */
    stop(): void;
    /**
     * ウィンドウリサイズ時の処理
     * @param w
     * @param h
     */
    setSize(w: number, h: number): void;
    /**
     * WebGLRendererのレンダリングサイズを取得する。
     */
    getSize(): Vector2;
    /**
     * requestAnimationFrameハンドラ
     * @param timestamp
     */
    protected onRequestAnimationFrame: (timestamp?: number) => void;
    protected render(delta: any): void;
    /**
     * レンダリング処理の前に処理を挟み込むための関数
     * インスタンスに代入可能なので、任意の処理をさせたい場合はこの関数を書き換える。
     */
    onBeforeRequestAnimationFrame: (timestamp?: number) => void;
}
//# sourceMappingURL=PostProcessRenderer.d.ts.map