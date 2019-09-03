import { UniformsUtils } from "three";
import { PostProcessShader } from "../index";
import FragmentShader from "./ColorFilter.frag.glsl";

export class ColorFilterShader extends PostProcessShader {
  constructor() {
    super();
    this.fragmentShader = FragmentShader();
  }

  protected initUniform() {
    super.initUniform();
    this.uniforms = UniformsUtils.merge([
      this.uniforms,
      {
        h: { value: 0.0 },
        s: { value: 0.0 },
        b: { value: 0.0 }
      }
    ]);
  }
}
