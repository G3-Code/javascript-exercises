function getLongest(sentence) {
  const words = sentence.split(" ");
  const wordLengths = words.map(word => {
    return { word: word, length: word.length };
  });
  wordLengths.sort(compare);
  return wordLengths[0].word;
}

function compare(a, b) {
  const length1 = a.length;
  const length2 = b.length;

  let comparison = 0;
  if (length1 > length2) {
    comparison = -1;
  } else {
    comparison = 1;
  }
  return comparison;
}
console.log(getLongest("This is a test sentence"));
