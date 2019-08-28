import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass";
import { Color } from "three";
import { IUniform } from "three";
/**
 * 周辺光量の減光を表現するフィルタ。
 */
export declare class PeripheralLightPass extends ShaderPass {
    uniforms: {
        [uniform: string]: IUniform;
    };
    rate: number;
    radiusInner: number;
    radiusOuter: number;
    color: Color;
    constructor();
}
//# sourceMappingURL=PeripheralLightPass.d.ts.map