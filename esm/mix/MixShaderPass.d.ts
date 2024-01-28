import { PostProcessShaderPass } from "../index.js";
import { Texture } from "three";
/**
 * 他のエフェクトコンポーザーの描画結果を受け取り、自身のレンダリング結果に乗算するShaderPass
 */
export declare class MixShaderPass extends PostProcessShaderPass {
    get mixTexture(): Texture;
    set mixTexture(value: Texture);
    constructor(mixTexture: Texture);
}
//# sourceMappingURL=MixShaderPass.d.ts.map