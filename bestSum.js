/*
Problem Statement:
Given a target sum and an array of positive integers, 
find the shortest array of numbers that add up to the target sum.
If there are multiple combinations with the same length, return any.
Example:
bestSum(7, [5, 3, 4, 7]) => [7]
Explanation: [7] is the shortest array that sums up to 7.

bestSum(8, [2, 3, 5]) => [3, 5]
Explanation: [3, 5] is one of the shortest arrays that sums up to 8.

*/

function bestSum(targetSum, array, caches = new Map()) {
  if (caches.has(targetSum)) return caches.get(targetSum);
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;
  let shortestSumCombination = null;
  for (let ele of array) {
    const remainderSum = targetSum - ele;
    const currentSumCombination = bestSum(remainderSum, array, caches);
    if (currentSumCombination !== null) {
      const newCurrentSumCombination = [...currentSumCombination, ele];
      if (
        shortestSumCombination === null ||
        shortestSumCombination.length > newCurrentSumCombination.length
      ) {
        shortestSumCombination = newCurrentSumCombination;
      }
    }
  }
  caches.set(targetSum, shortestSumCombination);
  return shortestSumCombination;
}

console.log(bestSum(7, [5, 3, 4, 7])); // [7]
console.log(bestSum(8, [2, 3, 5])); //[3,5]
console.log(bestSum(8, [1, 4, 5])); // [4,4]
console.log(bestSum(100, [1, 2, 4, 25])); // [25,25,25,25]
