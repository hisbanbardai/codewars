// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

function XO(str) {
  let countX = 0;
  let countO = 0;
  str.toLowerCase().split('').forEach(element => {
    if (element === 'x') countX += 1;
    if (element === "o") countO += 1;
  });

  return countX === countO;
}

//solution I liked
// function XO(str) {
//   str = str.toLowerCase();
//   return str.split("x").length === str.split("o").length;
// }