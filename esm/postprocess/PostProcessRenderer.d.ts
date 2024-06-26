import { WebGLRenderer, Scene, PerspectiveCamera, Vector2, Camera } from "three";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { Pass } from "three/examples/jsm/postprocessing/Pass.js";
import { PostProcessEffectComposer } from "./PostProcessEffectComposer.js";
import { RAFTickerEventContext } from "@masatomakino/raf-ticker";
/**
 * 複数のエフェクトコンポーザーと、WebGLRendererを管理し、連続してポストエフェクト処理を行うためのクラス。
 */
export declare class PostProcessRenderer {
    get composers(): PostProcessEffectComposer[];
    protected renderer: WebGLRenderer;
    /**
     * このクラスが管理するEffectComposerの配列。
     *
     * エフェクトによっては、複数のEffectComposerを利用する場合がある。
     *  - 例えばUnrealBloomエフェクトの場合は、bloomをオフスクリーンで描画し、レンダリング結果とmixすることでエフェクトを実現している。
     * そのため、このクラスでは複数のEffectComposerを管理する。
     */
    private _composers;
    protected scene: Scene;
    protected camera: PerspectiveCamera;
    constructor(scene: Scene, camera: PerspectiveCamera, renderer: WebGLRenderer);
    /**
     * シェーダーパスを挟んだEffectComposerを生成、登録する。
     *
     * @param passes
     * @param renderPass レンダリングパス。省略した場合は、sceneとcameraを利用して自動生成する。複数のコンポーザーで同じレンダリングパスを共有する場合は、この引数にインスタンスを渡す。
     */
    createScreenRenderingComposer(passes: Pass[], renderPass?: RenderPass): PostProcessEffectComposer;
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
    render: (arg: RAFTickerEventContext | number) => void;
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