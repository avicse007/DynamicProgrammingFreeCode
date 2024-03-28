function fib(n, cache = new Map()) {
  if (cache.get(n)) {
    return cache.get(n);
  }
  if (n <= 2) {
    return 1;
  }
  let res = fib(n - 1, cache) + fib(n - 2, cache);
  cache.set(n, res);
  console.log("current state of cache is ", cache);
  return cache.get(n);
}
const n = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 50, 220,
];
const res = [];
n.forEach((ele) => {
  const fibo = fib(ele);
  res.push(fibo);
});
console.log(res);
