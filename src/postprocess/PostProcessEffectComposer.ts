import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";

/**
 * レンダリングの前後に任意の処理を実行する機能を追加したEffectComposer.
 */
export class PostProcessEffectComposer extends EffectComposer {
  enabled: boolean = true;
  public onBeforeRender?: (delta?: number) => void;
  public onAfterRender?: (delta?: number) => void;
}
