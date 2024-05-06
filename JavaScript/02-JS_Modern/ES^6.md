# ES6+ Features

## for...of loops for Arrays

```ts
for (const item of menu) {
  console.log(item)
}
```

- Enhancing Object literal
- Optional Chaining '?'

## Looping Objects: Objects keys, Objects values and entries

- Object.keys(obj) is an array of all Properties `names` of an Object `obj`.
- Object.values(obj) is an array of all Properties `values` of an Object `obj`.
- Object.entries(obj) is an array of all Properties `names` and `values` as two elements of an Object 'obj'.

```ts
const weekdays = {
  mon: 5,
  tue: 6,
  wed: 5,
  thur: 5,
  fri: 6,
}

for (const day of Object.keys(weekdays)) {
  console.log(day)
}

for (const openAt of Object.values(weekdays)) {
  console.log(openAt)
}

for (const opening of Object.entries(weekdays)) {
  console.log(opening)
}
```
