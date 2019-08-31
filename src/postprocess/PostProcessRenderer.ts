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
export class PostProcessRenderer {
  get composers(): PostProcessEffectComposer[] {
    return this._composers;
  }

  protected renderer: WebGLRenderer;
  private _composers: PostProcessEffectComposer[] = [];
  protected scene: Scene;
  protected camera: PerspectiveCamera;
  protected id: number;
  protected lastUpdateTimestamp: number;

  constructor(
    scene: Scene,
    camera: PerspectiveCamera,
    renderer: WebGLRenderer
  ) {
    this.renderer = renderer;
    this.scene = scene;
    this.camera = camera;
  }

  /**
   * シェーダーパスを挟んだEffectComposerを生成、登録する。
   * @param passes
   * @param renderer
   * @param renderPass
   */
  public addComposer(
    passes: Pass[],
    renderer: WebGLRenderer,
    renderPass?: RenderPass
  ): PostProcessEffectComposer {
    const composer = PostProcessRenderer.getComposer(passes, renderer, {
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
  public static getComposer(
    passes: Pass[],
    renderer: WebGLRenderer,
    renderPassOption: RenderPassOption
  ): PostProcessEffectComposer {
    RenderPassOption.init(renderPassOption);
    const composer = new PostProcessEffectComposer(renderer);
    composer.addPass(renderPassOption.renderPass);
    passes.forEach(p => {
      composer.addPass(p);
    });
    return composer;
  }

  /**
   * レンダリングを開始する。
   */
  public start(): void {
    if (this.id != null) return;
    this.id = requestAnimationFrame(this.onRequestAnimationFrame);
  }

  /**
   * レンダリングを停止する。
   */
  public stop(): void {
    if (this.id == null) return;
    cancelAnimationFrame(this.id);
    this.lastUpdateTimestamp = null;
  }

  /**
   * ウィンドウリサイズ時の処理
   * @param w
   * @param h
   */
  public setSize(w: number, h: number): void {
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
  public getSize(): Vector2 {
    return this.renderer.getSize(new Vector2());
  }

  /**
   * requestAnimationFrameハンドラ
   * @param timestamp
   */
  protected onRequestAnimationFrame = (timestamp?: number) => {
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

  protected render(delta): void {
    this._composers.forEach(composer => {
      if (!composer.enabled) return;

      if (composer.onBeforeRender) composer.onBeforeRender(delta);
      composer.render(delta);
      if (composer.onAfterRender) composer.onAfterRender(delta);
    });
  }

  /**
   * レンダリング処理の前に処理を挟み込むための関数
   * インスタンスに代入可能なので、任意の処理をさせたい場合はこの関数を書き換える。
   */
  public onBeforeRequestAnimationFrame: (delta?: number) => void;
}

/**
 * getComposer関数で利用するRenderPass初期化オプション
 *
 * sceneとcameraのセット、もしくはrenderPassインスタンスを代入する必要がある。
 * sceneとcameraのセットの場合 : RenderPassインスタンスを生成する。
 * renderPassインスタンスの場合 : そのままrenderPassインスタンスを利用する。
 */
export class RenderPassOption {
  scene?: Scene;
  camera?: Camera;
  renderPass?: RenderPass;

  public static init(option: RenderPassOption) {
    if (option.renderPass == null) {
      option.renderPass = new RenderPass(option.scene, option.camera);
    }
  }
}
