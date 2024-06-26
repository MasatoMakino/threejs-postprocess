import { beforeEach, describe, expect, it, test, vi } from "vitest";
import { renderingPass } from "./PassRender.js";
import {
  BloomEffectComposer,
  MixShaderPass,
  PostProcessRenderer,
} from "../../src/index.js";
import { generateScene } from "./SceneGenerator.js";
import { RenderPass } from "three/examples/jsm/Addons.js";
import { BoxGeometry, Mesh, MeshBasicMaterial, MeshPhongMaterial } from "three";

describe("BloomEffectComposer", () => {
  it("should be able to render", () => {
    const { scene, camera, webGLRenderer } = generateScene();
    const renderer = new PostProcessRenderer(scene, camera, webGLRenderer);
    const renderPass = new RenderPass(scene, camera);
    const bloom = new BloomEffectComposer(scene, webGLRenderer, {
      renderPass,
    });

    const mixPass = new MixShaderPass(bloom.result);

    renderer.composers.push(bloom);
    const composer = renderer.createScreenRenderingComposer(
      [mixPass],
      renderPass,
    );

    const mesh = new Mesh(new BoxGeometry(1, 1, 1), new MeshPhongMaterial());
    const meshWithArray = new Mesh(new BoxGeometry(1, 1, 1), [
      new MeshBasicMaterial(),
      new MeshBasicMaterial(),
      new MeshBasicMaterial(),
      new MeshBasicMaterial(),
      new MeshBasicMaterial(),
      new MeshBasicMaterial(),
    ]);
    scene.add(mesh, meshWithArray);

    composer.onAfterRender = vi.fn();
    composer.onBeforeRender = vi.fn();
    const errorSpy = vi.spyOn(console, "error").mockImplementation(() => {});
    const message = "BloomEffectComposer";

    renderer.render(0);
    renderer.render(1000);

    expect(composer.onAfterRender, message).toBeCalled();
    expect(composer.onBeforeRender, message).toBeCalled();
    expect(
      errorSpy,
      message + " : The compilation of the fragmentShader",
    ).not.toBeCalled();

    errorSpy.mockRestore();
  });
});
