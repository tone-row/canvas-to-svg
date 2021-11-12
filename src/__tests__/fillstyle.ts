import { CanvasToSvg } from "../ctx";

test("fillstyle", () => {
  let canvas = new CanvasToSvg();
  for (var i = 0; i < 6; i++) {
    for (var j = 0; j < 6; j++) {
      canvas.fillStyle =
        "rgb(" +
        Math.floor(255 - 42.5 * i) +
        "," +
        Math.floor(255 - 42.5 * j) +
        ",0)";
      canvas.fillRect(j * 25, i * 25, 25, 25);
    }
  }
  expect(canvas.getSvg()).toMatchInlineSnapshot(`
<svg
  height="500"
  version="1.1"
  width="500"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
>
  <defs />
  <g>
    <rect
      fill="rgb(255,255,0)"
      height="25"
      stroke="none"
      width="25"
      x="0"
      y="0"
    />
    <rect
      fill="rgb(255,212,0)"
      height="25"
      stroke="none"
      width="25"
      x="25"
      y="0"
    />
    <rect
      fill="rgb(255,170,0)"
      height="25"
      stroke="none"
      width="25"
      x="50"
      y="0"
    />
    <rect
      fill="rgb(255,127,0)"
      height="25"
      stroke="none"
      width="25"
      x="75"
      y="0"
    />
    <rect
      fill="rgb(255,85,0)"
      height="25"
      stroke="none"
      width="25"
      x="100"
      y="0"
    />
    <rect
      fill="rgb(255,42,0)"
      height="25"
      stroke="none"
      width="25"
      x="125"
      y="0"
    />
    <rect
      fill="rgb(212,255,0)"
      height="25"
      stroke="none"
      width="25"
      x="0"
      y="25"
    />
    <rect
      fill="rgb(212,212,0)"
      height="25"
      stroke="none"
      width="25"
      x="25"
      y="25"
    />
    <rect
      fill="rgb(212,170,0)"
      height="25"
      stroke="none"
      width="25"
      x="50"
      y="25"
    />
    <rect
      fill="rgb(212,127,0)"
      height="25"
      stroke="none"
      width="25"
      x="75"
      y="25"
    />
    <rect
      fill="rgb(212,85,0)"
      height="25"
      stroke="none"
      width="25"
      x="100"
      y="25"
    />
    <rect
      fill="rgb(212,42,0)"
      height="25"
      stroke="none"
      width="25"
      x="125"
      y="25"
    />
    <rect
      fill="rgb(170,255,0)"
      height="25"
      stroke="none"
      width="25"
      x="0"
      y="50"
    />
    <rect
      fill="rgb(170,212,0)"
      height="25"
      stroke="none"
      width="25"
      x="25"
      y="50"
    />
    <rect
      fill="rgb(170,170,0)"
      height="25"
      stroke="none"
      width="25"
      x="50"
      y="50"
    />
    <rect
      fill="rgb(170,127,0)"
      height="25"
      stroke="none"
      width="25"
      x="75"
      y="50"
    />
    <rect
      fill="rgb(170,85,0)"
      height="25"
      stroke="none"
      width="25"
      x="100"
      y="50"
    />
    <rect
      fill="rgb(170,42,0)"
      height="25"
      stroke="none"
      width="25"
      x="125"
      y="50"
    />
    <rect
      fill="rgb(127,255,0)"
      height="25"
      stroke="none"
      width="25"
      x="0"
      y="75"
    />
    <rect
      fill="rgb(127,212,0)"
      height="25"
      stroke="none"
      width="25"
      x="25"
      y="75"
    />
    <rect
      fill="rgb(127,170,0)"
      height="25"
      stroke="none"
      width="25"
      x="50"
      y="75"
    />
    <rect
      fill="rgb(127,127,0)"
      height="25"
      stroke="none"
      width="25"
      x="75"
      y="75"
    />
    <rect
      fill="rgb(127,85,0)"
      height="25"
      stroke="none"
      width="25"
      x="100"
      y="75"
    />
    <rect
      fill="rgb(127,42,0)"
      height="25"
      stroke="none"
      width="25"
      x="125"
      y="75"
    />
    <rect
      fill="rgb(85,255,0)"
      height="25"
      stroke="none"
      width="25"
      x="0"
      y="100"
    />
    <rect
      fill="rgb(85,212,0)"
      height="25"
      stroke="none"
      width="25"
      x="25"
      y="100"
    />
    <rect
      fill="rgb(85,170,0)"
      height="25"
      stroke="none"
      width="25"
      x="50"
      y="100"
    />
    <rect
      fill="rgb(85,127,0)"
      height="25"
      stroke="none"
      width="25"
      x="75"
      y="100"
    />
    <rect
      fill="rgb(85,85,0)"
      height="25"
      stroke="none"
      width="25"
      x="100"
      y="100"
    />
    <rect
      fill="rgb(85,42,0)"
      height="25"
      stroke="none"
      width="25"
      x="125"
      y="100"
    />
    <rect
      fill="rgb(42,255,0)"
      height="25"
      stroke="none"
      width="25"
      x="0"
      y="125"
    />
    <rect
      fill="rgb(42,212,0)"
      height="25"
      stroke="none"
      width="25"
      x="25"
      y="125"
    />
    <rect
      fill="rgb(42,170,0)"
      height="25"
      stroke="none"
      width="25"
      x="50"
      y="125"
    />
    <rect
      fill="rgb(42,127,0)"
      height="25"
      stroke="none"
      width="25"
      x="75"
      y="125"
    />
    <rect
      fill="rgb(42,85,0)"
      height="25"
      stroke="none"
      width="25"
      x="100"
      y="125"
    />
    <rect
      fill="rgb(42,42,0)"
      height="25"
      stroke="none"
      width="25"
      x="125"
      y="125"
    />
  </g>
</svg>
`);
});