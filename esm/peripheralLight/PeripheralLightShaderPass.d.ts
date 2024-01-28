import { Color } from "three";
import { PostProcessShaderPass } from "../index.js";
/**
 * 周辺光量の減光を表現するフィルタ。
 */
export declare class PeripheralLightShaderPass extends PostProcessShaderPass {
    get rate(): number;
    set rate(value: number);
    get radiusInner(): number;
    set radiusInner(value: number);
    get radiusOuter(): number;
    set radiusOuter(value: number);
    get color(): Color;
    set color(value: Color);
    constructor();
}
//# sourceMappingURL=PeripheralLightShaderPass.d.ts.map