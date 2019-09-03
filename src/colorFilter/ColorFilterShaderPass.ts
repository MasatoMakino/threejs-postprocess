import { ColorFilterShader } from "./ColorFilterShader";
import { PostProcessShaderPass } from "../index";

export class ColorFilterShaderPass extends PostProcessShaderPass {
  get h(): number {
    return this.uniforms.h.value;
  }
  set h(value: number) {
    this.uniforms.h.value = value;
  }
  get s(): number {
    return this.uniforms.s.value;
  }
  set s(value: number) {
    this.uniforms.s.value = value;
  }
  get b(): number {
    return this.uniforms.b.value;
  }
  set b(value: number) {
    this.uniforms.b.value = value;
  }

  constructor() {
    super(new ColorFilterShader());
  }
}
