import { IUniform } from "three";

/**
 * EffectComposer用のShaderオブジェクトに必要な要素を定義したクラス。
 * このクラスのインスタンスをShaderPassに渡すことで、任意のシェーダーエフェクトコンポーザーになる。
 */
export class PostProcessShader {
  uniforms: { [uniform: string]: IUniform };
  vertexShader: string = `
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
      tDiffuse: { value: null }
    };
  }
}
