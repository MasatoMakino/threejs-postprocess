import { Color, Mesh, MeshLambertMaterial, SphereGeometry } from "three";
import { Common } from "./Common.js";
import GUI from "lil-gui";
import { ColorFilterShaderPass, PostProcessRenderer } from "../esm/index.js";
import { CommonGUI } from "./CommonGUI.js";
import { SMAAPass } from "three/examples/jsm/postprocessing/SMAAPass.js";
import { RAFTicker } from "@masatomakino/raf-ticker";

class Study {
  constructor() {
    const W = 640;
    const H = 480;

    const scene = Common.initScene();
    // scene.fog = new Fog(0xffffff, 80, 160);
    Common.initLight(scene);
    const camera = Common.initCamera(scene, W, H);
    const renderer = Common.initRenderer(W, H, { color: 0xffffff });
    const control = Common.initControl(camera, renderer);
    Common.initHelper(scene);
    this.initObject(scene);

    const render = new PostProcessRenderer(scene, camera, renderer);
    const pass = new ColorFilterShaderPass();
    const aa = new SMAAPass();
    render.addComposer([pass, aa]);
    RAFTicker.on("tick", render.render);

    this.initGUI(pass, render);
  }

  initObject(scene) {
    const geo = new SphereGeometry(10, 16, 16);
    const mat = new MeshLambertMaterial({
      fog: scene.fog !== undefined,
      color: new Color(0xff0000),
    });
    const center = new Mesh(geo, mat);
    scene.add(center);

    const matSatellite = mat.clone();
    matSatellite.color = new Color(0x00ff00);
    const satellite = new Mesh(geo, matSatellite);
    satellite.position.set(30, 0, 0);
    scene.add(satellite);

    const matSatellite2 = mat.clone();
    matSatellite2.color = new Color(0x222266);
    const satellite02 = new Mesh(geo, matSatellite2);
    satellite02.position.set(-30, 0, 0);
    scene.add(satellite02);
  }

  initGUI(pass, render) {
    const gui = new GUI();
    this.initGUIEffect(gui, pass);
    CommonGUI.initGUIResolution(gui, render);
  }

  initGUIEffect(gui, pass) {
    const folder = gui.addFolder("ColorFilter");
    folder.add(pass, "h", -1.0, 1.0).step(0.01);
    folder.add(pass, "multiS", 0.0, 1.0).step(0.01);
    folder.add(pass, "multiB", 0.0, 1.0).step(0.01);
    folder.add(pass, "addS", -1.0, 1.0).step(0.01);
    folder.add(pass, "addB", -1.0, 1.0).step(0.01);
    folder.open();
  }
}

window.onload = () => {
  const study = new Study();
};
