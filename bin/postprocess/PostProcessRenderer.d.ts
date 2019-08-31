import { WebGLRenderer } from "three";
import { Scene } from "three";
import { PerspectiveCamera } from "three";
import { Vector2 } from "three";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass";
import { Pass } from "three/examples/jsm/postprocessing/Pass";
import { PostProcessEffectComposer } from "./PostProcessEffectComposer";
import { Camera } from "three";
/**
 * 複数のエフェクトコンポーザーと、WebGLRendererを管理し、
 * 連続してポストエフェクト処理を行うためのクラス。
 */
export declare class PostProcessRenderer {
    readonly composers: PostProcessEffectComposer[];
    protected renderer: WebGLRenderer;
    private _composers;
    protected scene: Scene;
    protected camera: PerspectiveCamera;
    protected id: number;
    protected lastUpdateTimestamp: number;
    constructor(scene: Scene, camera: PerspectiveCamera, renderer: WebGLRenderer);
    /**
     * シェーダーパスを挟んだEffectComposerを生成、登録する。
     * @param passes
     * @param renderer
     * @param renderPass
     */
    addComposer(passes: Pass[], renderer: WebGLRenderer, renderPass?: RenderPass): PostProcessEffectComposer;
    /**
     * コンポーザーを生成する。
     * @param passes
     * @param renderer
     * @param renderPassOption
     */
    static getComposer(passes: Pass[], renderer: WebGLRenderer, renderPassOption: RenderPassOption): PostProcessEffectComposer;
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
    onBeforeRequestAnimationFrame: (delta?: number) => void;
}
/**
 * getComposer関数で利用するRenderPass初期化オプション
 *
 * sceneとcameraのセット、もしくはrenderPassインスタンスを代入する必要がある。
 * sceneとcameraのセットの場合 : RenderPassインスタンスを生成する。
 * renderPassインスタンスの場合 : そのままrenderPassインスタンスを利用する。
 */
export declare class RenderPassOption {
    scene?: Scene;
    camera?: Camera;
    renderPass?: RenderPass;
    static init(option: RenderPassOption): void;
}
//# sourceMappingURL=PostProcessRenderer.d.ts.map