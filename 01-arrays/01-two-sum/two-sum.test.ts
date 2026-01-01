import { describe, it, expect } from "vitest";
import { Result, twoSum, twoSumBrute } from "./two-sum";

const numsArray = [1, 3, 7, 9, 2];
const targetToFind = 11;
const result: Result = [3, 4];

describe("Arrays: two sum (Google)", () => {
  describe("Brute forcing", () => {
    it("should find target", () => {
      expect(twoSumBrute(numsArray, targetToFind)).toStrictEqual(result);
    });

    it("should return null with []", () => {
      expect(twoSumBrute([], targetToFind)).toBeNull();
    });
  });

  describe("Optimized", () => {
    it("HashMap: should find target", () => {
      expect(twoSum(numsArray, targetToFind)).toStrictEqual(result);
    });

    it("HashMap: should return null with []", () => {
      expect(twoSum([], targetToFind)).toBeNull();
    });
  });
});
