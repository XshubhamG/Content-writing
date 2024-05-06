# Destructuring

## Destructuring in Arrays

```ts
const arr = [2, 4, 6]

const [x, y, z] = arr
console.log(x, y, z) // 2, 4, 6

// middle one is skipped
const [a, , b] = arr
console.log(a, b) // 2, 6
```

---

## Destructuring in Objects

```ts
const obj = {
    name: "shubham",
    age: 21,
    isMarried: false,
    programming: ['html', 'css', 'js', 'react'];
}

const {name, age} = obj;
console.log(name, age); // shubham, 21

// Default Values
const {isMarried: false, language:['English'], programming} = obj;
console.log(isMarried, language); // false, ['English']
console.log(programming); // ['html', 'css', 'js', 'react']

// Mutation variables
let a = 11;
let b = 99;
const obj2 = {a:23, b:7, c:14};
({a, b} = obj2)
console.log(a, b); // 23, 7

// Destructuring of Nested Objects
const obj3 = {mon: {open: 8, close: 11}, {tues: {open: 7, close: 11}}}
const {tues: {open:o, close:c}} = obj3;
console.log(o, c); // 7, 11

```

# The Spread Operator

## Spread Operator in Arrays

```ts
const arr = [1, 2, 3, 4]
const arr2 = [...arr, 5, 6]

console.log(arr2) // [1, 2, 3, 4, 5, 6]
console.log(...arr) // 1, 2, 3, 4
```

- Spread Operators works on every iterables.
- Iterables: Arrays, Strings, Maps, Sets.

## Spread Operator in Objects

```ts
const newRestuarnt = {
  foundedIn: 1998,
  ...restuarant,
  founder: 'Guisippe',
}
```
