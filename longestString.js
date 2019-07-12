function getLongest(sen) {
  const words = sen.split(" ");
  const refinedWords = words.map(word => {
    return word.replace(/[&\/\\#,+()$~%.'"@:*?<>{}]/g, "");
  });
  console.log(refinedWords);
  const longestWord = refinedWords.reduce(function(a, b) {
    if (a.length > b.length) {
      return a;
    } else if (a.length === b.length) {
      return a;
    } else {
      return b;
    }
    //return a.length > b.length ? a : b;
  });
  return longestWord;
}

console.log(getLongest("hello world")); // hello
console.log(getLongest("hello world@@##")); // hello
