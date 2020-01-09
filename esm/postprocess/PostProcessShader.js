/**
 * EffectComposer用のShaderオブジェクトに必要な要素を定義したクラス。
 * このクラスのインスタンスをShaderPassに渡すことで、任意のシェーダーエフェクトコンポーザーになる。
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
            tDiffuse: { value: null }
        };
    }
}
