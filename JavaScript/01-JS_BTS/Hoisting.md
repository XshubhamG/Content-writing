# Hoisting

- Hoisting make some types of variable accessible in the code before they are actually declare.
  "Variables lifted to the top of the scope"

- Before Execution, code is scanned for variable declarations, for each variable, a new property is created in the
  "variable environment object".

- function declarations are:

  - Hoisted
  - Initial value is Actual function
  - In strict mode, it is blocked scoped

- 'var' variable

  - Hoisted
  - undefined
  - function scoped

- 'let/const' variable

  - not Hoisted
  - <uninitialized>, TDZ(temporal dead zone)
  - Block

- function expressions and arrows

  - Depends if using 'var' or 'let/const'

- TDZ - Makes it easier to avoid and catch errors: accessing variables before declarations is bad practice.
- Makes const variables actually work.
