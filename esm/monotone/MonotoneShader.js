import { UniformsUtils, Color } from "three";
import { PostProcessShader } from "../index.js";
import FragmentShader from "./Monotone.frag.glsl.js";
export class MonotoneShader extends PostProcessShader {
    constructor() {
        super();
        this.fragmentShader = FragmentShader();
    }
    initUniform() {
        super.initUniform();
        this.uniforms = UniformsUtils.merge([
            this.uniforms,
            {
                strength: { value: 1.0 },
                color: { value: new Color(0xffffff) },
            },
        ]);
    }
}
