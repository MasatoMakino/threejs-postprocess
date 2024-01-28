import { ColorFilterShader } from "./ColorFilterShader.js";
import { PostProcessShaderPass } from "../index.js";

/**
 * hsb値をオフセットして、色を変化させるシェーダーパス
 *
 * 例 )
 * multiS = 0.0, addB = 1.0にすると白に飽和する。
 * multiB = 0.0, もしくはaddB = -1.0 でブラックアウト。
 */
export class ColorFilterShaderPass extends PostProcessShaderPass {
  get h(): number {
    return this.uniforms.h.value;
  }
  set h(value: number) {
    this.uniforms.h.value = value;
  }
  get multiS(): number {
    return this.uniforms.multiS.value;
  }
  set multiS(value: number) {
    this.uniforms.multiS.value = value;
  }
  get multiB(): number {
    return this.uniforms.multiB.value;
  }
  set multiB(value: number) {
    this.uniforms.multiB.value = value;
  }
  get addS(): number {
    return this.uniforms.addS.value;
  }
  set addS(value: number) {
    this.uniforms.addS.value = value;
  }
  get addB(): number {
    return this.uniforms.addB.value;
  }
  set addB(value: number) {
    this.uniforms.addB.value = value;
  }
  constructor() {
    super(new ColorFilterShader());
  }
}
