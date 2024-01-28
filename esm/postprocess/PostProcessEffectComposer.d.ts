import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
/**
 * レンダリングの前後に任意の処理を実行する機能を追加したEffectComposer.
 */
export declare class PostProcessEffectComposer extends EffectComposer {
    enabled: boolean;
    onBeforeRender?: (delta?: number) => void;
    onAfterRender?: (delta?: number) => void;
}
//# sourceMappingURL=PostProcessEffectComposer.d.ts.map