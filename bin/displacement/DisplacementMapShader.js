import { UniformsUtils } from "three";
import { PostProcessShader } from "../index";
import FragmentShader from "./DisplacementMap.frag.glsl";
import { Vector2 } from "three";
export class DisplacementMapShader extends PostProcessShader {
    constructor() {
        super();
        this.fragmentShader = FragmentShader();
    }
    initUniform() {
        super.initUniform();
        this.uniforms = UniformsUtils.merge([
            this.uniforms,
            {
                strengthX: { value: 0.0 },
                strengthY: { value: 0.0 },
                map: { value: null },
                hasMap: { value: false },
                aspect: { value: new Vector2(1.0, 1.0) }
            }
        ]);
    }
}
