import { DisplacementMapShader } from "./DisplacementMapShader.js";
import { PostProcessShaderPass } from "../index.js";
import { Texture, TextureLoader } from "three";
import { Vector2 } from "three";

/**
 * DisplacementMapによって画面を歪ませるShaderPass
 */
export class DisplacementMapShaderPass extends PostProcessShaderPass {
  protected mapSizeW: number;
  protected mapSizeH: number;
  protected rendererSizeW: number;
  protected rendererSizeH: number;

  get map(): Texture {
    return this.uniforms.map.value;
  }

  /**
   * DisplacementMapを読み込む。
   * 読み込み後にアスペクト比の補正を行う。
   *
   * @param url
   */
  loadMap(url: string) {
    const texture = new TextureLoader().load(url, (texture) => {
      this.mapSizeW = texture.image.width;
      this.mapSizeH = texture.image.height;
      this.updateAspect();
    });
    this.uniforms.map.value = texture;
    this.uniforms.hasMap.value = texture != null;
  }

  get strengthX(): number {
    return this.uniforms.strengthX.value;
  }
  set strengthX(value: number) {
    this.uniforms.strengthX.value = value;
  }

  get strengthY(): number {
    return this.uniforms.strengthY.value;
  }
  set strengthY(value: number) {
    this.uniforms.strengthY.value = value;
  }

  constructor() {
    super(new DisplacementMapShader());
  }

  setSize(width: number, height: number): void {
    super.setSize(width, height);
    this.rendererSizeW = width;
    this.rendererSizeH = height;
    this.updateAspect();
  }

  updateAspect(): void {
    if (this.mapSizeW == null || this.rendererSizeW == null) {
      return;
    }
    const rendererAspect = this.rendererSizeW / this.rendererSizeH;
    const mapAspect = this.mapSizeW / this.mapSizeH;
    if (rendererAspect > mapAspect) {
      this.uniforms.aspect.value = new Vector2(1.0, mapAspect / rendererAspect);
    } else {
      this.uniforms.aspect.value = new Vector2(rendererAspect / mapAspect, 1.0);
    }
  }
}
