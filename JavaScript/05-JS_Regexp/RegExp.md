# Regular Expression
- A regular expression (also “regexp”, or just “reg”) consists of a pattern and optional flags.
- There are two syntax to create regular expression object in Javascript.

```js
let regex = new RegExp("pattern", "flags");
// OR
let regexp = /pattern/flags;

```

## flags
- i : case-insensitive (No difference in A and a) 
- g : global flag (looks for all match)
- m : multiline mode
- s : "dotall" mode
- u : enable full Unicode support
- y : "Sticky" mode

## Searching: str.match

```js
str.match(regex);

let str = "We will, we will rock you";
console.log(str.match(/we/gi));  ['We', 'we'] 

```
- str.match(regexp): return an array with all the matching.
- if there are no matches, `null`.
- result.input : returns the original string.

## Replacing: str.replace()

```js
let str = "We will, we will rock you";
console.log(str.replace(/we/gi, "I")); "I will, we will rock you"

```
- `$` is used to insert some unique character inside the string. e.g, `$/` is used to insert /.

## Testing: str.test()

```js
let str = "I love Javascript";
let regex = /LOVE/i;

console.log(regex.test(str)); true

```

## Character Classes
- \d : digits [01234556789]
- \D : non-digits
- \s : space symbols, tabs, newline
- \S : all but \s
- \w : Latin letters, digits, underscore '_'
- \W : all but \w
-  . : an character except a newline '\n'

## Anchors: string start ^ and end $

```js
let input = "12:45";
console.log(/^\d\d:\d\d$/i.test(input)); true

```
- Here the match for \d\d:\d\d must start exactly after the beginning of the text ^.

## Word boundary: \b

```js
console.log("Hello, Java!".match(/\bJava\b/) );  Java
console.log("Hello, JavaScript!".match(/\bJava\b/) );  null

```

## Special Character

- There are special character in regex like `\ [ ] { } ( ) \ ^ $ . | ? * +`.
- Escaping: Let’s say we want to find literally a dot. Not “any character”, but just a dot.
- To use a special character as a regular one, prepend it with a backslash: `\.` .

```js
console.log("Chapter 5.1".match(/\d\.\d/)); 5.1

```
- If we create regular expression with `new RegExp()` then we don't have to use `/`.

## Sets and Ranges[...]

- Sets: `[eao]` means any of the 3 characters: 'a', 'e', or 'o'.

```js
console.log("Mop, top".match(/[mt]op/gi)); ["Mop", "top"]

```

- Ranges: [a-z] is a character in range from a to z, and [0-5] is a digit from 0 to 5.

```js
console.log("Exception 0xAF".match(/0x[0-9A-F][0-9A-F]/gi)); "0xAF"

```

## Excluding Ranges [^...]
- They are denoted by a caret character ^ at the start and match any character except the given ones.

```js
console.log("shubhammgiri3@gmail.com".match(/[^\d\sA-Z]/gi)); ["@", "."]

```
- inside the [...] u can use special character without using `\`.

## Quantitfier +, *, ? and {n}

### Quantity {n}
- A quantifier is appended to a character (or a character class, or a [...] set etc).

- It has a few advanced forms :

#### The exact {n}
- \d{5} is equal to `\d\d\d\d\d`.

```js
console.log("I'm 12345 years old".match(/\d{5}/)); "12345"

```

#### The range {m, n}
- \d{3, 5} is equal to `\d\d\d` or `\d\d\d\d` or `\d\d\d\d\d`

```js
console.log("I'm 1234 years old".match(/\d{3,5}/)); "1234"

```
- Then a regexp \d{3,} looks for sequences of digits of length 3 or more:

```js
console.log("I'm not 12, but 345678 years old".match(/\d{3,}/)); "345678"

```

### Shorthand for Quantitfier
- `+`: {n,} Means “one or more”.
- `?`: Means “zero or one”, the same as {0,1}.
- `*`: Means “zero or more”, the same as {0,}.

```js
let str = "+91-9-718-649-290";
str.match(/\d+/g);  "919718649290"

str = "Should I write color or colour?";
str.match(/\colou?r/g); "color", "colour"

str = "100 10 1";
str.match(/\d*/g);  100, 10, 1

```

## Greedy and Lazy Quantitfier

### Greedy mode

```js
const str = 'a "witch" and her "broom" is here';
console.log(str.match(/".+"/g)); '"witch" and her "broom"'

