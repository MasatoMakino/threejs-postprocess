import * as FXAAShaderModule from "three/examples/jsm/shaders/FXAAShader.js";
import { PostProcessShaderPass } from "../postprocess/index.js";
/**
 * FXAAShaderを組み込み済みのShaderPass
 */
export class FXAAShaderPass extends PostProcessShaderPass {
    /**
     * コンストラクタ
     */
    constructor() {
        super(FXAAShaderModule["FXAAShader"]);
    }
    setSize(width, height) {
        super.setSize(width, height);
        const uniforms = this.material.uniforms;
        uniforms.resolution.value.x = 1 / width;
        uniforms.resolution.value.y = 1 / height;
    }
}
