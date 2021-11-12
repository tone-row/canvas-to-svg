import { CanvasToSvg } from "../ctx";

test("linecap", () => {
  const canvas = new CanvasToSvg();

  var lineCap = ["butt", "round", "square"];

  // Draw guides
  canvas.strokeStyle = "#09f";
  canvas.beginPath();
  canvas.moveTo(10, 10);
  canvas.lineTo(140, 10);
  canvas.moveTo(10, 140);
  canvas.lineTo(140, 140);
  canvas.stroke();

  // Draw lines
  canvas.strokeStyle = "black";
  for (var i = 0; i < lineCap.length; i++) {
    canvas.lineWidth = 15;
    canvas.lineCap = lineCap[i];
    canvas.beginPath();
    canvas.moveTo(25 + i * 50, 10);
    canvas.lineTo(25 + i * 50, 140);
    canvas.stroke();
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
      d=" M 10 10 L 140 10 M 10 140 L 140 140"
      fill="none"
      paint-order="fill stroke markers"
      stroke="#09f"
      stroke-dasharray=""
      stroke-miterlimit="10"
    />
    <path
      d=" M 25 10 L 25 140"
      fill="none"
      paint-order="fill stroke markers"
      stroke="black"
      stroke-dasharray=""
      stroke-miterlimit="10"
      stroke-width="15"
    />
    <path
      d=" M 75 10 L 75 140"
      fill="none"
      paint-order="fill stroke markers"
      stroke="black"
      stroke-dasharray=""
      stroke-linecap="round"
      stroke-miterlimit="10"
      stroke-width="15"
    />
    <path
      d=" M 125 10 L 125 140"
      fill="none"
      paint-order="fill stroke markers"
      stroke="black"
      stroke-dasharray=""
      stroke-linecap="square"
      stroke-miterlimit="10"
      stroke-width="15"
    />
  </g>
</svg>
`);
});
