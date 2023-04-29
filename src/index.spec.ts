import fc from "fast-check";
import linear from ".";

test("The slope between two points should be constant", function () {
  fc.assert(
    fc.property(fc.record({ x1: fc.nat(), x2: fc.nat() }), ({ x1, x2 }): boolean => {
      fc.pre(x1 !== x2);
      const y1 = linear(x1);
      const y2 = linear(x2);
      const slope = (y2 - y1) / (x2 - x1);
      console.log({ x1, x2, y1, y2, slope });
      return slope === 0.5;
    })
  );
});
