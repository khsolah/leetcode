// 1. Two Sum
// url: https://leetcode.com/problems/two-sum/
import chalk from 'chalk'

console.group(chalk.magenta('#1'))

function twoSum(nums: number[], target: number): number[] {
  let map: Map<number, number> = new Map()

  for (let i = 0; i < nums.length; i++) {
    if (map.get(target - nums[i]) !== undefined) {
      return [map.get(target - nums[i]) as number, i]
    } else {
      map.set(nums[i], i)
    }
  }

  return []
}

console.log(twoSum([2, 7, 11, 15], 9))
console.log(twoSum([3, 2, 4], 6))
console.log(twoSum([3, 3], 6))

console.groupEnd()
