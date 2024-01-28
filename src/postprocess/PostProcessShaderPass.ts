import { IUniform } from "three";
import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass.js";
import { Texture } from "three";

export class PostProcessShaderPass extends ShaderPass {
  uniforms: { [uniform: string]: IUniform };

  get tDiffuse(): Texture {
    return this.uniforms.tDiffuse.value;
  }
  set tDiffuse(value: Texture) {
    this.uniforms.tDiffuse.value = value;
  }
}
