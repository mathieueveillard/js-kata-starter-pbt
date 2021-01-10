import * as jsc from "jsverify";

function linear(x: number): number {
  return 0.5 * x + 1;
}

it("the slope between two points should be constant", function () {
  const constantSlope = jsc.forall(jsc.integer, jsc.integer, function (x1: number, x2: number): boolean {
    if (x1 === x2) {
      return true;
    }
    const y1 = linear(x1);
    const y2 = linear(x2);
    const slope = (y2 - y1) / (x2 - x1);
    return slope === 0.5;
  });
  jsc.assert(constantSlope);
});
