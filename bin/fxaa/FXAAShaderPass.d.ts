import { ShaderMaterial } from "three";
import { PostProcessShaderPass } from "../postprocess";
/**
 * FXAAShaderを組み込み済みのShaderPass
 */
export declare class FXAAShaderPass extends PostProcessShaderPass {
    material: ShaderMaterial;
    /**
     * コンストラクタ
     */
    constructor();
    setSize(width: number, height: number): void;
}
//# sourceMappingURL=FXAAShaderPass.d.ts.map