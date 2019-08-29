import { Vector2, WebGLRenderer } from "three";
import { PostProcessEffectComposer } from "../postprocess/PostProcessEffectComposer";
import { UnrealBloomPass } from "three/examples/jsm/postprocessing/UnrealBloomPass";
import { RenderPassOption } from "../postprocess";
import { Scene } from "three";

export class BloomComposer extends PostProcessEffectComposer {
  public bloomPass: UnrealBloomPass;
  protected scene: Scene;

  constructor(
    scene: Scene,
    renderer: WebGLRenderer,
    renderPassOption: RenderPassOption
  ) {
    super(renderer);

    this.scene = scene;

    const size = renderer.getSize(new Vector2());
    this.bloomPass = new UnrealBloomPass(size, 1.5, 0.4, 0.4);

    // TODO : PR d.ts
    // @ts-ignore
    this.renderToScreen = false;

    RenderPassOption.init(renderPassOption);
    this.addPass(renderPassOption.renderPass);
    this.addPass(this.bloomPass);
  }
}
