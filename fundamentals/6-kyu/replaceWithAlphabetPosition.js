// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

// Example
// Input = "The sunset sets at twelve o' clock."
// Output = "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"

function alphabetPosition(text) {
  const alphabets = "abcdefghijklmnopqrstuvwxyz";
  text = text.replaceAll(/[^a-zA-Z]/g, "").toLowerCase();
  return text
    .split("")
    .map((char) => alphabets.indexOf(char) + 1)
    .join(" ");
}

console.log(alphabetPosition("The sunset sets at twelve o' clock."));
