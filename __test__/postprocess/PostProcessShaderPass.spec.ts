import { describe, it, expect } from "vitest";
import { PostProcessShader, PostProcessShaderPass } from "../../src/index.js";
import { Texture } from "three";

describe("PostProcessShaderPass", () => {
  it("should correctly instantiate PostProcessShaderPass with default properties", () => {
    const shader = new PostProcessShader();
    shader.fragmentShader = "";
    const pass = new PostProcessShaderPass(shader);

    expect(pass).toBeInstanceOf(PostProcessShaderPass);
    expect(pass.uniforms).toBeDefined();

    pass.tDiffuse = new Texture();
    expect(pass.tDiffuse).toBeDefined();
  });
});
