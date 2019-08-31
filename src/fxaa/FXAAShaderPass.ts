import * as FXAAShaderModule from "three/examples/jsm/shaders/FXAAShader";
import { ShaderMaterial } from "three";
import { PostProcessShaderPass } from "../postprocess";

/**
 * FXAAShaderを組み込み済みのShaderPass
 */
export class FXAAShaderPass extends PostProcessShaderPass {
  material: ShaderMaterial;

  /**
   * コンストラクタ
   */
  constructor() {
    super(FXAAShaderModule["FXAAShader"]);
  }

  public setSize(width: number, height: number): void {
    super.setSize(width, height);
    const uniforms = this.material.uniforms;
    uniforms.resolution.value.x = 1 / width;
    uniforms.resolution.value.y = 1 / height;
  }
}
