# Master the Coding Interview: Big Tech (FAANG) Interviews

## Arrays

### Question #1 Google Interview Question Two Sum (Easy)

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.

#### Brute force verions

```ts
type Result = [number, number] | null;
type TwoSum = (nums: number[], target: number) => Result;

const twoSumBrute: TwoSum = (nums, target) => {
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
```

- Time: O(n<sup>2</sup>)
- Space: O(1)

#### Optimizing solution

```ts
const twoSum: TwoSum = (nums, target) => {
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
```

- Time: O(n)
- Space: O(n)
