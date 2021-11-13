import { CanvasToSvg } from "../CanvasToSvg";

test("emptyArc", () => {
  let canvas = new CanvasToSvg();
  // Draw shapes
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 3; j++) {
      canvas.beginPath();
      canvas.arc(100, 100, 100, Math.PI, Math.PI);
      canvas.fill();
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
    <path
      d=""
      fill="#000000"
      paint-order="stroke fill markers"
      stroke="none"
    />
    <path
      d=""
      fill="#000000"
      paint-order="stroke fill markers"
      stroke="none"
    />
    <path
      d=""
      fill="#000000"
      paint-order="stroke fill markers"
      stroke="none"
    />
    <path
      d=""
      fill="#000000"
      paint-order="stroke fill markers"
      stroke="none"
    />
    <path
      d=""
      fill="#000000"
      paint-order="stroke fill markers"
      stroke="none"
    />
    <path
      d=""
      fill="#000000"
      paint-order="stroke fill markers"
      stroke="none"
    />
    <path
      d=""
      fill="#000000"
      paint-order="stroke fill markers"
      stroke="none"
    />
    <path
      d=""
      fill="#000000"
      paint-order="stroke fill markers"
      stroke="none"
    />
    <path
      d=""
      fill="#000000"
      paint-order="stroke fill markers"
      stroke="none"
    />
    <path
      d=""
      fill="#000000"
      paint-order="stroke fill markers"
      stroke="none"
    />
    <path
      d=""
      fill="#000000"
      paint-order="stroke fill markers"
      stroke="none"
    />
    <path
      d=""
      fill="#000000"
      paint-order="stroke fill markers"
      stroke="none"
    />
  </g>
</svg>
`);
});
