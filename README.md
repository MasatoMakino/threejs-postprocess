# threejs-postprocess

Collection of post process module for three.js

[![MIT License](http://img.shields.io/badge/license-MIT-blue.svg?style=flat)](LICENSE)

## Demo

[Anti-Aliasing](https://masatomakino.github.io/threejs-postprocess/demo/anti_aliasing)

[Bloom](https://masatomakino.github.io/threejs-postprocess/demo/bloom)

[Chromatic Aberration](https://masatomakino.github.io/threejs-postprocess/demo/chromatic)

[Peripheral Light](https://masatomakino.github.io/threejs-postprocess/demo/peripheral)

[DisplacementMap](https://masatomakino.github.io/threejs-postprocess/demo/displacement)

[HSB Color Filter](https://masatomakino.github.io/threejs-postprocess/demo/color_filter)

[Monotone](https://masatomakino.github.io/threejs-postprocess/demo/monotone)

## Getting Started

### Install

```bash
npm install https://github.com/MasatoMakino/threejs-postprocess.git --save-dev
```

### Import

threejs-postprocess is composed of ES6 modules and TypeScript d.ts files.

At first, import classes,

```javascript
import {
  PostProcessRenderer,
  ChromaticAberrationShaderPass
} from "threejs-postprocess";
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
postProcessRender.start();
```

## API documents

[API documents](https://masatomakino.github.io/threejs-postprocess/api/)

## License

[MIT licensed](LICENSE).
