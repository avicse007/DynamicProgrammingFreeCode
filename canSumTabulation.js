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

function canSum(targetSum, array) {
  let table = new Array(targetSum + 1).fill(false);
  //base case or seed.
  table[0] = true;
  for (let i = 0; i < table.length; i++) {
    // for (let j = 0; j < array.length; j++) {
    //   if (
    //     i === array[j] ||
    //     (i - array[j] >= 0 &&
    //       i - array[j] < table.length &&
    //       table[i - array[j]] === true)
    //   ) {
    //     table[i] = true;
    //   }
    // }

    //below is a better way
    if (table[i] === true) {
      for (const k of array) {
        if (i + k < table.length) table[i + k] = true;
      }
    }
  }
  //   console.log("=================================");
  //   console.log(table);
  //   console.log("=================================");
  return table[table.length - 1];
}

console.log(canSum(7, [2, 3]));
console.log(canSum(7, [5, 3, 4]));
console.log(canSum(7, [5, 3, 4, 7]));
console.log(canSum(7, [2, 4]));
console.log(canSum(8, [2, 3, 5, 7]));
console.log(canSum(100, [7, 14]));
