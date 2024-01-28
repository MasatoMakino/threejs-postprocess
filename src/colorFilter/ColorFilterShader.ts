import { UniformsUtils } from "three";
import { PostProcessShader } from "../index.js";
import FragmentShader from "./ColorFilter.frag.glsl.js";

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
        multiS: { value: 1.0 },
        multiB: { value: 1.0 },
        addS: { value: 0.0 },
        addB: { value: 0.0 },
      },
    ]);
  }
}
