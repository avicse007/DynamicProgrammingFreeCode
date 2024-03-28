/*
Problem Statement:
Given a target string and a set of words, determine if the target string can be constructed by concatenating a combination of words from the set. You can use each word as many times as needed.

Example:
canConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]) => true
Explanation: "abcdef" can be constructed as "abc" + "def"
canConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"]) => false
Explanation: It's not possible to construct "skateboard" using the given words.

*/

function canConstruct(target, words, cache = new Map()) {
  if (cache.get(target)) return cache.get(target);
  if (target === "") return true;
  for (let string of words) {
    if (target.indexOf(string) === 0) {
      const restTarget = target.slice(string.length);
      const result = cache.has(restTarget)
        ? cache.get(restTarget)
        : canConstruct(restTarget, words, cache);
      cache.set(restTarget, result);
      if (result == true) {
        return true;
      }
    }
  }
  return false;
}
console.log(canConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"])); //true
console.log(
  canConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])
); //false
console.log(
  canConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
    "e",
    "ee",
    "eee",
    "eeee",
    "eeeee",
    "eeeeee",
    "eeeeeee",
  ])
); //false
