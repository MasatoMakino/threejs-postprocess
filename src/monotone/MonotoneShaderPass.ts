import { MonotoneShader } from "./MonotoneShader.js";
import { PostProcessShaderPass } from "../index.js";
import { Color } from "three";

/**
 *
 */
export class MonotoneShaderPass extends PostProcessShaderPass {
  get color(): Color {
    return this.uniforms.color.value;
  }
  set color(value: Color) {
    this.uniforms.color.value = value;
  }
  get strength(): number {
    return this.uniforms.strength.value;
  }
  set strength(value: number) {
    this.uniforms.strength.value = value;
  }

  constructor() {
    super(new MonotoneShader());
  }
}
