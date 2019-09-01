import { DisplacementMapShader } from "./DisplacementMapShader";
import { PostProcessShaderPass } from "../index";
import { Texture, TextureLoader } from "three";

/**
 * DisplacementMapによって画面を歪ませるShaderPass
 */
export class DisplacementMapShaderPass extends PostProcessShaderPass {
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
    const texture = new TextureLoader().load(url, texture => {
      //TODO setting aspect
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
}
