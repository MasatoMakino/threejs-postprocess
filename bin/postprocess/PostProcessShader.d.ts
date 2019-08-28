import { IUniform } from "three";
/**
 * EffectComposer用のShaderオブジェクトに必要な要素を定義したクラス。
 * このクラスのインスタンスをShaderPassに渡すことで、任意のシェーダーエフェクトコンポーザーになる。
 */
export declare class PostProcessShader {
    uniforms: {
        [uniform: string]: IUniform;
    };
    vertexShader: string;
    fragmentShader: string;
    constructor();
    protected initUniform(): void;
}
//# sourceMappingURL=PostProcessShader.d.ts.map