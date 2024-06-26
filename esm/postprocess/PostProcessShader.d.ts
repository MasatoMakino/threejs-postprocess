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
export declare class PostProcessShader implements IPostProcessShader {
    uniforms: {
        [uniform: string]: IUniform;
    };
    vertexShader: string;
    fragmentShader: string;
    constructor();
    protected initUniform(): void;
}
export interface IPostProcessShader {
    uniforms: {
        [uniform: string]: IUniform;
    };
    vertexShader: string;
    fragmentShader: string;
}
//# sourceMappingURL=PostProcessShader.d.ts.map