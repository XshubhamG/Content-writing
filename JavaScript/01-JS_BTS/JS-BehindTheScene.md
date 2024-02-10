# JS Behind the Scene

## Overview
- JavaScript is high-level, Object-oriented, Multi-Paradigm Programming language.
### JavaScript is : 
                  - high-level
                  - Prototype-based Object-oriented
                  - Multi-Paradigm
                  - Interpreted or Just-in Time
                  - Dynamic
                  - Single-threaded
                  - Garbage-collected
Programming language with first-class Functions and A non-blocking event loop Concurrency Model.


----------


# JS Engine and Runtime
     - A computer program which convert JS code into machine code. such as V8 engine;
     - Every JS engine has CallStack (Execution Context) and Heap

## Computer Science Side Node Compilation v/s Interpretation
    - Compilation: Entire code is converted into machine code at once, and written to a binary 
    file that can be executed by a computer.
    - Interpretation: Interpreter runs through the source code and executes it line by line.

## JS-in Time Compilation 
     - Entire code is converted into machine code at once,then executed immediately.
     - The first step is Parsing, which convert the code into AST.
     - Then AST get complied into machine code through Compilation.
     - Then Execution happen in the CallStack.
     - Even after the execution, the code get optimize and a more optimized code replace the 
     executed code in CallStack.

## JavaScript Runtime
     - JS runtime in the Browser. It has JS-engine, Web API, Callback queue.
     - Web APIs - Functionalities provided to engine, accesible on window engine.
     - Callback queue is Data Structure which contains all the callback functions that ready to be 
     execute on Event.


----------


# Execution Context and CallStack
    - An environment in which a piece of JavaScript is executed. Stores all 
    neccessary info for code to be executed.
    - Exactly one Global Execution context exist in a JS Module.
    - Every function has its own execution context.
    - All the execution context makes up the CallStack.

## Global Execution Context
    - At the time of the execution it creates a global execution context(for top level code).
    - First, Execution of top level code inside the global execution context.
    - then the execution of functions waiting and waiting for callback.

## Execution Context contains 
- A Variable environment: All Variable declares inside the functions will be listed here. 
     - let, const and var declarations
     - Functions
     - arguments object
however It can also access variable from outsides of the function like global EC.
- Scope chain: It consist of the Refrence of the variable located the outside from the current
functions.
- `this` keyword

## CallStack
      - It is a place in the engine where ecexcutions context get stacked on top of each other,
      to keep track where we are in the execution.


----------


# Scope and Scope chain
     - Scoping controls how our program's variables are organised and accesed.
     - Lexical Scoping is controls by placement of functions and blocks in the code.
     - Scope is the space or environment in which a certain variable is declared.
     - There is a global scope, functions scope and block scope.

- block scope variables in JS come after ES6 which means only variables declare with 'let' & 'const' 
variables are block scoped. and variable declared with 'var' is not blocked scoped.


----------


# Variable environment : Hoisting and TDZ

## Hoisting
     - Makes some times of variable accesible/usable in the code before they are actually declared.
     "Variable lifted to the top of their".
     - before execution, code is scanned for variable declaration, and for each variable, a new 
     property is created in the variable environment object.

## How hoisting effects
        - Functions declarations are hoisted with initial value as actual fucntion. They are block
        scope in strict mode.
        - 'var' variable are hoisted with initial value 'undefined'. They are function scope.
        - 'let' or 'const' variables are not hoisted <uninitialized>, TDZ. They are also blocked 
        scope.
       - hoisting for functions expressions and arrow functions depend upon how they created. using
      'var' or 'let/const'.

## Temperal Dead Zone 
- when we declare variables using 'let/const' and if we try  to access it before initializing them 
we get the error `Refrence error: cannot access 'variable' before initialization`.
- This means the engine know they is a variable but it is not initialized yet so you cannot access it.

## Why TDZ?
     - Make it easier to avoid or catch errors.
     - Makes const variables actually work.

## Why hoisting?
     - using functions before declaration.
     - var hoisting is just by-product.


----------


# The "this" keyword
- It is a special variable created for every execution context. It always take the value of the owner
fucntion in which the `this` keyword is defined.
- `this` depend on how it is called in a function and the function itself. It is not static.
- The value of  `this` is assigned when the function is actually called.

## function as Method of an Object
     - In this way, the value of `this` is Object calling the method.
```js
const shubham = {
    name: 'shubham',
    year: 2002,
    calAge() {
        return 2023 - this.year;
    }
}
shubham.calAge() // 21

```

## simple function call
     - In this case, this = `undefined` in strict mode, but in loose mode it point to window object.

## Arrow Functions
     - Arrow functions doesn't have their own `this` keyword in their execution context, so when
     `this` keyword is called inside of arrow function it point to the function surrounding it.

## Event Listener
     - In eventlistener function, `this` keyword point to the DOM element attached to handler.


----------


# Primitive type v/s Refrence type

## Primitive types
     - Each Primitive value is saved exclusive in it's piece of memory.

```js
let lastName = 'choudhary';
let oldLastName = lastName;
lastName = 'giri';

console.log(oldLastName, lastName); // choudhary giri 

```

## Refrence types
     - On copying a Refrence type data type, It only copy the refrence of it present in the heap 
     not the actual code. 

```js
    const shubham {
         fname: 'shubham',
         lname: 'giri',
         birth: 2002,
         age: 21,
    }

    const nishant = shubham;
    nishant.age = 14;
    console.log(shubham.age); // 14

```
- this is will copy the refrence of  `shubham` object into  the 'nishant' 
- If you change a property of `nishant` the property of `shubham` will also change.



