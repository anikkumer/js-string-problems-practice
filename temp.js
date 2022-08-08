// let first = 5;
// let second = 7;
// console.log(first, second);

// this is wrong approach
// first = second;
// second = first;

// Approach: 1
// const temp = first;
// first = second;
// second = temp;
// console.log(first, temp);

// Approach: 2---- Destructuring

let first = 5;
let second = 7;

console.log(first, second);
[ first, second ] = [ second, first ];

console.log(first, second);