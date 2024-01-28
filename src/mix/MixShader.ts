import { PostProcessShader } from "../index.js";
import FragmentShader from "./MixShader.frag.glsl.js";
import { UniformsUtils } from "three";

export class MixShader extends PostProcessShader {
  constructor() {
    super();
    this.fragmentShader = FragmentShader();
  }

  protected initUniform() {
    super.initUniform();
    this.uniforms = UniformsUtils.merge([
      this.uniforms,
      {
        mixTexture: { value: null },
      },
    ]);
  }
}
