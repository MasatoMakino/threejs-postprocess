import {
  Color,
  Fog,
  Mesh,
  MeshLambertMaterial,
  PointLight,
  PointLightHelper,
  SphereGeometry,
  Vector2
} from "three";
import { Common } from "./Common";
import {
  BloomEffectComposer,
  PostProcessRenderer,
  FXAAShaderPass
} from "../bin";
import * as dat from "dat.gui";
import { SMAAPass } from "three/examples/jsm/postprocessing/SMAAPass";

export class StudyBloom {
  constructor() {
    const W = 640;
    const H = 480;

    const scene = Common.initScene();
    scene.fog = new Fog(0x000000, 80, 160);
    Common.initLight(scene);
    const camera = Common.initCamera(scene, W, H);
    const renderer = Common.initRenderer(W, H, { antialias: false });
    const control = Common.initControl(camera, renderer);
    Common.initHelper(scene);
    this.initObject(scene);

    this.postRenderer = new PostProcessRenderer(scene, camera, renderer);

    const size = renderer.getSize(new Vector2());
    this.smaaPass = new SMAAPass(size.width, size.height);
    this.fxaaPass = new FXAAShaderPass();

    this.postRenderer.addComposer([this.fxaaPass, this.smaaPass], renderer);
    this.postRenderer.start();

    this.initGUI();
  }

  initObject(scene) {
    const spot = new PointLight(0xffffff, 3, 0, 2);
    spot.position.set(0, 0, 0);
    scene.add(spot);
    const helper = new PointLightHelper(spot, 2, 0);
    scene.add(helper);

    const geo = new SphereGeometry(10, 32, 32);
    const mat = new MeshLambertMaterial({
      fog: scene.fog !== undefined,
      wireframe: true,
      color: new Color(0xffffff)
    });

    this.center = new Mesh(geo, mat);
    this.center.layers.enable(BloomEffectComposer.BLOOM);
    scene.add(this.center);
  }

  initGUI() {
    const gui = new dat.GUI();
    this.initPassGUI(gui);
    this.initGUIResolution(gui);
  }

  initPassGUI(gui) {
    const folder = gui.addFolder("Anti Aliasing");

    const AntiAliasingType = {
      None: 0,
      SMAA: 1,
      FXAA: 2
    };
    const prop = {
      AA_Type: AntiAliasingType.None
    };

    const onChanged = val => {
      console.log(val);
      this.smaaPass.enabled = val == AntiAliasingType.SMAA;
      this.fxaaPass.enabled = val == AntiAliasingType.FXAA;
      console.log(this.smaaPass.enabled);
    };

    folder
      .add(prop, "AA_Type", {
        None: AntiAliasingType.None,
        FXAA: AntiAliasingType.FXAA,
        SMAA: AntiAliasingType.SMAA
      })
      .onChange(onChanged);

    folder.open();

    onChanged(prop.AA_Type);
  }

  initGUIResolution(gui) {
    const size = this.postRenderer.getSize();
    const prop = {
      width: size.width,
      height: size.height
    };

    const onChange = () => {
      this.postRenderer.setSize(prop.width, prop.height);
    };
    const folder = gui.addFolder("Resolution");
    folder
      .add(prop, "width", 2, 1920)
      .step(1)
      .onChange(onChange);
    folder
      .add(prop, "height", 2, 1080)
      .step(1)
      .onChange(onChange);
    folder.open();
  }
}

window.onload = () => {
  const study = new StudyBloom();
};
