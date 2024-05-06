# New Data Structure

## Sets

- Set is a collection of unique values.
- Set does not have indexes for its elements. If you want to store and extract data,
  you should use arrays instead.
- Sets are iterable. you can use `for...of` loops over it.

- `set.size`: to find the length of the Set.
- `set.has(props)`: to find if a certain element or props is present in set or not.
- `set.delete(props)`: to delete a certain element or props.
- `set.clear()`: to clear everything from the set.

```ts
const orderSet = new Set(['mon', 'tues', 'mon', 'fri', 'thr', 'fri'])
console.log(orderSet) // Set{"mon", "tues", "thr" ,"fri"}
```

## Maps

- Maps are identical to Objects in JavaScript but with some more advance feeatures included.
- In Maps we a can use any data Types as keys, even another object.

```ts
const rest = new Map()
rest.set('key', 'value')
rest.set(1, 'khoda')

rest.get('key')
value
rest.has(1)
khoda
rest.delete('key')
```

## Strings

- Strings are iterables.
- It can use every method of iterables.

```ts
const place = 'New Delhi'

place[0] // N
place.length // 9
place.indexOf('D')
place.slice(start, end)
place.substring(start.length)

place.toLowerCase()
place.toUpperCase()

place.replace('New', 'Purani')
place.includes('New')

place.startsWith('New')
place.endsWith('lhi')

place.split('-') // return an Array
arr.join(' ') // return a string
```
