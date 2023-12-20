//1 DO the below programs in anonymous function & IIFE

// a.Print odd numbers in an array
// Anonymous function
let printOddNumbers = function (arr) {
    arr.forEach(num => {
        if (num % 2 !== 0) {
            console.log(num);
        }
    });
};

// IIFE
(function (arr) {
    arr.forEach(num => {
        if (num % 2 !== 0) {
            console.log(num);
        }
    });
})([1, 2, 3, 4, 5]);
//b .Convert all the strings to title caps in a string array
// Anonymous function
let titleCaps = function (arr) {
    return arr.map(str => str.charAt(0).toUpperCase() + str.slice(1));
};

// IIFE
let titleCapsResult = (function (arr) {
    return arr.map(str => str.charAt(0).toUpperCase() + str.slice(1));
})(["apple", "banana", "cherry"]);
console.log(titleCapsResult);

//c .Sum of all numbers in an array
// Anonymous function
let sumArray = function (arr) {
    return arr.reduce((acc, num) => acc + num, 0);
};

// IIFE
let sumResult = (function (arr) {
    return arr.reduce((acc, num) => acc + num, 0);
})([1, 2, 3, 4, 5]);
console.log(sumResult);

// d .Return all the prime numbers in an array
// Anonymous function
let getPrimes = function (arr) {
    return arr.filter(num => {
        for (let i = 2; i < num; i++)
            if (num % i === 0) return false;
        return num > 1;
    });
};

// IIFE
let primesResult = (function (arr) {
    return arr.filter(num => {
        for (let i = 2; i < num; i++)
            if (num % i === 0) return false;
        return num > 1;
    });
})([2, 3, 4, 5, 6, 7, 8, 9, 10]);
console.log(primesResult);

// e.Return all the palindromes in an array
// Anonymous function
let getPalindromes = function (arr) {
    return arr.filter(str => str === str.split('').reverse().join(''));
};

// IIFE
let palindromesResult = (function (arr) {
    return arr.filter(str => str === str.split('').reverse().join(''));
})(["level", "hello", "radar"]);
console.log(palindromesResult);

//f .Return median of two sorted arrays of the same size.
// Anonymous function
let getMedian = function (arr1, arr2) {
    let merged = arr1.concat(arr2);
    merged.sort((a, b) => a - b);
    let mid = Math.floor(merged.length / 2);
    return merged.length % 2 === 0
        ? (merged[mid - 1] + merged[mid]) / 2
        : merged[mid];
};

// IIFE
let medianResult = (function (arr1, arr2) {
    let merged = arr1.concat(arr2);
    merged.sort((a, b) => a - b);
    let mid = Math.floor(merged.length / 2);
    return merged.length % 2 === 0
        ? (merged[mid - 1] + merged[mid]) / 2
        : merged[mid];
})([1, 2, 3], [4, 5, 6]);
console.log(medianResult);

//g. Remove duplicates from an array
// Anonymous function
let removeDuplicates = function (arr) {
    return Array.from(new Set(arr));
};

// IIFE
let uniqueArray = (function (arr) {
    return Array.from(new Set(arr));
})([1, 2, 2, 3, 4, 4, 5]);
console.log(uniqueArray);

// h .Rotate an array by k times
// Anonymous function
let rotateArray = function (arr, k) {
    k = k % arr.length;
    return arr.slice(k).concat(arr.slice(0, k));
};

// IIFE
let rotatedResult = (function (arr, k) {
    k = k % arr.length;
    return arr.slice(k).concat(arr.slice(0, k));
})([1, 2, 3, 4, 5], 2);
console.log(rotatedResult);
// 2 .DO the below programs in arrow function

// a .Print odd numbers in an array

const printOddNumbers = arr => arr.filter(num => num % 2 !== 0).forEach(num => console.log(num));

// b .Convert all the strings to title caps in a string array

const titleCaseStrings = arr => arr.map(str => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase());

//c .Sum of all numbers in an array

const sumArray = arr => arr.reduce((acc, num) => acc + num, 0);

// d .Return all the prime numbers in an array
const isPrime = num => {
    for (let i = 2; i < num; i++)
        if (num % i === 0) return false;
    return num > 1;
};

const primeNumbers = arr => arr.filter(num => isPrime(num));

// e .Return all the palindromes in an array
const isPalindrome = str => str === str.split('').reverse().join('');

const palindromeArray = arr => arr.filter(word => isPalindrome(word));


