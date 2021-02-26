// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(string) {

  const charMap = {};
  let max = 0;
  let maxChar = '';

  for (let char of string) {
    if (!charMap[char]) {
      charMap[char] = 1;
    } else {
      charMap[char]++
    }
  }

  // use for in loop when iterating over contents of an object

  for ( let char in charMap ) {
    if (charMap[char] > max ) {
      max = charMap[char];
      maxChar = char;
    }
  }
  console.log(maxChar);
  return maxChar;
}




