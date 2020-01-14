function getLongest(sen) {
  sen = sen.replace(/[&\/\\#\[\],+()$~%.'"@:*?!<>{}]/g, "");
  const words = sen.split(" ");
  const longestWord = words.reduce(function(a, b) {
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
console.log(getLongest("a confusing /:sentence:/[ this is not!!!!!!!~")); // hello
