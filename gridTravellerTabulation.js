const gridTravelerTabulation = (m, n) => {
  // This seems like we are doing correct thing . By making mXn grid.
  //How ever in the first fill we are calling new Array().fill(0)
  // this will actually copy the same array in all the rows.
  //So whats the side effect is that if you change on cell value
  // it will get changed multiple rows as all these row refer
  // to the same array.
  const gridWrong = new Array(m + 1).fill(new Array(n + 1).fill(0));
  const gridCorrect = new Array(m + 1)
    .fill()
    .map(() => new Array(n + 1).fill(0));
  const grid = gridCorrect;

  //base-case
  console.log(grid);
  grid[1][1] = 1;
  console.log(grid);
  for (let row = 0; row <= m; row++) {
    for (let col = 0; col <= n; col++) {
      if (row + 1 < grid.length) grid[row + 1][col] += grid[row][col];
      if (col + 1 < grid[0].length) grid[row][col + 1] += grid[row][col];
    }
    console.log("===============START Loop=====================");
    console.log(grid);
    console.log("===============END Loop=====================");
  }
  return grid[m][n];
};

console.log(gridTravelerTabulation(1, 1)); //1
console.log(gridTravelerTabulation(2, 3)); //3
console.log(gridTravelerTabulation(3, 2)); //3
console.log(gridTravelerTabulation(3, 3)); //6
console.log(gridTravelerTabulation(18, 18)); //2333606220
