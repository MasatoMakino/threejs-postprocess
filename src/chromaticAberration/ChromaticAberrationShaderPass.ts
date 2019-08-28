import { ChromaticAberrationShader } from "./ChromaticAberrationShader";
import { PostProcessShaderPass } from "../index";

export class ChromaticAberrationShaderPass extends PostProcessShaderPass {
  get rate(): number {
    return this.uniforms.rate.value;
  }
  set rate(value: number) {
    this.uniforms.rate.value = value;
  }

  get radiusInner(): number {
    return this.uniforms.radiusInner.value;
  }
  set radiusInner(value: number) {
    this.uniforms.radiusInner.value = value;
  }

  get radiusOuter(): number {
    return this.uniforms.radiusOuter.value;
  }
  set radiusOuter(value: number) {
    this.uniforms.radiusOuter.value = value;
  }

  constructor() {
    super(new ChromaticAberrationShader());
  }
}
