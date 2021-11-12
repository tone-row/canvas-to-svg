import { CanvasToSvg } from "./ctx";

test("can use import", () => {
  let c = new CanvasToSvg();
  expect(c).not.toBe(undefined);
});

test("should have styles applied directly", () => {
  let c = new CanvasToSvg();
  expect(c.miterLimit).toBe(10);
});
