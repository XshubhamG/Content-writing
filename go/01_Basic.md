# Go lang

## First Program in Go

- In famous `hello world` program in `go`

```go
package main // package declaration

import "fmt" // importing a library

// main function starting point of the program
func main() {
    fmt.Println("Hello World!")  // println do the magic and print `Hello World!` in to terminal
}
```

- run or build a program using go cli

```bash
go build hello_world.go # To Build a binary

OR

go run hello_world.go # To compile and run from the terminal
```

## Types

Go is a statically typed programming language. This means that variables always have a specific type
and that type cannot change

### `Numbers` type in `go`

- Go has several number types including `int` and `float`.
- Go's integer types are: `int8`, `int16`, `int32`, `int64`, `uint8`, `uint16`, `uint32`, `uint64`
- 8, 16, 32 and 64 tell us how many bits each of the types takes.
- `uint` means "usigned integer" & `int` means "signed integer".
- In addition there are two alias types: `byte` and `rune`.
- `byte` is an alias for uint8 and `rune` is an alias for int32.
- There are also 3 machine dependent integer types: `uint`, `int` and `uintptr`. They are machine
  dependent because their size depends on the type of architecture you are using.

### `Floats` type in `go`

- Floating point numbers are numbers with a fractional part.
- Go has two types of floating point numbers: `float32` and `float64`.

### `Strings` type in `go`

- Strings are an alias for `string`.
- `Hello World!` & "Hello World" are two different way to write string literal.
- `string` is an alias for `[]byte`.
- `len("Hello World!")` returns length of the string literal.
- `"Hello World"[1]` return the second character of the string literal.
- "Hello" + " World" = "Hello World".

### `Booleans` type in `go`

- Booleans are `true` and `false`.
- `true` is an alias for `1` and `false` is an alias for `0`.

## Variables

- Variables are containers for storing data values.
- Variables are declared using `var` keyword.
- Variables are used to store data values in a program.

```go
var name string = "Shubham"
var age int = 20
var isMarried bool = false

fmt.Println(name, age, isMarried)
```

- We can also declare a variable using newer syntax `var name type = value`.

```go
name := "Shubham"
age := 20
isMarried := false

fmt.Println(name, age, isMarried)
```

- `const` keyword is used to declare a variable that's constant.
- `const` variables can't be changed.

```go
const PI = 3.14
const username = "Shubham"
const isCool = true

fmt.Println(PI, username, isCool)
```

## Control Flow

- `if` statement
- `else if` statement
- `else` statement
- `switch` statement
- `for` loop
- `range` loop

```go
// for loop
for i := 0; i < 10; i++ {
    fmt.Println(i)
}

i := 0
for i < 10 {
    fmt.Println(i)
    i++
}

// if statement
if i := 2; i < 10 {
    fmt.Println("i is less than 10")
}

// switch statement
switch i := 2; i {
case 1:
    fmt.Println("i is 1")
case 2:
    fmt.Println("i is 2")
default:
    fmt.Println("i is not 1 or 2")
}

```
