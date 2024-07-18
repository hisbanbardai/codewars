// Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

// For example, a tower with 3 floors looks like this:

// [
//   "  *  ",
//   " *** ",
//   "*****"
// ]
// And a tower with 6 floors looks like this:

// [
//   "     *     ",
//   "    ***    ",
//   "   *****   ",
//   "  *******  ",
//   " ********* ",
//   "***********"
// ]

function towerBuilder(nFloors) {
  // build here
  let count = 1;
  return Array.from({ length: nFloors }, (item, index) => {
    let result = "";
    for (let i = 1; i <= index + count; i++) {
      result += "*";
    }
    count += 1;

    return result;
  }).map((str, i, arr) => {
    const finalLength = arr[arr.length - 1].length;

    const l = (finalLength - str.length) / 2 + str.length;
    str = str.padStart(l, " ");
    str = str.padEnd(finalLength, " ");

    return str;
  });
}

console.log(towerBuilder(5));
