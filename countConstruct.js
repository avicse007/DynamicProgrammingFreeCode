/*
Problem Statement:
Given a target string and a set of words, determine the number of ways the target string can be constructed by concatenating a combination of words from the set. You can use each word as many times as needed.

Example:

countConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]) => 1
Explanation: "abcdef" can be constructed as "abc" + "def", and there's only one way to do so.

countConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"]) => 0
Explanation: It's not possible to construct "skateboard" using the given words.

countConstruct("purple", ["purp", "p", "ur", "le", "purpl"]) => 2
Explanation: "purple" can be constructed as "purp" + "le" or "p" + "
*/

function countConstruct(target, words, cache = new Map()) {
  if (cache.get(target)) return cache.get(target);
  if (target === "") return 1;
  let totalCount = 0;
  for (let string of words) {
    if (target.indexOf(string) === 0) {
      const restTarget = target.slice(string.length);
      const result = cache.has(restTarget)
        ? cache.get(restTarget)
        : countConstruct(restTarget, words, cache);
      totalCount += result;
      cache.set(restTarget, totalCount);
    }
  }
  return totalCount;
}
console.log(countConstruct("purple", ["purp", "p", "ur", "le", "purpl"])); //2
console.log(countConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"])); //1
console.log(
  countConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])
); //0
console.log(
  countConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"])
); //0
console.log(
  countConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
    "e",
    "ee",
    "eee",
    "eeee",
    "eeeee",
    "eeeeee",
    "eeeeeee",
  ])
); //false
