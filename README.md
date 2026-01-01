# Master the Coding Interview: Big Tech (FAANG) Interviews

## Arrays

### Question #1 Google Interview Question Two Sum (Easy)

Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.

#### Brute force verions

```ts
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
```
