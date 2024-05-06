# Modern JavaScript Operator

## Short-circuiting in '||'

- The first truthy value get return.

```ts
console.log(3 || 'Shubham') // 3
console.log('' || 'Shubham') // Shubham
console.log(true || 0) // true
console.log(undefined || null) // null
```

## Short-circuiting in '&&'

- The first falsy value get return. If there is no falsy value then the last truthy value get return.

```ts
console.log(0 && 'Shubham') // 0
console.log(7 && 'Shubham') // Shubham
```

## Nullish Coalesing Operator ??

- It avoid only nullish values (undefined & null) not all falsy values.

```ts
const a = 0

let b = a || 10
console.log(b) // 10

b = a ?? 10
console.log(b) // 0
```
