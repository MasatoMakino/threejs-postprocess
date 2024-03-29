import { PostProcessShaderPass } from "../index.js";
import { Texture } from "three";
import { MixShader } from "./MixShader.js";

/**
 * 他のエフェクトコンポーザーの描画結果を受け取り、自身のレンダリング結果に乗算するShaderPass
 */
export class MixShaderPass extends PostProcessShaderPass {
  get mixTexture(): Texture {
    return this.uniforms.mixTexture.value;
  }
  set mixTexture(value: Texture) {
    this.uniforms.mixTexture.value = value;
  }

  constructor(mixTexture: Texture) {
    super(new MixShader());
    this.mixTexture = mixTexture;
  }
}
