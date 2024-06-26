import { IUniform } from "three";
import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass.js";
import { Texture } from "three";
import { IPostProcessShader } from "./PostProcessShader.js";

/**
 * ポストプロセス用のShaderPass。
 * EffectComposerにPassとして追加することで、任意のポストエフェクトを実現する。
 *
 * コンストラクターでPostProcessShaderを受け取り、そのシェーダーのuniformを操作する。
 */
export class PostProcessShaderPass extends ShaderPass {
  uniforms: { [uniform: string]: IUniform };

  constructor(shader: IPostProcessShader, textureID?: string) {
    super(shader, textureID);
  }

  get tDiffuse(): Texture {
    return this.uniforms.tDiffuse.value;
  }
  set tDiffuse(value: Texture) {
    this.uniforms.tDiffuse.value = value;
  }
}
