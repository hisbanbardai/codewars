// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

// function isPangram(string) {
//   if (string.length < 26) return false;

//   string = string.toLowerCase().replace(/[^a-z]/g, "");
//   const alphabets = "abcdefghijklmnopqrstuvwxyz";

//   for (const alphabet of alphabets) {
//     if (string.indexOf(alphabet) === -1) {
//       return false;
//     }
//   }

//   return true;
// }

function isPangram(string) {
  if (string.length < 26) return false;

  const alphabets = "abcdefghijklmnopqrstuvwxyz";

  return alphabets
    .split("")
    .every((alphabet) => string.indexOf(alphabet) !== -1);
}

console.log(isPangram("The quick brown fox jumps over the lazy dog"));
