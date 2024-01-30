import { describe, it, expect } from "vitest";
import { PostProcessShader } from "../../src/postprocess/PostProcessShader.js";
import { PostProcessShaderPass } from "../../src/postprocess/PostProcessShaderPass.js";
import { Texture } from "three";

describe("PostProcessShaderPass", () => {
  it("should correctly instantiate PostProcessShaderPass with default properties", () => {
    const pass = new PostProcessShaderPass(new PostProcessShader());

    expect(pass).toBeInstanceOf(PostProcessShaderPass);
    expect(pass.uniforms).toBeDefined();

    pass.tDiffuse = new Texture();
    expect(pass.tDiffuse).toBeDefined();
  });
});
