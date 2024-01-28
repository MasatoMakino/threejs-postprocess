import { UniformsUtils, Color } from "three";
import { PostProcessShader } from "../index.js";
import FragmentShader from "./PeripheralLight.frag.glsl.js";

export class PeripheralLightShader extends PostProcessShader {
  constructor() {
    super();
    this.fragmentShader = FragmentShader();
  }

  protected initUniform() {
    super.initUniform();
    this.uniforms = UniformsUtils.merge([
      this.uniforms,
      {
        rate: { value: 5.0 },
        radiusInner: { value: 0.75 },
        radiusOuter: { value: Math.sqrt(2.0) },
        color: { value: new Color(0, 0, 0) },
      },
    ]);
  }
}
