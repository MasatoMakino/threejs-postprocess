"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostProcessEffectComposer = void 0;
const EffectComposer_1 = require("three/examples/jsm/postprocessing/EffectComposer");
/**
 * レンダリングの前後に任意の処理を実行する機能を追加したEffectComposer.
 */
class PostProcessEffectComposer extends EffectComposer_1.EffectComposer {
    constructor() {
        super(...arguments);
        this.enabled = true;
    }
}
exports.PostProcessEffectComposer = PostProcessEffectComposer;
