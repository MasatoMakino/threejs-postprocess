import {
  WebGLRenderer,
  Scene,
  PerspectiveCamera,
  Vector2,
  Camera,
} from "three";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { OutputPass } from "three/examples/jsm/postprocessing/OutputPass.js";
import { Pass } from "three/examples/jsm/postprocessing/Pass.js";
import { PostProcessEffectComposer } from "./PostProcessEffectComposer.js";
import { RAFTickerEventContext } from "@masatomakino/raf-ticker";

/**
 * 複数のエフェクトコンポーザーと、WebGLRendererを管理し、連続してポストエフェクト処理を行うためのクラス。
 */
export class PostProcessRenderer {
  get composers(): PostProcessEffectComposer[] {
    return this._composers;
  }

  protected renderer: WebGLRenderer;

  /**
   * このクラスが管理するEffectComposerの配列。
   *
   * エフェクトによっては、複数のEffectComposerを利用する場合がある。
   *  - 例えばUnrealBloomエフェクトの場合は、bloomをオフスクリーンで描画し、レンダリング結果とmixすることでエフェクトを実現している。
   * そのため、このクラスでは複数のEffectComposerを管理する。
   */
  private _composers: PostProcessEffectComposer[] = [];
  protected scene: Scene;
  protected camera: PerspectiveCamera;

  constructor(
    scene: Scene,
    camera: PerspectiveCamera,
    renderer: WebGLRenderer,
  ) {
    this.renderer = renderer;
    this.scene = scene;
    this.camera = camera;
  }

  /**
   * シェーダーパスを挟んだEffectComposerを生成、登録する。
   *
   * @param passes
   * @param renderPass レンダリングパス。省略した場合は、sceneとcameraを利用して自動生成する。複数のコンポーザーで同じレンダリングパスを共有する場合は、この引数にインスタンスを渡す。
   */
  public createScreenRenderingComposer(
    passes: Pass[],
    renderPass?: RenderPass,
  ): PostProcessEffectComposer {
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
  public static getComposer(
    passes: Pass[],
    renderer: WebGLRenderer,
    renderPassOption: RenderPassOption,
  ): PostProcessEffectComposer {
    RenderPassOption.init(renderPassOption);
    const composer = new PostProcessEffectComposer(renderer);

    //先頭にレンダーパスを挿入
    composer.addPass(renderPassOption.renderPass);

    //中間にエフェクトパスを挿入
    passes.forEach((p) => {
      composer.addPass(p);
    });

    //末端にOutputPassを挿入
    composer.addPass(new OutputPass());

    return composer;
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

    this._composers.forEach((composer) => {
      composer.setSize(w, h);
    });
  }

  /**
   * WebGLRendererのレンダリングサイズを取得する。
   */
  public getSize(): Vector2 {
    return this.renderer.getSize(new Vector2());
  }

  public render = (arg: RAFTickerEventContext | number) => {
    let delta: number;
    if (arg instanceof RAFTickerEventContext) {
      delta = arg.delta;
    } else {
      delta = arg;
    }

    this._composers.forEach((composer) => {
      if (!composer.enabled) return;

      if (composer.onBeforeRender) composer.onBeforeRender(delta);
      composer.render(delta);
      if (composer.onAfterRender) composer.onAfterRender(delta);
    });
  };
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
