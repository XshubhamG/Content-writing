// count the digit
function countDigit(n) {
    return n.toString().length;
}
console.log("Count Digit:", countDigit(1233456));

// reverse a number
function reverseNumber(n) {

    // solution 1
    let reverse =  +n.toString().split('').reverse().join('');

    // solution 2
    let N = n;
    reverse = 0;

    while(N != 0){
        let digit = N%10;
        reverse = reverse*10 + digit;
        N = Math.floor(N/10);
    }

    return reverse;
}
console.log("Reverse Number:", reverseNumber(1234));

// palidrone number
function isPalindrome(n) {
    let reverse = +n.toString().split('').reverse().join('');
    return n === reverse;
}
console.log("Palindrome:", isPalindrome(8008));

// HCF of two number
function hcf(m, n) {
    let ans = 0;
    for(let i = 1; i <= Math.min(m, n); i++) {
        if(m % i === 0 && n % i === 0) {
            ans = i;
        }
    }
    return ans;
}
console.log("HCF:",hcf(3, 6));

// armstrong number
function armstrongNumber(n) {
    let sum = 0;
    let arr = String(n).split('');
    let power = arr.length;
    arr.forEach(num => {
        sum += +Math.pow(num, power);
    })
    if(sum === n) return true;
    return false;
}
console.log("Armstrong Number:", armstrongNumber(370));

// all divisiors
function divisior(n) {
    let arr = [];
    for(let i = 1; i <= n; i++) {
        if(n % i === 0) {
            arr.push(i);
        }
    }
    return arr;
}
console.log("Divisior Arr:", divisior(36));

// prime number
function primeNumber(n) {
    for(let i = 2; i <= Math.floor(Math.sqrt(n)); i++) {
        if(n !== 1 && n % i === 0) {
            return false;
        }
    }
    return true;
}
console.log("Prime Number:", primeNumber(12));



