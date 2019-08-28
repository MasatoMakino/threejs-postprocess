import { Color } from "three";
import { PostProcessShaderPass } from "../index";
/**
 * 周辺光量の減光を表現するフィルタ。
 */
export declare class PeripheralLightShaderPass extends PostProcessShaderPass {
    rate: number;
    radiusInner: number;
    radiusOuter: number;
    color: Color;
    constructor();
}
//# sourceMappingURL=PeripheralLightShaderPass.d.ts.map