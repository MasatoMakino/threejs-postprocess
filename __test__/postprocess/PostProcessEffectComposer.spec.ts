import { describe, it, expect } from "vitest";
import { PostProcessEffectComposer } from "../../src/postprocess/PostProcessEffectComposer.js";
import { WebGLRenderer } from "three";

describe("PostProcessEffectComposer", () => {
  it("should correctly instantiate PostProcessEffectComposer with default properties", () => {
    const canvas = document.createElement("canvas");
    const gl = require("gl")(1, 1);
    const renderer = new WebGLRenderer({ context: gl, canvas: canvas });
    const composer = new PostProcessEffectComposer(renderer);
    expect(composer).toBeInstanceOf(PostProcessEffectComposer);
    expect(composer.enabled).toBe(true);
    expect(composer.onBeforeRender).toBeUndefined();
    expect(composer.onAfterRender).toBeUndefined();
  });
});
