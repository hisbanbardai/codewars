// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

//bitcoin take over the world maybe who knows perhaps

function findShort(s) {
  return s.split(' ').reduce((acc, ele) => {
    if (ele.length < acc.length) {
      acc = ele;
    }
    return acc;
  }).length;
}

//solution I liked
// function findShort(s) {
//   return Math.min(...s.split(" ").map((s) => s.length));
// }