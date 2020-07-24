/**
 * Given an array of integers, return indices of the two numbers sch that they add up to a specific target
 * You may assume that each input would have exactly one solution, and you may not use the same element twice
 * 
 * Example:
 * Given nums = [2,7,11,15], target = 9,
 * 
 * Because nums[0] + nums[1] = 2 + 7 = 9
 * return [0,1]
 */

/**
 * 
 * @param {number[]} nums
 * @param {number} target 
 * 
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  const matchSet = {};
  let result;

  nums.forEach(num => {
    if (matchSet[target - num] && matchSet[target - num] == num) {
      result = [num, target - num];
      return;
    } else {
      matchSet[num] = target - num;
    }
  });

  return result;
}


/** TEST CASE */
const testCases = [
  {
    nums:   [1,2,3,5,4,3],
    target: 9
  },
  {
    nums:   [1,2,3,5,4,3,1],
    target: 2
  }
];

testCases.forEach(testCase => {
  console.info(twoSum(testCase.nums, testCase.target));
})
