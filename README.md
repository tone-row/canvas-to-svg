# canvas-to-svg

This is port of https://github.com/gliffy/canvas2svg to Typescript.

## Maintenance Status

This repository is not currently being maintained, and may not be up-to-date with the latest versions of its dependencies or other relevant software. However, we welcome contributions from the community to help improve this repository and keep it up-to-date. If you are interested in contributing, please feel free to submit a pull request or open an issue on this repository.

## Description

This library turns your Canvas into SVG using javascript. In other words, this library lets you build an SVG document
using the canvas api. Why use it?

- You have a canvas drawing you want to persist as an SVG file.
- You like exporting things.
- Because you didn't want to transform your custom file format to SVG.

## Original demo

http://gliffy.github.io/canvas2svg/

## How it works

We create a mock 2d canvas context. Use the canvas context like you would on a normal canvas. As you call methods, we
build up a scene graph in SVG. Yay!

## Usage

```javascript
import canvasToSvg from "canvas-to-svg";

//Create a new mock canvas context. Pass in your desired width and height for your svg document.
const ctx = new canvasToSvg(500, 500);

//draw your canvas like you would normally
ctx.fillStyle = "red";
ctx.fillRect(100, 100, 100, 100);
//etc...

//serialize your SVG
const mySerializedSVG = ctx.getSerializedSvg(); //true here, if you need to convert named to numbered entities.

//If you really need to you can access the shadow inline SVG created by calling:
const svg = ctx.getSvg();
```

## Tests

To run tests:

```
yarn
yarn test
```

## Using with node.js

You can use `canvas2svg` with node.js using [jsdom](https://github.com/tmpconst/jsdom) with [node-canvas](https://github.com/Automattic/node-canvas). To do this first create a new document object, and then create a new instance of `C2S` based on that document:

```javascript
const canvas = require("canvas"),
  jsdom = require("jsdom"),
  C2S = require("canvas2svg").default; // <-- Note .default

const document = jsdom.jsdom();
const ctx = new C2S({ document: document });

// ... drawing code goes here ...
```

## Misc

Some canvas 2d context methods are not implemented yet.

## @tone-row/cytoscape-svg

My goals in fixing some of the issues with the original package are specific to using it with [cytoscape.js](https://js.cytoscape.org/). For that reason there is a copy of https://github.com/kinimesi/cytoscape-svg in the /cytoscape-svg directory, which simply uses `canvas-to-svg` (this package) instead of `canvas2svg`.

If the main `cytoscape-svg` package ever begins using this library instead, I will definitely delete that directory and switch back to using that package (https://github.com/kinimesi/cytoscape-svg), but for now this version is published under the scoped name @tone-row/cytoscape-svg.

## Releasing

To release a new version:

- Run `gulp bump` to update the version number
- Add a new entry to the [Updates](#Updates) table
- `git commit -am v1.0.xx`
- `git push`
- `npm publish`

## License

This library is licensed under the MIT license.
