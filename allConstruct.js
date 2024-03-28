/*
Problem Statement:
Given a target string and a set of words, determine the ways the target string can be constructed by concatenating a combination of words from the set. You can use each word as many times as needed.

Example:

allConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]) => 
[
  [ 'ab', 'cd', 'ef' ],
  [ 'ab', 'c', 'def' ],
  [ 'abc', 'def' ],
  [ 'abcd', 'ef' ]
]
Explanation: "abcdef" can be constructed as "abc" + "def", 'ab'+'cd'+'ef,
'ab'+ 'c'+ 'def' and 'abcd'+ 'ef' ways 

*/

function allConstruct(target, wordBank, cache = new Map()) {
  if (cache.has(target)) return cache.get(target);
  if (target === "") return [[]];
  let result = [];
  for (let word of wordBank) {
    if (target.indexOf(word) === 0) {
      const suffix = target.slice(word.length);
      const suffixWays = allConstruct(suffix, wordBank, cache);
      const targetWays = suffixWays.map((oneOfTheWay) => [
        word,
        ...oneOfTheWay,
      ]);
      result.push(...targetWays);
    }
  }
  cache.set(target, result);
  return result;
}
console.log(allConstruct("purple", ["purp", "p", "ur", "le", "purpl"]));
console.log(
  allConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd", "ef", "c"])
);
console.log(
  allConstruct("skateboard", ["bo", "rd", "ate", "t", "ska", "sk", "boar"])
); //[]
console.log(
  allConstruct("enterapotentpot", ["a", "p", "ent", "enter", "ot", "o", "t"])
);
console.log(
  allConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
    "e",
    "ee",
    "eee",
    "eeee",
    "eeeee",
    "eeeeee",
    "eeeeeee",
  ])
); //[]
