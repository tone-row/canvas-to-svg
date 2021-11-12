import { CanvasToSvg } from "../ctx";
test("arcTo", () => {
  const canvas = new CanvasToSvg();
  canvas.beginPath();
  canvas.moveTo(150, 20);
  canvas.arcTo(150, 100, 50, 20, 30);
  canvas.stroke();

  canvas.fillStyle = "blue";
  // base point
  canvas.fillRect(150, 20, 10, 10);

  canvas.fillStyle = "red";
  // control point one
  canvas.fillRect(150, 100, 10, 10);
  // control point two
  canvas.fillRect(50, 20, 10, 10);
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
      d=" M 150 20 L 150 37.58125457540291 L 150 37.58125457540291 A 30 30 0 0 1 101.25914857336727 61.00731885869382"
      fill="none"
      paint-order="fill stroke markers"
      stroke="#000000"
      stroke-dasharray=""
      stroke-miterlimit="10"
    />
    <rect
      fill="blue"
      height="10"
      stroke="none"
      width="10"
      x="150"
      y="20"
    />
    <rect
      fill="red"
      height="10"
      stroke="none"
      width="10"
      x="150"
      y="100"
    />
    <rect
      fill="red"
      height="10"
      stroke="none"
      width="10"
      x="50"
      y="20"
    />
  </g>
</svg>
`);
});
