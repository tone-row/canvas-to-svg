import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import sourcemaps from "rollup-plugin-sourcemaps";

export default {
  input: "src/index.js",
  output: {
    file: "cytoscape-svg.js",
    format: "iife",
    sourcemap: true,
  },
  plugins: [nodeResolve(), commonjs(), sourcemaps()],
};
