/*
Problem Statement:
Given a target sum and an array of positive integers, find any combination of 
elements from the array that adds up to the target sum. If there is no such 
combination, return null.

Example:
plaintext
Copy code
howSum(7, [2, 3]) => [3, 2, 2]
Explanation: 3 + 2 + 2 = 7

howSum(7, [5, 3, 4, 7]) => [4, 3]
Explanation: 4 + 3 = 7

howSum(7, [2, 4]) => null
Explanation: There is no combination that adds up to 7

howSum(8, [2, 3, 5]) => [2, 2, 2, 2]
Explanation: 2 + 2 + 2 + 2 = 8
*/

function howSum(targetSum, array, caches = new Map()) {
  if (caches.has(targetSum)) {
    return caches.get(targetSum);
  }
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;
  for (const element of array) {
    let remainderSum = targetSum - element;
    const result = howSum(remainderSum, array, caches);
    result && result.push(element);
    caches.set(remainderSum, result);
    if (result) {
      return caches.get(remainderSum);
    }
  }
  return null;
}

console.log(howSum(7, [2, 3]));
console.log(howSum(7, [5, 3, 4, 7]));
console.log(howSum(7, [2, 4]));
console.log(howSum(8, [2, 3, 5, 7]));
console.log(howSum(300, [7, 14]));
console.log(howSum(300, [7, 14, 3])); // null
