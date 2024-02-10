# JS-Engine Behind the scene

- JavaScript is a High-level, object-oriented, multi-paradigm Programming language.

## Key words which make the JS language

- High-level
- Garbage-collected
- Interpreted and Just-in-time complied
- Multi-paradigm
- Prototype-based object-oriented
- First-class-function
- Dynamic
- Single-threaded
- Non-blocking Event Loop Concurrency Model

## JavaScript Engine

- A Just-in-time Compilation
- Callstack :- where our code is executed using execution context.
- Heap :- where  object requried is stored.

## Compilation And Interpretation

Compilation :- Entire code is converted into machine code at once, and written to a binary file that can be executed by computer.

                  [Compilation]                            [Execution]
    [Source code]    ==>      { Portable Machine code }      ==>      [ Program running ]

Interpretation :- Interpreter runs the Source code and execute it line by line.

    [Source code]     ==>     { Execution line by line }    ==>     [ Program running ]

## Just-in-time Compilation

Entire Source code is converted into machine code at once, then executed immediately.

    [Steps] ---> { Parsing (into an AST)} --->  { Compilation (into machine code) }  --->  { Execution }

## JavaScript Run-time

    [JS Engine]  <--->  [Web API]  <--->  [Callback queue]

- JS Engine :- it contains Heap(variables) and Callstack(object).
- WEB API :- it contains things like DOM, Timers, Fetch API etc.
- Callback queue :- it contains callback function which are often called in the run time.

## Execution Contexts

- Environment in which a piece of JavaScript code executed. Stores all the neccassary information for some code to be
executed.

- There is Exactly **ONE** global Execution contexts(EC) :- Default context, 
created for code that is not inside any function.

  - One Execution Contexts per function.

## What's inside execution contexts

- [Variable Environment ] :- All our variables, function declaration and argument object.
- [Scope chain]
- [this keyword]

[!NOTE] :- An Arrow Function doesn't have its argument variable and this keyword. Instead they can use argument variable 
and this keyword of the nearest function declaration.

## Callstack

- It is a place in the JavaScript Engine where execution contexts gets stacked on top of each other, to keep track of where are in the execution.

## Scope chain

- Scoping is how our program's variables are orgainzed and accessed.



