// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// function fib(n) {
//     // create a new variable with the value of an array containing elements 0 and 1
//     // if the length of the array is less than n + 1 ( because the first 2 numbers will have to be added together prior to the sequence starting) keep going ( this could be recursive, maybe)
//     // each iteration will take the last 2 elements and add them, pushing the solution into the new array
//     // return the solution at the index equal to the provided argument ( or the last index of the array (array.length - 1))
//     const sequence = [0, 1];

//     for (i = 2; i <= n; i++) {
//         const a = sequence[i - 1];
//         const b = sequence[i - 2];

//         sequence.push(a + b);
//     }

//     return sequence[sequence.length -1];
// }


// pseudo-code
// this is a challenge that pretty much relies on memorization. It's kind of ridiculous to wrap your head around.
// the code is finding out how many times you have to add the number - 1 and the number - 2 together before you hit the provided number and then returning the number of iterations. YIKES the runtime for this is dreadful O(2 ofnsquared) Quadratic runtime.

function fib(n) {
    if (n < 2) {
        return n;
    } 
    return fib(n - 1) + fib(n - 2)
}


    // the runtime issue could be resolved with 'memoization' which means that the function stores the results of each argument and if the function is called again with the same arguments, it uses the stored result instead of invoking the function again
    // here is the recursive result with memoization
    // create a function that takes in the original function as an argument
    // within the new function, create a variable with the value of an empty object
    // return the argument function and use the spread operator to accept whatever arguments get passed as an array of arguments ( this is housekeeping, since there is no way of knowing how many arguments might be passed when the argument function is invoked)
    //  if the object variable already has those the arguments being passed, just return the object, but if it does not, create a new variable using the apply prototype on the function ( function.apply(this, args) ) and assign those arguments to the object variable. That sounds confusing, but the code below should clear things up.

function memoize(fn) {
    const cache = {};
    return function(...args) {
        if (cache[args]) {
            return cache[args];
        }

        const result = fn.apply(this, args);
        cache[args] = result;

        return result;
    };
}



function slowFib(n) {
    if (n < 2) {
        return n;
    } 
    return fib(n - 1) + fib(n - 2)
};


const fib = memoize(slowFib);
