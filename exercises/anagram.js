// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// function anagrams(stringA, stringB) {
//     // use regex to eleminate spaces and symbols
//     // use toLowerCase to eliminate case sensitivity issues
//     // create character map of each string, if the two maps match exactly, they are anagrams
//     const charMapA = buildCharMap(stringA);
//     const charMapB = buildCharMap(stringB);

//     if ( Object.keys(charMapA).length !== Object.keys(charMapB).length) {
//         return false;
//         } 
//             for ( let char in charMapA ) {
//                 if (charMapA[char] !== charMapB[char]) {
//                     return false;
//                 }
//             }
//         return true;
//     }

// function buildCharMap(string) {
//     // create helper function to build character map to avoid redundant code
//     const charMap = {};

//     for ( let char of string.replace(/[^\w]/g, '').toLowerCase()) {
//         charMap[char] = charMap[char] + 1 || 1;
//     }
//     return charMap;
// }

function anagrams(stringA, stringB) {
  const firstString = cleanString(stringA);
  const secondString = cleanString(stringB);

  if (firstString !== secondString) {
      return false;
  }

  return true;
}

function cleanString(string) {
    return string.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
}
