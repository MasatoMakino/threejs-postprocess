import { MonotoneShader } from "./MonotoneShader.js";
import { PostProcessShaderPass } from "../index.js";
/**
 *
 */
export class MonotoneShaderPass extends PostProcessShaderPass {
    get color() {
        return this.uniforms.color.value;
    }
    set color(value) {
        this.uniforms.color.value = value;
    }
    get strength() {
        return this.uniforms.strength.value;
    }
    set strength(value) {
        this.uniforms.strength.value = value;
    }
    constructor() {
        super(new MonotoneShader());
    }
}
