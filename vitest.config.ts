import { defineConfig } from "vitest/config";

export default defineConfig({
  test: {
    browser: {
      enabled: true,
      provider: "webdriverio",
      headless: true,
      instances: [{ browser: "chrome" }],
      providerOptions: {
        capabilities: {
          "goog:chromeOptions": {
            args: ["--use-gl=angle", "--use-angle=swiftshader"],
          },
        },
      },
    },
    poolOptions: {
      threads: {
        singleThread: true,
      },
    },
    coverage: {
      provider: "istanbul",
      reporter: ["text", "lcov"],
      include: ["src/**/*.ts"],
    },
  },
});
