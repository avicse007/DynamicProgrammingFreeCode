function fibTabulation(n) {
  const arr = Array(7).fill(0);
  for (let i = 0; i < arr.length; i++) {
    if (i + 1 < n) arr[i + 1] += arr[i];
    if (i + 2 < n) arr[i + 2] += arr[i];
  }
  console.log(arr);
  return arr[6];
}
console.log(fibTabulation(6)); //8
