import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass.js";
/**
 * ポストプロセス用のShaderPass。
 * EffectComposerにPassとして追加することで、任意のポストエフェクトを実現する。
 *
 * コンストラクターでPostProcessShaderを受け取り、そのシェーダーのuniformを操作する。
 */
export class PostProcessShaderPass extends ShaderPass {
  constructor(shader, textureID) {
    super(shader, textureID);
  }
  get tDiffuse() {
    return this.uniforms.tDiffuse.value;
  }
  set tDiffuse(value) {
    this.uniforms.tDiffuse.value = value;
  }
}
