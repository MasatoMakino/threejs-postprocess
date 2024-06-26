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
export declare class PostProcessShaderPass extends ShaderPass {
  uniforms: {
    [uniform: string]: IUniform;
  };
  constructor(shader: IPostProcessShader, textureID?: string);
  get tDiffuse(): Texture;
  set tDiffuse(value: Texture);
}
//# sourceMappingURL=PostProcessShaderPass.d.ts.map
