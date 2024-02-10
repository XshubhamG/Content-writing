# Functions in JavaScript

- Default parameters
- Passing arguments: Value & Refrence
- First-class fucntions & Higher order fucntion
- Function accepting callback Functions
- Function returning Functions
- The call and apply method
- The bind method
- IIFE (immediately invoked fucntion expression)
- Closure

## Default parameters

```ts
const foo(name= "shubham") {
    console.log(`hello, ${name}`);
}

foo('nishant'); "hello, nishant" 
foo();          "hello, shubham"

```

## Passing arguments: Value & Refrence

```ts
const flight = 'LH23';
const person = {
    name: "shubham",
    passport: 3242354214245,
}

function checkIn(flightNum, passenger) {
    flightNum = 'LH999';
    passenger.name = "Mr." + passenger.name;
    console.log("Booked");
}
checkIn(flight, person);      "Booked"
console.log(flight);          'LH23'
console.log(person.name);     Mr. shubham 

```
## First-class fucntions

- JavaScript Treats fucntions as a values since functions are First-class citizens.

- We can store fucntioons in variables, properties and arguments for OTHER fucntions.

```ts
const a = (a, b) => a + b;

const b = {
    value: 23,
    inc() {this.value++} 
}

const greet = () => console.log("hello");
btnClose.addEventListener("click", greet);

```
- We can also return fucntions FROM function & call methods on functions.

## Higher order function
- A function that recieves another function as an argument, that return a new fucntion, or BOTH.
- This is only possible because of First-class.

## Function that recieves another function

```ts
const oneWord = (str) => str.replace(/ /g, " ").toLowerCase();

const transformerFn = (str, fn) => {
    console.log(`Original String: ${str}`);   
    console.log(`Transformered Sting: ${fn(str)}`);
    console.log(`Function name: ${fn.name}`);
}

transformerFn("this is a one word", oneWord);  "thisisaoneword" 

```

## Function returns another function

```ts
const greet = function(greeting) {
    return function(name) {
        console.log(`${greeting} ${name}`)
    }
}

const greeterHey = greet('Hey');
greeterHey("shubham");  "Hey shubham"

```

## call and apply method

```ts
const airIndia = {
    airline: "airIndia",
    iataId: "AI",
    booking: [],
    book(flightNum, name) {
        console.log(`${name} booked a seat on ${this.airline} flight ${this.iataId}${flightNum}`);
        this.booking.push({flight:`${this.iataId}${flightNum}`, name});
    }
}

airIndia.book('342', 'shubham');

const eurowings = {
    airline: "Eurowings",
    iataId: 'EW',
    booking: [],
}

const book = airIndia.book;

book.call(eurowings, 23, 'nikki');

```

## IIFE (immediately invoked fucntion expression)

```ts
(function() {
    console.log("immediately invoked")
})();

```

## Closure
- A Closure is a closed-over variable environment of the execution context in which a fucntion was created, 
even after that execution context is gone.

- A Closure gives a function access to all the variables of its parent function, even after that parent function
has returned. The function keeps a Refrence to its outer scope, which preserves the scope chain throughout time.

- A Closure makes sure that the function doesn't loose connection to variables that existed at it's birthplace.




























