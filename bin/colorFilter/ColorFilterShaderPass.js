import { ColorFilterShader } from "./ColorFilterShader";
import { PostProcessShaderPass } from "../index";
/**
 * hsb値をオフセットして、色を変化させるシェーダーパス
 *
 * 例 )
 * multiS = 0.0, addB = 1.0にすると白に飽和する。
 * multiB = 0.0, もしくはaddB = -1.0 でブラックアウト。
 */
export class ColorFilterShaderPass extends PostProcessShaderPass {
    get h() {
        return this.uniforms.h.value;
    }
    set h(value) {
        this.uniforms.h.value = value;
    }
    get multiS() {
        return this.uniforms.multiS.value;
    }
    set multiS(value) {
        this.uniforms.multiS.value = value;
    }
    get multiB() {
        return this.uniforms.multiB.value;
    }
    set multiB(value) {
        this.uniforms.multiB.value = value;
    }
    get addS() {
        return this.uniforms.addS.value;
    }
    set addS(value) {
        this.uniforms.addS.value = value;
    }
    get addB() {
        return this.uniforms.addB.value;
    }
    set addB(value) {
        this.uniforms.addB.value = value;
    }
    constructor() {
        super(new ColorFilterShader());
    }
}
