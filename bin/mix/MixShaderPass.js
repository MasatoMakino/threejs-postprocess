import { PostProcessShaderPass } from "../index";
import { MixShader } from "./MixShader";
/**
 * 他のエフェクトコンポーザーの描画結果を受け取り、自身のレンダリング結果に乗算するShaderPass
 */
export class MixShaderPass extends PostProcessShaderPass {
    get mixTexture() {
        return this.uniforms.mixTexture.value;
    }
    set mixTexture(value) {
        this.uniforms.mixTexture.value = value;
    }
    constructor(mixTexture) {
        super(new MixShader());
        this.needsSwap = true;
    }
}
