import { describe, it, expect } from "vitest";
import { getTrappedRainwaterBrute } from "./trapping-rain";

const heights1 = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1];
const output1 = 6;

const heights2 = [4, 2, 0, 3, 2, 5];
const output2 = 9;

describe("Trapping Rainwater (Hard)", () => {
  describe("Brute force", () => {
    it("should compute trapping rainwater", () => {
      expect(getTrappedRainwaterBrute(heights1)).toBe(output1);
      expect(getTrappedRainwaterBrute(heights2)).toBe(output2);
    });
  });

  describe("Optimized", () => {
    it("should compute trapping rainwater", () => {});
  });
});
