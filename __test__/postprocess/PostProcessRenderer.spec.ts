import { describe, it, expect, vi } from "vitest";
import { FXAAShaderPass, PostProcessRenderer } from "../../src/index.js";
import { PerspectiveCamera, Scene, WebGLRenderer } from "three";

describe("PostProcessRenderer", () => {
  const generateWebGLRenderer = () => {
    const renderer = new WebGLRenderer();
    return renderer;
  };

  const generateScene = () => {
    const scene = new Scene();
    const camera = new PerspectiveCamera(75, 1, 0.1, 1000);
    return { scene, camera };
  };

  it("should be able to create an instance", () => {
    const { scene, camera } = generateScene();
    const webGLRenderer = generateWebGLRenderer();
    const renderer = new PostProcessRenderer(scene, camera, webGLRenderer);

    expect(renderer).toBeInstanceOf(PostProcessRenderer);
  });

  it("should be able to add composer", () => {
    const { scene, camera } = generateScene();
    const webGLRenderer = generateWebGLRenderer();
    const renderer = new PostProcessRenderer(scene, camera, webGLRenderer);

    const pass = new FXAAShaderPass();
    renderer.createScreenRenderingComposer([pass]);
    expect(renderer.composers.length).toBe(1);
  });

  it("should be able to resize renderer", () => {
    const { scene, camera } = generateScene();
    const webGLRenderer = generateWebGLRenderer();
    const renderer = new PostProcessRenderer(scene, camera, webGLRenderer);

    renderer.setSize(100, 200);
    expect(renderer.getSize().width).toBe(100);
    expect(renderer.getSize().height).toBe(200);
  });

  it("should be able to resize composers", () => {
    const { scene, camera } = generateScene();
    const webGLRenderer = generateWebGLRenderer();
    const renderer = new PostProcessRenderer(scene, camera, webGLRenderer);

    const pass = new FXAAShaderPass();
    renderer.createScreenRenderingComposer([pass]);
    renderer.setSize(100, 200);

    expect(pass.uniforms.resolution.value.x).toBe(1 / 100);
    expect(pass.uniforms.resolution.value.y).toBe(1 / 200);
  });

  it("should be able to render", () => {
    const { scene, camera } = generateScene();
    const webGLRenderer = generateWebGLRenderer();
    const renderer = new PostProcessRenderer(scene, camera, webGLRenderer);

    const pass = new FXAAShaderPass();
    const composer = renderer.createScreenRenderingComposer([pass]);
    composer.onAfterRender = vi.fn();
    composer.onBeforeRender = vi.fn();

    renderer.render(0);
    expect(composer.onAfterRender).toBeCalled();
    expect(composer.onBeforeRender).toBeCalled();
  });
});
