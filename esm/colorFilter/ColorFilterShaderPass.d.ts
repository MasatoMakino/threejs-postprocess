import { PostProcessShaderPass } from "../index.js";
/**
 * hsb値をオフセットして、色を変化させるシェーダーパス
 *
 * 例 )
 * multiS = 0.0, addB = 1.0にすると白に飽和する。
 * multiB = 0.0, もしくはaddB = -1.0 でブラックアウト。
 */
export declare class ColorFilterShaderPass extends PostProcessShaderPass {
    get h(): number;
    set h(value: number);
    get multiS(): number;
    set multiS(value: number);
    get multiB(): number;
    set multiB(value: number);
    get addS(): number;
    set addS(value: number);
    get addB(): number;
    set addB(value: number);
    constructor();
}
//# sourceMappingURL=ColorFilterShaderPass.d.ts.map