import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass";
import { ChromaticAberrationShader } from "ts/chromaticAberration/ChromaticAberrationShader";
export class ChromaticAberrationPass extends ShaderPass {
    get rate() {
        return this.uniforms["rate"].value;
    }
    set rate(value) {
        this.uniforms["rate"].value = value;
    }
    get radiusInner() {
        return this.uniforms["radiusInner"].value;
    }
    set radiusInner(value) {
        this.uniforms["radiusInner"].value = value;
    }
    get radiusOuter() {
        return this.uniforms["radiusOuter"].value;
    }
    set radiusOuter(value) {
        this.uniforms["radiusOuter"].value = value;
    }
    constructor() {
        super(new ChromaticAberrationShader());
    }
}
