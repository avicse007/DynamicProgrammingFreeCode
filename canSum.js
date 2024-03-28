/*
Problem Statement:
===================
Given a target sum and an array of positive integers, determine whether it is
possible to generate the target sum by summing elements from the array.
Elements of the array can be used as many times as needed.

canSum(7, [2, 3]) => true
Explanation: 2 + 2 + 3 = 7

canSum(7, [5, 3, 4, 7]) => true
Explanation: 3 + 4 = 7

canSum(7, [2, 4]) => false
Explanation: It's not possible to generate the target sum using
elements from the array.


*/

function canSum(targetSum, array, cache = new Map()) {
  //console.log(cache);
  if (cache.get(targetSum)) {
    return true;
  }
  if (targetSum === 0) return true;
  if (targetSum < 0) return false;
  for (const element of array) {
    let remainderSum = targetSum - element;
    cache.set(remainderSum, canSum(remainderSum, array, cache));
    if (cache.get(remainderSum)) {
      return true;
    }
  }
  return false;
}

console.log(canSum(7, [2, 3]));
console.log(canSum(7, [5, 3, 4, 7]));
console.log(canSum(7, [2, 4]));
console.log(canSum(8, [2, 3, 5, 7]));
console.log(canSum(100, [7, 14]));
