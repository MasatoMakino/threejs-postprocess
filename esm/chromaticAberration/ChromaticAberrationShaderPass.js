import { ChromaticAberrationShader } from "./ChromaticAberrationShader.js";
import { PostProcessShaderPass } from "../index.js";
export class ChromaticAberrationShaderPass extends PostProcessShaderPass {
    get rate() {
        return this.uniforms.rate.value;
    }
    set rate(value) {
        this.uniforms.rate.value = value;
    }
    get radiusInner() {
        return this.uniforms.radiusInner.value;
    }
    set radiusInner(value) {
        this.uniforms.radiusInner.value = value;
    }
    get radiusOuter() {
        return this.uniforms.radiusOuter.value;
    }
    set radiusOuter(value) {
        this.uniforms.radiusOuter.value = value;
    }
    constructor() {
        super(new ChromaticAberrationShader());
    }
}
