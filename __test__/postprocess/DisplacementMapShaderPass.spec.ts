import { beforeEach, describe, expect, it, test } from "vitest";
import { renderingPass } from "./PassRender.js";
import { DisplacementMapShaderPass } from "../../src/index.js";

describe("DisplacementMapShaderPass", () => {
  it("should be able to render", () => {
    renderingPass("DisplacementMapShaderPass", new DisplacementMapShaderPass());
  });
});

describe("DisplacementMapShaderPass.accessor", () => {
  let pass: DisplacementMapShaderPass;

  beforeEach(() => {
    pass = new DisplacementMapShaderPass();
  });

  test("strengthX getter and setter", () => {
    pass.strengthX = 0.5;
    expect(pass.strengthX).toBe(0.5);
  });

  test("strengthY getter and setter", () => {
    pass.strengthY = 0.5;
    expect(pass.strengthY).toBe(0.5);
  });
});
