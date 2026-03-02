# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

**IMPORTANT**: All npm/npx commands MUST be executed via DevContainer. Do NOT run npm or npx directly on the host. The DevContainer (`.devcontainer/devcontainer.json`) provides Node 22, Chrome, and xvfb required for testing.

```bash
# Start DevContainer (if not running)
devcontainer up --workspace-folder .

# Build TypeScript and generate demo pages
devcontainer exec --workspace-folder . npm run build

# Compile TypeScript to ESM in ./esm directory
devcontainer exec --workspace-folder . npm run buildTS

# Run tests with Vitest
devcontainer exec --workspace-folder . npm test

# Run tests in watch mode
devcontainer exec --workspace-folder . npm run test:watch

# Run tests with coverage reporting
devcontainer exec --workspace-folder . npm run test:coverage

# Start development server with file watching
devcontainer exec --workspace-folder . npm run start:dev

# Start browser-sync server for demo pages
devcontainer exec --workspace-folder . npm run server

# Generate demo pages
devcontainer exec --workspace-folder . npm run demo

# Format code with Prettier
devcontainer exec --workspace-folder . npx prettier --write --ignore-unknown .
```

### Demo Page Generation

The `npm run demo` command automatically scans `demoSrc/` directory for JavaScript files with `demo_` prefix and generates corresponding HTML files in `docs/demo/`. Key points:

- Each `demo_*.js` file in `demoSrc/` becomes a `demo_*.html` file in `docs/demo/`
- Generated HTML includes `<canvas id="webgl-canvas" width="640" height="480"></canvas>` by default
- Demo source files should import from `../esm/index.js` (the built ESM output)
- Never manually edit files in `docs/` directory - modify source files in `demoSrc/` instead

### Code Quality

- DevContainer-based Git hooks for pre-commit (Prettier format) and pre-push (Vitest tests)
- Files are automatically formatted on commit via pre-commit hook

## Project Architecture

This library provides a collection of post-processing effect modules for Three.js.

### Core Classes

- `PostProcessRenderer` - Main renderer that manages post-processing pipeline
- `PostProcessEffectComposer` - Effect composer wrapping Three.js EffectComposer
- `PostProcessShader` - Base shader class for custom post-processing effects
- `PostProcessShaderPass` - Shader pass that integrates with the composer pipeline

### Effect Modules

- **Bloom** (`src/bloom/`) - Bloom glow effect with material storage and switching
- **Chromatic Aberration** (`src/chromaticAberration/`) - RGB channel offset effect
- **Color Filter** (`src/colorFilter/`) - Color adjustment filters (brightness, contrast, etc.)
- **Displacement Map** (`src/displacement/`) - UV-based displacement effect
- **FXAA** (`src/fxaa/`) - Fast approximate anti-aliasing
- **Mix** (`src/mix/`) - Texture blending/mixing effect
- **Monotone** (`src/monotone/`) - Grayscale/monotone conversion
- **Peripheral Light** (`src/peripheralLight/`) - Vignette/peripheral lighting effect

### Dependencies

- **three.js**: Core 3D rendering (peer dependency ^0.160.0)
- **@masatomakino/raf-ticker**: Animation frame management (peer dependency)
- **TypeScript**: ES2021 target, ES2022 modules, strict mode enabled
- **Vitest**: Testing with browser environment via WebDriverIO + Chrome headless

### Build Output

- Source: `src/` directory with TypeScript files
- Built: `esm/` directory with compiled JS and declaration files
- Demo: `docs/demo/` directory with generated HTML demos
- Tests: `__test__/` directory with .spec.ts files

### Testing

- Uses Vitest with browser testing via WebDriverIO
- Tests run in Chrome headless mode with SwiftShader
- Coverage reports generated with Istanbul provider
- Test files located in `__test__/postprocess/` directory

## Development Rules and Guidelines

### Git and GitHub Workflow

- **Branch Strategy**: GitHub Flow - create feature branches from `main`, use pull requests for merging
- **Branch Naming**: `type/[issue-number-]purpose` format
  - Types: `feature/`, `fix/`, `test/`, `maintain/`, `perf/`, `docs/`
- **Main Branch**: Direct commits/pushes to `main` are prohibited
- **Git Commands**: Always use `--no-pager` option (e.g., `git --no-pager log`)

### TypeScript Coding Standards

- **Local Imports**: Include `.js` extension for ESM compatibility (`import { func } from './file.js'`)
- **Type Safety**: Avoid `as any` casts - redesign types instead
- **Shader Files**: GLSL shaders stored as `.frag.glsl.ts` TypeScript files

### Directory Structure Rules

- **Source**: `src/` - main TypeScript source files
- **Tests**: `__test__/` - test files
- **Demos**: `demoSrc/` - demo source files (import from `../esm/index.js`)
- **Build Output**: `esm/` - compiled JavaScript and declarations
- **Generated**: `docs/` - auto-generated demo pages and API docs (do not edit)
