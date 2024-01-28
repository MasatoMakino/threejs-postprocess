import { PostProcessShaderPass } from "../index.js";
import { Texture } from "three";
/**
 * DisplacementMapによって画面を歪ませるShaderPass
 */
export declare class DisplacementMapShaderPass extends PostProcessShaderPass {
    protected mapSizeW: number;
    protected mapSizeH: number;
    protected rendererSizeW: number;
    protected rendererSizeH: number;
    get map(): Texture;
    /**
     * DisplacementMapを読み込む。
     * 読み込み後にアスペクト比の補正を行う。
     *
     * @param url
     */
    loadMap(url: string): void;
    get strengthX(): number;
    set strengthX(value: number);
    get strengthY(): number;
    set strengthY(value: number);
    constructor();
    setSize(width: number, height: number): void;
    updateAspect(): void;
}
//# sourceMappingURL=DisplacementMapShaderPass.d.ts.map