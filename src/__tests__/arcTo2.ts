import { CanvasToSvg } from "../ctx";

test("arcTo2", () => {
  let canvas = new CanvasToSvg();
  canvas.beginPath();
  canvas.moveTo(100, 225); // P0
  canvas.arcTo(300, 25, 500, 225, 75); // P1, P2 and the radius
  canvas.lineTo(500, 225); // P2
  canvas.stroke();
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
      d=" M 100 225 L 246.96699141100893 78.03300858899107 L 246.96699141100893 78.03300858899107 A 75 75 0 0 1 353.03300858899104 78.03300858899107 L 500 225"
      fill="none"
      paint-order="fill stroke markers"
      stroke="#000000"
      stroke-dasharray=""
      stroke-miterlimit="10"
    />
  </g>
</svg>
`);
});
