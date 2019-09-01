import { UniformsUtils, Color } from "three";
import { PostProcessShader } from "../index";
import FragmentShader from "./DisplacementMap.frag.glsl";

export class DisplacementMapShader extends PostProcessShader {
  constructor() {
    super();
    this.fragmentShader = FragmentShader();
  }

  protected initUniform() {
    super.initUniform();
    this.uniforms = UniformsUtils.merge([
      this.uniforms,
      {
        strengthX: { value: 0.0 },
        strengthY: { value: 0.0 },
        map: { value: null },
        hasMap: { value: false },
        aspect: { value: 1.0 }
      }
    ]);
  }
}
