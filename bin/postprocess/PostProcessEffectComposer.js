import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer";
/**
 * レンダリングの前後に任意の処理を実行する機能を追加したEffectComposer.
 */
export class PostProcessEffectComposer extends EffectComposer {
    constructor() {
        super(...arguments);
        this.enabled = true;
    }
}
