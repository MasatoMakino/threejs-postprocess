import { Color, Fog, Mesh, MeshLambertMaterial, SphereGeometry } from "three";
import { Common } from "./Common";
import * as dat from "dat.gui";
import { PostProcessRenderer } from "../bin";
import { ColorFilterShaderPass } from "../bin";
import { CommonGUI } from "./CommonGUI";

class Study {
  constructor() {
    const W = 640;
    const H = 480;

    const scene = Common.initScene();
    scene.fog = new Fog(0xffffff, 80, 160);
    Common.initLight(scene);
    const camera = Common.initCamera(scene, W, H);
    const renderer = Common.initRenderer(W, H, { color: 0xffffff });
    const control = Common.initControl(camera, renderer);
    Common.initHelper(scene);
    this.initObject(scene);

    const render = new PostProcessRenderer(scene, camera, renderer);
    const pass = new ColorFilterShaderPass();
    render.addComposer([pass]);
    render.start();

    this.initGUI(pass);
  }

  initObject(scene) {
    const geo = new SphereGeometry(10, 16, 16);
    const mat = new MeshLambertMaterial({
      fog: scene.fog !== undefined,
      color: new Color(0xff0000)
    });
    const center = new Mesh(geo, mat);
    scene.add(center);

    const matSatellite = mat.clone();
    matSatellite.color = new Color(0x00ff00);
    const satellite = new Mesh(geo, matSatellite);
    satellite.position.set(30, 0, 0);
    scene.add(satellite);

    const matSatellite2 = mat.clone();
    matSatellite2.color = new Color(0x0000ff);
    const satellite02 = new Mesh(geo, matSatellite2);
    satellite02.position.set(-30, 0, 0);
    scene.add(satellite02);
  }

  initGUI(pass) {
    const gui = new dat.GUI();
    this.initGUIEffect(gui, pass);
    CommonGUI.initGUIResolution(gui, this.postRenderer);
  }

  initGUIEffect(gui, pass) {
    const folder = gui.addFolder("ColorFilter");
    folder.add(pass, "h", -10.0, 10.0);
    folder.add(pass, "s", -10.0, 10.0);
    folder.add(pass, "b", -10.0, 10.0);
    folder.open();
  }
}

window.onload = () => {
  const study = new Study();
};
