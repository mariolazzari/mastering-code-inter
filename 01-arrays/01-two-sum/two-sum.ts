export type Result = [number, number] | null;
type TwoSum = (nums: number[], target: number) => Result;

// bwith brute forcing
export const twoSumBrute: TwoSum = (nums, target) => {
  for (let p1 = 0; p1 < nums.length; p1++) {
    const numToFind = target - nums[p1];
    for (let p2 = p1 + 1; p2 < nums.length; p2++) {
      if (numToFind === nums[p2]) {
        return [p1, p2];
      }
    }
  }

  return null;
};

export const twoSum: TwoSum = (nums, target) => {
  const map = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const current = nums[i];
    if (map.has(current)) {
      return [map.get(current)!, i];
    }
    map.set(target - current, i);
  }

  return null;
};
