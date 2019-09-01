import { Color, Fog, Mesh, MeshLambertMaterial, SphereGeometry } from "three";
import { Common } from "./Common";
import * as dat from "dat.gui";
import { PostProcessRenderer } from "../bin";
import { PeripheralLightShaderPass } from "../bin";

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
    const pass = new PeripheralLightShaderPass();
    render.addComposer([pass]);

    render.onBeforeRequestAnimationFrame = () => {
      control.update();
    };
    render.start();

    this.initGUI(pass);
  }

  initObject(scene) {
    const geo = new SphereGeometry(10, 16, 16);
    const mat = new MeshLambertMaterial({
      fog: scene.fog !== undefined
    });
    mat.color = new Color(0xff6666);
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
    const gui = new dat.GUI();
    this.initGUIEffect(gui, pass);
  }

  initGUIEffect(gui, pass) {
    const prop = {
      color: pass.color.getHex()
    };
    const folder = gui.addFolder("PeripheralLightPass");
    folder.add(pass, "rate", 0.0, 10.0);
    folder.add(pass, "radiusInner", 0.0, 3.0);
    folder.add(pass, "radiusOuter", 0.0, 3.0);
    folder.addColor(prop, "color").onChange(val => {
      pass.color.setHex(val);
    });
    folder.open();
  }
}

window.onload = () => {
  const study = new Study();
};
