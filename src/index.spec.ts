import * as jsc from "jsverify";
import linear from ".";

it("the slope between two points should be constant", function () {
  const constantSlope = jsc.forall(
    jsc.suchthat(jsc.record({ x1: jsc.integer, x2: jsc.integer }), ({ x1, x2 }) => x1 !== x2),
    ({ x1, x2 }): boolean => {
      const y1 = linear(x1);
      const y2 = linear(x2);
      const slope = (y2 - y1) / (x2 - x1);
      return slope === 0.5;
    }
  );
  jsc.assert(constantSlope);
});
