// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

function fib(n) {
    // create a new variable with the value of an array containing elements 0 and 1
    // if the length of the array is less than n + 1 ( because the first 2 numbers will have to be added together prior to the sequence starting) keep going ( this could be recursive, maybe)
    // each iteration will take the last 2 elements and add them, pushing the solution into the new array
    // return the solution at the index equal to the provided argument ( or the last index of the array (array.length - 1))
    const sequence = [0, 1];

    for (i = 2; i <= n; i++) {
        const a = sequence[i - 1];
        const b = sequence[i - 2];

        sequence.push(a + b);
    }

    return sequence[sequence.length -1];
}