```

### Lazy mode
```js
const str = 'a "witch" and her "broom" is here';
console.log(str.match(/".+?"/g)); "witch"  "broom"

```
- Laziness is only enabled for the quantifier with ?.

## Capturing groups
- A part of a pattern can be enclosed in parentheses (...). This is called a “capturing group”.

```js
console.log("Gogogo Now!".match(/(go)+/gi)); "Gogogo"

// Example: domain
console.log("shubham.giri.com".match(/(\w+\.)+\w+/)); "shubham.giri.com"

// Example: email
console.log("shubhammgiri3@gmail.com.in".match(/[-.\w]+@([\w-]\.)+\w+/));

```
- Parentheses contents in the match
    - The method `str.match(regex)`, if `regex` has no flag `g`, looks for the first match
    and return the array.
    1. At index `0`: the full match
    2. At the index `1`: the contents in the first parentheses
    3. At the index `2`: the contents in the second parentheses
    ...and so on.

```js
const str = "turn off 660,55 through 986,197";
let regex = /(turn on|turn off|toggle) (\d+),(\d+) through (\d+),(\d+)/;
console.log(str.match(regex)); 
[ 
   "turn off 660,55 through 986,197",
   "turn off",
   "660",
   "55",
   "986",
  "197" 
]

```

- Nested groups

```js
let str = '<span class="my">';
let regex = /<((\w+)\s*([^>]*))>/
const result = str.match(regex);

result[0] = '<span class="my">'
result[1] = "span class='my'"
result[2] = "span"
result[3] = 'class="my"'

```

- optional groups
    - Even if a group is optional and doesn’t exist in the match (e.g. has the quantifier (...)?),
    the corresponding result array item is present and equals undefined.


```js
let match = 'ac'.match(/a(z)?(c)?/);

match[0] = "ac"
match[1] = undefined
match[2] = "c"

```

### Searching for all matches with groups: matchAll
- When we search for all matches(flag `g`), the `match` method doesn't return contents 
for groups.
- To get them, we should search using the method `str.matchAll(regexp)`.
- Just like `match`, it looks for matches, but there are 3 different. 
    - It returns not an array, but an iterable object.
    - When the flag `g` is present, it returns every match as an array with groups.
    - If there are no matches, it return not `null`, but an empty iterable object.

## Backrefrences in Pattern: \N and \k<name>
- A group can be refrenced in pattern using \N, where N is the group number.

```js
let str = `He said: "She's the one".`;
let regex = /(['"])(.*?)\1/g;
console.log(str.match(regex));

```
- In the pattern, `\1` means "find the same text as first group.";

## Alteration | (OR)

```js
let regex = /html|css|php|java(script)?/gi
let str = "First html appeared, then CSS, then Javascript";
console.log(str.match(regex));

```

## Lookahead and Lookbehind

```js
// Lookahead
let str = "1 turkey costs 30$";
console.log(str.match(/\d+(?=\$)/)); 30

// Negative Lookahead
console.log(str.match(/\d+\b(?!\$)/)); 1

// Lookbehind
console.log("$20 is needed".match(/(?<=\$)\d+/)); 20

```

## Methods of RegExp in string

### Str.match(regex)
- The method str.match(regex) finds matches for `regex` in the `str`.
- It has 3 modes, 

1. If the `regex` doesn't have flag `g`, then it returns the first match as an array with capturing groups and
properties`index` and `input`.

```js
const str = "I love Javascript";
let result = str.match(/Java(script)/);

result[0] = "Javascript"[full match]
result[1] = "script"[first capturing group]
result.index = 7 [match position]
result.input = "I love Javascript"[source string]

```

2. If  the `regexp` has flag `g`, then it returns an array of all matches as strings, without capturing groups 
and other details.

```js
const str = "I love Javascript";
let result = str.match(/Java(script)/g);

result.length = 1;
result[0] = "Javascript"

```

### str.split(regex)

```js
'12, 34, 56'.split(/,\s*/);
```
### str.search(regex)
- The method `str.search(regexp)` returns the position of the first match or -1 if none found.

```js
let str = "A drop of ink may make a million think";

alert( str.search( /ink/i ) );  10 (first match position)
```

### regexp.test(str)
- The method regexp.test(str) looks for a match and returns true/false whether it exist.

```js
let str = "I love JavaScript";

// these two tests do the same
alert( /love/i.test(str) ); // true
alert( str.search(/love/i) != -1 ); // true
```



