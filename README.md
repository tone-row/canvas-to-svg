# canvas-to-svg

This is port of https://github.com/gliffy/canvas2svg to Typescript. There were a number of open issues on the original and the most recent commits were in October 2017. I intend to fix issues to the best of my ability and **strongly welcome contributions**!

## To Do

- Set up deployment
- Add @tone-row/cytoscape-svg package
- Finish moving tests over and delete old tests folder
- Add github action to run tests
- Clean up all _any_ types

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

## Releasing

To release a new version:

- Run `gulp bump` to update the version number
- Add a new entry to the [Updates](#Updates) table
- `git commit -am v1.0.xx`
- `git push`
- `npm publish`

## License

This library is licensed under the MIT license.
