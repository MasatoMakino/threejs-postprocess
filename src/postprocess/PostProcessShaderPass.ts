import { IUniform } from "three";
import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass";

export class PostProcessShaderPass extends ShaderPass {
  uniforms: { [uniform: string]: IUniform };
}
