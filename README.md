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

### Container With Most Water

You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).
Find two lines that together with the x-axis form a container, such that the container contains the most water.
Return the maximum amount of water a container can store.

#### Brute force

```ts
type MostWater = (numbers: number[]) => number;

// brute force solution
export const mostWaterBrute: MostWater = heights => {
  let maxArea = 0;

  for (let p1 = 0; p1 < heights.length; p1++) {
    for (let p2 = p1 + 1; p2 < heights.length; p2++) {
      const height = Math.min(heights[p1], heights[p2]);
      const width = p2 - p1;
      const area = height * width;
      maxArea = Math.max(maxArea, area);
    }
  }

  return maxArea;
};
```

- Time: O(<sup>n</sup>)
- Space: O(1)

#### Optimized

```ts
const mostWater: MostWater = heights => {
  let p1 = 0,
    p2 = heights.length - 1,
    maxArea = 0;

  while (p1 < p2) {
    const height = Math.min(heights[p1], heights[p2]);
    const width = p2 - p1;
    const area = height * width;

    maxArea = Math.max(maxArea, area);
    if (heights[p1] <= heights[p2]) {
      p1++;
    } else {
      p2--;
    }
  }

  return maxArea;
};
```

### Trapping Rainwater (Hard)

Given n non-negative integers representing an elevation map where the width of each bar is 1, compute how much water it can trap after raining.

#### Brute forcing

```ts
const getTrappedRainwaterBrute = (heights: number[]): number => {
  let totalWater = 0;

  for (let p = 0; p < heights.length; p++) {
    let leftP = p,
      rightP = p,
      maxLeft = 0,
      maxRight = 0;

    while (leftP >= 0) {
      maxLeft = Math.max(maxLeft, heights[leftP]);
      leftP--;
    }

    while (rightP < heights.length) {
      maxRight = Math.max(maxRight, heights[rightP]);
      rightP++;
    }

    const currentWater = Math.min(maxLeft, maxRight) - heights[p];

    if (currentWater > 0) {
      totalWater += currentWater;
    }
  }

  return totalWater;
};
```

- Time: O(n²)
- Space: O(1)

#### Optimized

1. Identify the pointer with the lesser value
2. Is this pointer value greater than or equal to max on that side
   yes -> update max on that side
   no -> get water for pointer, add to total
3. move pointer inwards
4. repeat for other pointer

```ts
const getTrappedRainwater = (heights: number[]): number => {
  let left = 0,
    right = heights.length - 1,
    totalWater = 0,
    maxLeft = 0,
    maxRight = 0;

  while (left < right) {
    if (heights[left] <= heights[right]) {
      if (heights[left] >= maxLeft) {
        maxLeft = heights[left];
      } else {
        totalWater += maxLeft - heights[left];
      }
      left++;
    } else {
      if (heights[right] >= maxRight) {
        maxRight = heights[right];
      } else {
        totalWater += maxRight - heights[right];
      }

      right--;
    }
  }

  return totalWater;
};
```

- Time: O(n)
- Space: O(1)

## Strings

###
