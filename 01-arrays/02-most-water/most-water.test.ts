import { describe, it, expect } from "vitest";
import { mostWater, mostWaterBrute } from "./most-water";

const heights = [1, 8, 6, 2, 5, 4, 8, 3, 7];
const area = 49;

describe("Arrays: most water (Google)", () => {
  describe("Brute forcing", () => {
    it("should calculate most water with brute forcing", () => {
      expect(mostWaterBrute(heights)).toBe(area);
    });

    it("should return 0 with []", () => {
      expect(mostWaterBrute([])).toBe(0);
    });
  });

  describe("Optimized", () => {
    it("should calculate most water optimized", () => {
      expect(mostWater(heights)).toBe(area);
    });

    it("should return 0 with []", () => {
      expect(mostWater([])).toBe(0);
    });
  });
});
