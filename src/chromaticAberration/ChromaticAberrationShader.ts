import { UniformsUtils } from "three";
import { PostProcessShader } from "../index";
import FragmentShader from "./ChromaticAberration.frag.glsl";

export class ChromaticAberrationShader extends PostProcessShader {
  constructor() {
    super();
    this.fragmentShader = FragmentShader();
  }

  protected initUniform() {
    super.initUniform();
    this.uniforms = UniformsUtils.merge([
      this.uniforms,
      {
        rate: { value: 1.0 },
        radiusInner: { value: 0.25 },
        radiusOuter: { value: Math.sqrt(2.0) }
      }
    ]);
  }
}
