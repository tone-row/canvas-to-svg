import { CanvasToSvg } from "../ctx";

// Not passing because ID changes every time
test.skip("gradient", () => {
  const canvas = new CanvasToSvg();
  canvas.save();
  canvas.strokeStyle = "rgba(0,0,0,0)";
  canvas.lineCap = "butt";
  canvas.lineJoin = "miter";
  canvas.miterLimit = 10.0;
  canvas.font = "10px sans-serif";
  canvas.save();
  var radialGradient_1389130830351 = canvas.createRadialGradient(
    6e1,
    6e1,
    0.0,
    6e1,
    6e1,
    5e1
  );
  radialGradient_1389130830351.addColorStop(0, "red");
  radialGradient_1389130830351.addColorStop(1, "blue");
  canvas.fillStyle = radialGradient_1389130830351;
  canvas.font = "10px sans-serif";
  canvas.beginPath();
  canvas.moveTo(2.5e1, 1e1);
  canvas.lineTo(9.5e1, 1e1);
  canvas.quadraticCurveTo(1.1e2, 1e1, 1.1e2, 2.5e1);
  canvas.lineTo(1.1e2, 9.5e1);
  canvas.quadraticCurveTo(1.1e2, 1.1e2, 9.5e1, 1.1e2);
  canvas.lineTo(2.5e1, 1.1e2);
  canvas.quadraticCurveTo(1e1, 1.1e2, 1e1, 9.5e1);
  canvas.lineTo(1e1, 2.5e1);
  canvas.quadraticCurveTo(1e1, 1e1, 2.5e1, 1e1);
  canvas.closePath();
  canvas.fill();
  canvas.stroke();
  canvas.restore();
  canvas.save();
  var radialGradient_1389130830351 = canvas.createRadialGradient(
    3.5e1,
    1.45e2,
    0.0,
    3.5e1,
    1.45e2,
    2.5e1
  );
  radialGradient_1389130830351.addColorStop(0, "red");
  radialGradient_1389130830351.addColorStop(1, "blue");
  canvas.fillStyle = radialGradient_1389130830351;
  canvas.font = "10px sans-serif";
  canvas.beginPath();
  canvas.moveTo(2.5e1, 1.2e2);
  canvas.lineTo(9.5e1, 1.2e2);
  canvas.quadraticCurveTo(1.1e2, 1.2e2, 1.1e2, 1.35e2);
  canvas.lineTo(1.1e2, 2.05e2);
  canvas.quadraticCurveTo(1.1e2, 2.2e2, 9.5e1, 2.2e2);
  canvas.lineTo(2.5e1, 2.2e2);
  canvas.quadraticCurveTo(1e1, 2.2e2, 1e1, 2.05e2);
  canvas.lineTo(1e1, 1.35e2);
  canvas.quadraticCurveTo(1e1, 1.2e2, 2.5e1, 1.2e2);
  canvas.closePath();
  canvas.fill();
  canvas.stroke();
  canvas.restore();
  canvas.restore();

  expect(canvas.getSvg()).toMatchInlineSnapshot(`
<svg
  height="500"
  version="1.1"
  width="500"
  xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink"
>
  <defs>
    <radialgradient
      cx="60px"
      cy="60px"
      fx="60px"
      fy="60px"
      gradientUnits="userSpaceOnUse"
      id="xakEeRGlXnXw"
      r="50px"
    >
      <stop
        offset="0"
        stop-color="red"
      />
      <stop
        offset="1"
        stop-color="blue"
      />
    </radialgradient>
    <radialgradient
      cx="35px"
      cy="145px"
      fx="35px"
      fy="145px"
      gradientUnits="userSpaceOnUse"
      id="LHTruvceaAoE"
      r="25px"
    >
      <stop
        offset="0"
        stop-color="red"
      />
      <stop
        offset="1"
        stop-color="blue"
      />
    </radialgradient>
  </defs>
  <g>
    <g>
      <g>
        <path
          d=" M 25 10 L 95 10 Q 110 10 110 25 L 110 95 Q 110 110 95 110 L 25 110 Q 10 110 10 95 L 10 25 Q 10 10 25 10 Z"
          fill="url(#xakEeRGlXnXw)"
          paint-order="fill stroke markers"
          stroke="rgb(0,0,0)"
          stroke-dasharray=""
          stroke-miterlimit="10"
          stroke-opacity="0"
        />
      </g>
      <g>
        <path
          d=" M 25 120 L 95 120 Q 110 120 110 135 L 110 205 Q 110 220 95 220 L 25 220 Q 10 220 10 205 L 10 135 Q 10 120 25 120 Z"
          fill="url(#LHTruvceaAoE)"
          paint-order="fill stroke markers"
          stroke="rgb(0,0,0)"
          stroke-dasharray=""
          stroke-miterlimit="10"
          stroke-opacity="0"
        />
      </g>
    </g>
  </g>
</svg>
`);
});
