"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// 1. Two Sum
// url: https://leetcode.com/problems/two-sum/
var chalk_1 = __importDefault(require("chalk"));
console.group(chalk_1.default.magenta('#1'));
function twoSum(nums, target) {
    var map = new Map();
    for (var i = 0; i < nums.length; i++) {
        if (map.get(target - nums[i]) !== undefined) {
            return [map.get(target - nums[i]), i];
        }
        else {
            map.set(nums[i], i);
        }
    }
    return [];
}
console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));
console.groupEnd();
