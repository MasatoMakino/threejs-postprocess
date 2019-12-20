import { IUniform } from "three";
import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass";
import { Texture } from "three";
export declare class PostProcessShaderPass extends ShaderPass {
    uniforms: {
        [uniform: string]: IUniform;
    };
    get tDiffuse(): Texture;
    set tDiffuse(value: Texture);
}
//# sourceMappingURL=PostProcessShaderPass.d.ts.map