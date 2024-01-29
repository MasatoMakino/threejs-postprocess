import {
  Color,
  Fog,
  Light,
  Mesh,
  MeshLambertMaterial,
  PointLight,
  PointLightHelper,
  SphereGeometry,
} from "three";
import { Common } from "./Common.js";
import {
  BloomEffectComposer,
  MixShaderPass,
  PostProcessRenderer,
} from "../esm/index.js";
import GUI from "lil-gui";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { RAFTicker } from "@masatomakino/raf-ticker";

export class StudyBloom {
  constructor() {
    const W = 640;
    const H = 480;

    const scene = Common.initScene();
    Common.initLight(scene);
    const camera = Common.initCamera(scene, W, H);
    const renderer = Common.initRenderer(W, H);
    const control = Common.initControl(camera, renderer);
    Common.initHelper(scene);
    this.initObject(scene);

    this.postRenderer = new PostProcessRenderer(scene, camera, renderer);

    const size = this.postRenderer.getSize();
    const renderPass = new RenderPass(scene, camera);
    this.bloom = new BloomEffectComposer(scene, renderer, {
      renderPass,
    });
    this.bloom.bloomPass.threshold = 0.1;
    this.bloom.bloomPass.strength = 1;

    const mixPass = new MixShaderPass(this.bloom.result);

    this.postRenderer.composers.push(this.bloom);
    this.postRenderer.addComposer([mixPass], renderPass);
    RAFTicker.on("tick", this.postRenderer.render);

    this.initGUI();
  }

  initObject(scene) {
    const spot = new PointLight(0xffffff, 2_000);
    spot.position.set(0, 0, 0);
    scene.add(spot);
    const helper = new PointLightHelper(spot, 2, 0);
    scene.add(helper);

    const geo = new SphereGeometry(10, 32, 32);
    const mat = new MeshLambertMaterial({
      fog: scene.fog !== undefined,
    });
    mat.color = new Color(0xff6666);
    this.center = new Mesh(geo, mat);
    this.center.layers.enable(BloomEffectComposer.BLOOM);
    scene.add(this.center);

    this.satellite = new Mesh(geo, mat.clone());
    this.satellite.position.set(30, 0, 0);
    scene.add(this.satellite);

    const satellite02 = new Mesh(geo, mat);
    satellite02.position.set(-30, 0, 0);
    scene.add(satellite02);
  }

  initGUI() {
    const gui = new GUI();
    this.initGUIBloom(gui);
    this.initGUISatellite(gui);
    this.initPassGUI(gui);
    this.initGUIResolution(gui);
  }

  initGUIBloom(gui) {
    const prop = {
      bloomCenter: true,
      bloomSatellite: false,
    };
    const switchBloom = (target, isBloom) => {
      if (isBloom) {
        target.layers.enable(BloomEffectComposer.BLOOM);
      } else {
        target.layers.disable(BloomEffectComposer.BLOOM);
      }
    };

    const folder = gui.addFolder("bloom");
    folder.add(prop, "bloomCenter").onChange((val) => {
      switchBloom(this.center, val);
    });
    folder.add(prop, "bloomSatellite").onChange((val) => {
      switchBloom(this.satellite, val);
    });
    folder.open();
  }

  initGUISatellite(gui) {
    const folder = gui.addFolder("Satellite");
    folder.add(this.satellite.material, "transparent");
    folder.add(this.satellite.material, "opacity", 0.0, 1.0);
    folder.open();
  }

  initPassGUI(gui) {
    const folder = gui.addFolder("renderer");
    folder.add(this.bloom.bloomPass, "threshold", 0.0, 1.0);
    folder.add(this.bloom.bloomPass, "strength", 0.0, 3.0);
    folder.add(this.bloom.bloomPass, "radius", 0.0, 1.0);
    folder.open();
  }

  initGUIResolution(gui) {
    const size = this.postRenderer.getSize();
    const prop = {
      width: size.width,
      height: size.height,
    };

    const onChange = () => {
      this.postRenderer.setSize(prop.width, prop.height);
    };
    const folder = gui.addFolder("Resolution");
    folder.add(prop, "width", 2, 1920).step(1).onChange(onChange);
    folder.add(prop, "height", 2, 1080).step(1).onChange(onChange);
    folder.open();
  }
}

window.onload = () => {
  const study = new StudyBloom();
};
