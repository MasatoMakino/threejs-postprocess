import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass";
export class PostProcessShaderPass extends ShaderPass {
    get tDiffuse() {
        return this.uniforms.tDiffuse.value;
    }
    set tDiffuse(value) {
        this.uniforms.tDiffuse.value = value;
    }
}
