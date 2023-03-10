import {
  Color,
  Fog,
  Mesh,
  MeshLambertMaterial,
  PointLight,
  PointLightHelper,
  SphereGeometry,
} from "three";
import { Common } from "./Common";
import GUI from "lil-gui";
import { ChromaticAberrationShaderPass, PostProcessRenderer } from "..";
import { RAFTicker } from "@masatomakino/raf-ticker";

export class Study {
  constructor() {
    const W = 640;
    const H = 480;

    const scene = Common.initScene();
    scene.fog = new Fog(0x000000, 80, 160);
    Common.initLight(scene);
    const camera = Common.initCamera(scene, W, H);
    const renderer = Common.initRenderer(W, H);
    const control = Common.initControl(camera, renderer);
    Common.initHelper(scene);
    this.initObject(scene);

    const postProcessRender = new PostProcessRenderer(scene, camera, renderer);
    const pass = new ChromaticAberrationShaderPass();
    postProcessRender.addComposer([pass]);

    RAFTicker.on("tick", postProcessRender.render);

    this.initGUI(pass);
  }

  initObject(scene) {
    const spot = new PointLight(0xffffff, 3, 0, 2);
    spot.position.set(0, 0, 0);
    scene.add(spot);
    const helper = new PointLightHelper(spot, 2, 0);
    scene.add(helper);

    const geo = new SphereGeometry(10, 6, 6);
    const mat = new MeshLambertMaterial({
      fog: scene.fog !== undefined,
    });
    mat.color = new Color(0xff6666);
    mat.wireframe = true;
    const center = new Mesh(geo, mat);
    scene.add(center);

    const satellite = new Mesh(geo, mat.clone());
    satellite.position.set(30, 0, 0);
    scene.add(satellite);

    const satellite02 = new Mesh(geo, mat);
    satellite02.position.set(-30, 0, 0);
    scene.add(satellite02);
  }

  initGUI(pass) {
    const gui = new GUI();
    this.initGUIPass(gui, pass);
  }

  initGUIPass(gui, pass) {
    const folder = gui.addFolder("Chromatic Aberration");
    folder.add(pass, "rate", 0.0, 3.0);
    folder.add(pass, "radiusInner", 0.0, 3.0);
    folder.add(pass, "radiusOuter", 0.0, 3.0);
    folder.open();
  }
}

window.onload = () => {
  const study = new Study();
};
