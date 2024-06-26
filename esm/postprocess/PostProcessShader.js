/**
 * EffectComposer用のShaderオブジェクトに必要な要素を持つクラス。
 * 具体的には、uniformsとvertexShader, fragmentShaderをメンバーとして持つ。
 *
 * このクラスのインスタンスをShaderPassに渡すことで、任意のシェーダーエフェクトコンポーザーになる。
 * 参照関係はPostProcessEffectComposer → PostProcessShaderPass → PostProcessShader
 *
 * 型としては、ShaderPassのコンストラクター第一引数に渡すオブジェクトに相当する。
 */
export class PostProcessShader {
    constructor() {
        //language=GLSL
        this.vertexShader = `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
    }
  `;
        this.initUniform();
    }
    initUniform() {
        this.uniforms = {
            tDiffuse: { value: null },
        };
    }
}
