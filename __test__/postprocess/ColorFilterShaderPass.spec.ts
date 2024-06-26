import { beforeEach, describe, expect, it, test } from "vitest";
import { ColorFilterShaderPass } from "../../src/index.js";
import { renderingPass } from "./PassRender.js";

describe("ColorFilter", () => {
  it("should be able to render", () => {
    renderingPass("ColorFilterPass", new ColorFilterShaderPass());
  });
});

describe("ColorFilter.accessor", () => {
  let pass: ColorFilterShaderPass;

  beforeEach(() => {
    pass = new ColorFilterShaderPass();
  });

  test("h getter and setter", () => {
    pass.h = 0.5;
    expect(pass.h).toBe(0.5);
  });

  test("multiS getter and setter", () => {
    pass.multiS = 0.5;
    expect(pass.multiS).toBe(0.5);
  });

  test("multiB getter and setter", () => {
    pass.multiB = 0.5;
    expect(pass.multiB).toBe(0.5);
  });

  test("addS getter and setter", () => {
    pass.addS = 0.5;
    expect(pass.addS).toBe(0.5);
  });

  test("addB getter and setter", () => {
    pass.addB = 0.5;
    expect(pass.addB).toBe(0.5);
  });
});
