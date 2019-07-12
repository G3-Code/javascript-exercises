function getLongest(sentence) {
  const words = sentence.split(" ");
  const longestWord = words.reduce(function(a, b) {
    return a.length > b.length ? a : b;
  });
  return longestWord;
}

console.log(getLongest("hello world")); // hello
console.log(getLongest("hello world@@##")); // hello
