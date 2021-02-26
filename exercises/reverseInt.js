// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {}

  const reversed = n
    .toString()
    .split('')
    .reverse()
    .join('');

// the issue of negative numbers can be solved with a conditional statement ( below ) or using Math.sign
    // if(n < 0) {
    //   return parseInt(reversed) * -1;
    // } else {
    //   return parseInt(reversed)
    // }

    return parseInt(reversed) * Math.sign(n);

module.exports = reverseInt;

// important to know ( or look for integer functions in MDN) toString, Math.sign, parseInt
// There is usually a tool in MDN for most common methods of manipulating data
//
