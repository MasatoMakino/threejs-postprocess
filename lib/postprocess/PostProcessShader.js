"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostProcessShader = void 0;
/**
 * EffectComposer用のShaderオブジェクトに必要な要素を定義したクラス。
 * このクラスのインスタンスをShaderPassに渡すことで、任意のシェーダーエフェクトコンポーザーになる。
 */
var PostProcessShader = /** @class */ (function () {
    function PostProcessShader() {
        //language=GLSL
        this.vertexShader = "\n    varying vec2 vUv;\n    void main() {\n      vUv = uv;\n      gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );\n    }\n  ";
        this.initUniform();
    }
    PostProcessShader.prototype.initUniform = function () {
        this.uniforms = {
            tDiffuse: { value: null }
        };
    };
    return PostProcessShader;
}());
exports.PostProcessShader = PostProcessShader;
