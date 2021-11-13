import { CanvasToSvg } from "../CanvasToSvg";

test("linewidth", () => {
  const ctx = new CanvasToSvg();
  for (var i = 0; i < 10; i++) {
    ctx.lineWidth = 1 + i;
    ctx.beginPath();
    ctx.moveTo(5 + i * 14, 5);
    ctx.lineTo(5 + i * 14, 140);
    ctx.stroke();
  }
  expect(ctx.getSvg()).toMatchInlineSnapshot(`
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
      d=" M 5 5 L 5 140"
      fill="none"
      paint-order="fill stroke markers"
      stroke="#000000"
      stroke-dasharray=""
      stroke-miterlimit="10"
    />
    <path
      d=" M 19 5 L 19 140"
      fill="none"
      paint-order="fill stroke markers"
      stroke="#000000"
      stroke-dasharray=""
      stroke-miterlimit="10"
      stroke-width="2"
    />
    <path
      d=" M 33 5 L 33 140"
      fill="none"
      paint-order="fill stroke markers"
      stroke="#000000"
      stroke-dasharray=""
      stroke-miterlimit="10"
      stroke-width="3"
    />
    <path
      d=" M 47 5 L 47 140"
      fill="none"
      paint-order="fill stroke markers"
      stroke="#000000"
      stroke-dasharray=""
      stroke-miterlimit="10"
      stroke-width="4"
    />
    <path
      d=" M 61 5 L 61 140"
      fill="none"
      paint-order="fill stroke markers"
      stroke="#000000"
      stroke-dasharray=""
      stroke-miterlimit="10"
      stroke-width="5"
    />
    <path
      d=" M 75 5 L 75 140"
      fill="none"
      paint-order="fill stroke markers"
      stroke="#000000"
      stroke-dasharray=""
      stroke-miterlimit="10"
      stroke-width="6"
    />
    <path
      d=" M 89 5 L 89 140"
      fill="none"
      paint-order="fill stroke markers"
      stroke="#000000"
      stroke-dasharray=""
      stroke-miterlimit="10"
      stroke-width="7"
    />
    <path
      d=" M 103 5 L 103 140"
      fill="none"
      paint-order="fill stroke markers"
      stroke="#000000"
      stroke-dasharray=""
      stroke-miterlimit="10"
      stroke-width="8"
    />
    <path
      d=" M 117 5 L 117 140"
      fill="none"
      paint-order="fill stroke markers"
      stroke="#000000"
      stroke-dasharray=""
      stroke-miterlimit="10"
      stroke-width="9"
    />
    <path
      d=" M 131 5 L 131 140"
      fill="none"
      paint-order="fill stroke markers"
      stroke="#000000"
      stroke-dasharray=""
      stroke-miterlimit="10"
      stroke-width="10"
    />
  </g>
</svg>
`);
});
