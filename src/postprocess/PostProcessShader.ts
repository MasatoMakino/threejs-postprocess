import { IUniform } from "three";

/**
 * EffectComposer用のShaderオブジェクトに必要な要素を持つクラス。
 * 具体的には、uniformsとvertexShader, fragmentShaderをメンバーとして持つ。
 *
 * このクラスのインスタンスをShaderPassに渡すことで、任意のシェーダーエフェクトコンポーザーになる。
 * 参照関係はPostProcessEffectComposer → PostProcessShaderPass → PostProcessShader
 *
 * 型としては、ShaderPassのコンストラクター第一引数に渡すオブジェクトに相当する。
 */
export class PostProcessShader implements IPostProcessShader {
  uniforms: { [uniform: string]: IUniform };
  //language=GLSL
  vertexShader: string = /* GLSL */ `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
    }
  `;
  fragmentShader: string;

  constructor() {
    this.initUniform();
  }
  protected initUniform() {
    this.uniforms = {
      tDiffuse: { value: null },
    };
  }
}

export interface IPostProcessShader {
  uniforms: { [uniform: string]: IUniform };
  vertexShader: string;
  fragmentShader: string;
}
