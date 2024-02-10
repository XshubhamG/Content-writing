'use strict'

// Simple array method

let arr = ['a', 'b', 'c', 'd', 'e'];

arr.length;

// slice(start, end) - doesn't change the OG array
arr.slice(2, 4);    // ['c', 'd']

// splice(start, deleteCount) - does change the OG array
arr.splice(2, 4);   // ['c', 'd']
arr;                // ['a', 'b', 'e']

// reverse() - does change the OG array
let arr2 = ['f', 'g', 'h', 'i', 'j'];
arr2.reverse();     // ['j', 'i', 'h', 'g', 'f']
arr2;               // ['j', 'i', 'h', 'g', 'f']

// concat() - creates a new array
const letters = arr.concat(arr2);
letters;           // ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']

// join() - creates a string with all the elements 
arr.join("-");     // a-b-c-d-e

// to get the last element we can use at() method
const nums = [1, 3, 5, 7, 9, 11, 13, 15, 17];
nums.at(-1);      // 17              

// for-each method to loop over arrays
nums.forEach(num => {
    console.log(num);
})               // 1, 3, 5, 7, 9, 11, 13, 15, 17

// Map - create a new Array
const numbers = [1, 2, 3, 4, 5, 6];
const doubleNumbers = numbers.map(num => num * 2);
console.log(doubleNumbers);  // [2, 4, 6, 8, 10, 12]









