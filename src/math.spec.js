import { describe, expect, it } from "vitest";
import { add } from "./math";

it("test add", () => {
  //ARRANGEt
  const numbers = [1, 2, 3];
  const expected = 6;

  //ACT
  const actual = add(numbers);

  //ASSERT
  expect(actual).toBe(expected);
});
