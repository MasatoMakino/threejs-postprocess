"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MixShaderPass = void 0;
const index_1 = require("../index");
const MixShader_1 = require("./MixShader");
/**
 * 他のエフェクトコンポーザーの描画結果を受け取り、自身のレンダリング結果に乗算するShaderPass
 */
class MixShaderPass extends index_1.PostProcessShaderPass {
    get mixTexture() {
        return this.uniforms.mixTexture.value;
    }
    set mixTexture(value) {
        this.uniforms.mixTexture.value = value;
    }
    constructor(mixTexture) {
        super(new MixShader_1.MixShader());
        this.mixTexture = mixTexture;
    }
}
exports.MixShaderPass = MixShaderPass;
