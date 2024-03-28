/*
Problem Statement:
Imagine you are a traveler in a 2D grid. You start at the top-left corner 
and can only move to the right or down. The goal is to travel from the 
top-left corner to the bottom-right corner of the grid. In how many 
ways can you reach the destination?

gridTraveler(2, 3) => 3
Explanation: There are three ways to reach the bottom-right corner.
1. Right -> Right -> Down
2. Right -> Down -> Right
3. Down -> Right -> Right

gridTraveler(3, 3) => 6
Explanation: There are six ways to reach the bottom-right corner.
1. Right -> Right -> Down -> Down
2. Right -> Down -> Right -> Down
3. Right -> Down -> Down -> Right
4. Down -> Right -> Right -> Down
5. Down -> Right -> Down -> Right
6. Down -> Down -> Right -> Right
*/
const { performance } = require("perf_hooks");
function gridTraveler(row, col, cache = new Map()) {
  //console.log(`row is ${row} and col is ${col}`);
  const key = row + "," + col;
  const keyR = col + "," + row;
  if (row === 0 || col === 0) return 0;
  if (row === 1 && col === 1) return 1;
  if (cache.get(key)) {
    return cache.get(key);
  }
  const result =
    gridTraveler(row - 1, col, cache) + gridTraveler(row, col - 1, cache);
  cache.set(key, result);
  cache.set(keyR, result);
  return cache.get(key);
}
console.log(gridTraveler(1, 2));
console.log(gridTraveler(2, 1));
console.log(gridTraveler(3, 2));
console.log(gridTraveler(3, 3));
const start = performance.now();
console.log(gridTraveler(18, 18));
const end = performance.now();
console.log(`Execution time ${end - start} milliseconds`);
