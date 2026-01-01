type Result = [number, number] | null;

export function twoSum(nums: number[], target: number): Result {
  for (let p1 = 0; p1 < nums.length; p1++) {
    const numToFind = target - nums[p1];
    for (let p2 = p1 + 1; p2 < nums.length; p2++) {
      if (numToFind === nums[p2]) {
        return [p1, p2];
      }
    }
  }

  return null;
}
