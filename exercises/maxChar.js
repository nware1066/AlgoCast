// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(string) {

  const result = {}

  for (let char of string) {
    if (!result[char]) {
      result[char] = 1;
    } else {
      result[char]++
    }
  }
  return result;
}



