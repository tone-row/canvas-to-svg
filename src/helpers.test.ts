import { format, randomString } from "./helpers";

describe("format", () => {
  it("should format a number", () => {
    expect(
      format("rgb({r},{g},{b})", { r: "hello", g: "hello", b: "hello" })
    ).toBe("rgb(hello,hello,hello)");
  });
});

describe("randomString", () => {
  it("should generate a random string", () => {
    let o = {};
    expect(typeof randomString(o)).toBe("string");
  });
});
