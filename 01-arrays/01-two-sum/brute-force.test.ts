import { describe, it, expect } from "vitest";
import { twoSum as twoSumBrute } from "./brute-force";

const numsArray = [1, 3, 7, 9, 2];
const targetToFind = 11;
const result = [3, 4];

describe("Arrays: two sum (Google)", () => {
  it("Brute force: should find target", () => {
    expect(twoSumBrute(numsArray, targetToFind)).toStrictEqual(result);
  });

  it("Brute force: should return null with []", () => {
    expect(twoSumBrute([], targetToFind)).toBeNull();
  });
});
