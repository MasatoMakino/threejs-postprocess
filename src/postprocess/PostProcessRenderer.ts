import { WebGLRenderer } from "three";
import { Scene } from "three";
import { PerspectiveCamera } from "three";
import { Vector2 } from "three";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass";
import { Pass } from "three/examples/jsm/postprocessing/Pass";
import { PostProcessEffectComposer } from "./PostProcessEffectComposer";

/**
 * 複数のエフェクトコンポーザーと、WebGLRendererを管理し、
 * 連続してポストエフェクト処理を行うためのクラス。
 */
export class PostProcessRenderer {
  protected renderer: WebGLRenderer;
  protected composers: PostProcessEffectComposer[] = [];
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

  protected getRenderPass(): RenderPass {
    return new RenderPass(
      this.scene,
      this.camera,
      undefined,
      undefined,
      undefined
    );
  }

  /**
   * シェーダーパスを挟んだEffectComposerを初期化する。
   * @param renderer
   */
  public initComposer(
    passes: Pass[],
    renderer: WebGLRenderer
  ): PostProcessEffectComposer {
    const renderPass = this.getRenderPass();
    const composer = new PostProcessEffectComposer(renderer);
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

    this.composers.forEach(composer => {
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
    this.composers.forEach(composer => {
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
  public onBeforeRequestAnimationFrame: (timestamp?: number) => void;
}
