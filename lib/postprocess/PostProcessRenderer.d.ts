import { WebGLRenderer, Scene, PerspectiveCamera, Vector2, Camera } from "three";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass";
import { Pass } from "three/examples/jsm/postprocessing/Pass";
import { PostProcessEffectComposer } from "./PostProcessEffectComposer";
import { RAFTickerEvent } from "raf-ticker";
/**
 * 複数のエフェクトコンポーザーと、WebGLRendererを管理し、
 * 連続してポストエフェクト処理を行うためのクラス。
 */
export declare class PostProcessRenderer {
    get composers(): PostProcessEffectComposer[];
    protected renderer: WebGLRenderer;
    private _composers;
    protected scene: Scene;
    protected camera: PerspectiveCamera;
    constructor(scene: Scene, camera: PerspectiveCamera, renderer: WebGLRenderer);
    /**
     * シェーダーパスを挟んだEffectComposerを生成、登録する。
     * @param passes
     * @param renderPass
     */
    addComposer(passes: Pass[], renderPass?: RenderPass): PostProcessEffectComposer;
    /**
     * コンポーザーを生成する。
     * @param passes
     * @param renderer
     * @param renderPassOption
     */
    static getComposer(passes: Pass[], renderer: WebGLRenderer, renderPassOption: RenderPassOption): PostProcessEffectComposer;
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
    render: (arg: RAFTickerEvent | number) => void;
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