import { CanvasToSvg } from "../ctx";

test("globalalpha", () => {
  const canvas = new CanvasToSvg();

  canvas.fillStyle = "#FD0";
  canvas.fillRect(0, 0, 75, 75);
  canvas.fillStyle = "#6C0";
  canvas.fillRect(75, 0, 75, 75);
  canvas.fillStyle = "#09F";
  canvas.fillRect(0, 75, 75, 75);
  canvas.fillStyle = "#F30";
  canvas.fillRect(75, 75, 75, 75);
  canvas.fillStyle = "#FFF";

  // set transparency value
  canvas.globalAlpha = 0.2;

  // Draw semi transparent circles
  for (let i = 0; i < 7; i++) {
    canvas.beginPath();
    canvas.arc(75, 75, 10 + 10 * i, 0, Math.PI * 2, true);
    canvas.fill();
  }

  canvas.globalAlpha = 1.0;

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
      fill="#FD0"
      height="75"
      stroke="none"
      width="75"
      x="0"
      y="0"
    />
    <rect
      fill="#6C0"
      height="75"
      stroke="none"
      width="75"
      x="75"
      y="0"
    />
    <rect
      fill="#09F"
      height="75"
      stroke="none"
      width="75"
      x="0"
      y="75"
    />
    <rect
      fill="#F30"
      height="75"
      stroke="none"
      width="75"
      x="75"
      y="75"
    />
    <path
      d=" M 85 75 A 10 10 0 1 0 84.99999500000041 75.00999999833334"
      fill="#FFF"
      fill-opacity="0.2"
      paint-order="stroke fill markers"
      stroke="none"
    />
    <path
      d=" M 95 75 A 20 20 0 1 0 94.99999000000084 75.01999999666667"
      fill="#FFF"
      fill-opacity="0.2"
      paint-order="stroke fill markers"
      stroke="none"
    />
    <path
      d=" M 105 75 A 30 30 0 1 0 104.99998500000125 75.02999999500001"
      fill="#FFF"
      fill-opacity="0.2"
      paint-order="stroke fill markers"
      stroke="none"
    />
    <path
      d=" M 115 75 A 40 40 0 1 0 114.99998000000167 75.03999999333335"
      fill="#FFF"
      fill-opacity="0.2"
      paint-order="stroke fill markers"
      stroke="none"
    />
    <path
      d=" M 125 75 A 50 50 0 1 0 124.99997500000208 75.04999999166668"
      fill="#FFF"
      fill-opacity="0.2"
      paint-order="stroke fill markers"
      stroke="none"
    />
    <path
      d=" M 135 75 A 60 60 0 1 0 134.9999700000025 75.05999999000002"
      fill="#FFF"
      fill-opacity="0.2"
      paint-order="stroke fill markers"
      stroke="none"
    />
    <path
      d=" M 145 75 A 70 70 0 1 0 144.99996500000293 75.06999998833335"
      fill="#FFF"
      fill-opacity="0.2"
      paint-order="stroke fill markers"
      stroke="none"
    />
  </g>
</svg>
`);
});
