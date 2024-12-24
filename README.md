# threejs-postprocess

> Collection of post process module for three.js

[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg?style=flat)](LICENSE)
[![npm version](https://badge.fury.io/js/@masatomakino%2Fthreejs-postprocess.svg)](https://badge.fury.io/js/@masatomakino%2Fthreejs-postprocess)
[![Build test](https://github.com/MasatoMakino/threejs-postprocess/actions/workflows/buildTest.yml/badge.svg)](https://github.com/MasatoMakino/threejs-postprocess/actions/workflows/buildTest.yml)

[![ReadMe Card](https://github-readme-stats.vercel.app/api/pin/?username=MasatoMakino&repo=threejs-postprocess&show_owner=true)](https://github.com/MasatoMakino/threejs-postprocess)

## Demo

[Demo pages](https://masatomakino.github.io/threejs-postprocess/demo/)

## Getting Started

### Install

```bash
npm i -D @masatomakino/threejs-postprocess
```

### Import

threejs-postprocess is composed of ES6 modules and TypeScript d.ts files.

At first, import classes,

```javascript
import {
  PostProcessRenderer,
  ChromaticAberrationShaderPass,
} from "@masatomakino/threejs-postprocess";
```

### create `PostProcessRenderer` instance

```javascript
const postProcessRender = new PostProcessRenderer(scene, camera, renderer);
```

### create `Pass` instance

```javascript
const pass = new ChromaticAberrationShaderPass();
```

### add `Pass` array to `PostProcessRenderer`

```javascript
postProcessRender.addComposer([pass]);
```

`addComposer` function create `PostProcessEffectComposer` and add it into effect rendering pass.

### render

```javascript
RAFTicker.on("tick", postProcessRender.render);
```

## API documents

[API documents](https://masatomakino.github.io/threejs-postprocess/api/)

## License

[MIT licensed](LICENSE).
