import { CanvasToSvg } from "../ctx";
test("arc", () => {
  let canvas = new CanvasToSvg();
  // Draw shapes
  for (let i = 0; i < 4; i++) {
    for (let j = 0; j < 3; j++) {
      canvas.beginPath();
      var x = 25 + j * 50; // x coordinate
      var y = 25 + i * 50; // y coordinate
      var radius = 20; // Arc radius
      var startAngle = 0; // Starting point on circle
      var endAngle = Math.PI + (Math.PI * j) / 2; // End point on circle
      var clockwise = i % 2 == 0 ? false : true; // clockwise or anticlockwise

      canvas.arc(x, y, radius, startAngle, endAngle, clockwise);

      if (i > 1) {
        canvas.fill();
      } else {
        canvas.stroke();
      }
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
      d=" M 45 25 A 20 20 0 0 1 5 25.000000000000004"
      fill="none"
      paint-order="fill stroke markers"
      stroke="#000000"
      stroke-dasharray=""
      stroke-miterlimit="10"
    />
    <path
      d=" M 95 25 A 20 20 0 1 1 75 5"
      fill="none"
      paint-order="fill stroke markers"
      stroke="#000000"
      stroke-dasharray=""
      stroke-miterlimit="10"
    />
    <path
      d=" M 145 25 A 20 20 0 1 1 144.99999000000082 24.98000000333332"
      fill="none"
      paint-order="fill stroke markers"
      stroke="#000000"
      stroke-dasharray=""
      stroke-miterlimit="10"
    />
    <path
      d=" M 45 75 A 20 20 0 1 0 5 75"
      fill="none"
      paint-order="fill stroke markers"
      stroke="#000000"
      stroke-dasharray=""
      stroke-miterlimit="10"
    />
    <path
      d=" M 95 75 A 20 20 0 0 0 75 55"
      fill="none"
      paint-order="fill stroke markers"
      stroke="#000000"
      stroke-dasharray=""
      stroke-miterlimit="10"
    />
    <path
      d=" M 145 75 A 20 20 0 1 0 144.99999000000082 75.01999999666667"
      fill="none"
      paint-order="fill stroke markers"
      stroke="#000000"
      stroke-dasharray=""
      stroke-miterlimit="10"
    />
    <path
      d=" M 45 125 A 20 20 0 0 1 5 125"
      fill="#000000"
      paint-order="stroke fill markers"
      stroke="none"
    />
    <path
      d=" M 95 125 A 20 20 0 1 1 75 105"
      fill="#000000"
      paint-order="stroke fill markers"
      stroke="none"
    />
    <path
      d=" M 145 125 A 20 20 0 1 1 144.99999000000082 124.98000000333332"
      fill="#000000"
      paint-order="stroke fill markers"
      stroke="none"
    />
    <path
      d=" M 45 175 A 20 20 0 1 0 5 175"
      fill="#000000"
      paint-order="stroke fill markers"
      stroke="none"
    />
    <path
      d=" M 95 175 A 20 20 0 0 0 75 155"
      fill="#000000"
      paint-order="stroke fill markers"
      stroke="none"
    />
    <path
      d=" M 145 175 A 20 20 0 1 0 144.99999000000082 175.01999999666668"
      fill="#000000"
      paint-order="stroke fill markers"
      stroke="none"
    />
  </g>
</svg>
`);
});
