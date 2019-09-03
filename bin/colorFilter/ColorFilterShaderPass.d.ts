import { PostProcessShaderPass } from "../index";
/**
 * hsb値をオフセットして、色を変化させるシェーダーパス
 *
 * 例 )
 * multiS = 0.0, addB = 1.0にすると白に飽和する。
 * multiB = 0.0, もしくはaddB = -1.0 でブラックアウト。
 */
export declare class ColorFilterShaderPass extends PostProcessShaderPass {
    h: number;
    multiS: number;
    multiB: number;
    addS: number;
    addB: number;
    constructor();
}
//# sourceMappingURL=ColorFilterShaderPass.d.ts.map