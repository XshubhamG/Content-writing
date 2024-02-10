# Functions in C++

```cpp
return_type function_name(para1, para2,...) {
    // function body
}

```

## Functions Declaration

- When the function is defined before the main() function in the program, then function Declaration is not required, but writing
the function after the main() function requires function Declaration first, else there will be compliation.

```cpp
#include <iostream>
using namespace std;

// Functions Declaration
int sum(int, int);


int main() {
    // Calling function
    cout << sum(50, 60);

    return 0;
}

int sum(int x, int y) {
    int z = x + y;
    return z;
}


```

## Functions Calling in C++

```cpp
#include <iostream>
using namespace std;

int max(int x, int y) {
    if(x > y) {
        return x;
    } else {
        return y;
    }
}

int main() {
    int a = 20;
    int b = 10;

    // Method Calling
    int Maximum = max(a, b);

    cout << Maximum;
    return 0;
}

```

## Type of Functions

- Built-in Functions
   - These function are also called library functions, since there are already defined in the standard c++ library.

- User defined Functions
   - These function are defined by User for its own uses in the particular module.

### Types of User-defined function

   - Functions with no arugments and no return value.
   - Functions with no arugments but returns a value.
   - Functions with arugments but not return value.
   - Functions with arugments and return value.

## Parameters in Functions

There are two ways to pass parameters,
   - Pass by value
   - Pass by refrence

**Pass by value** :- Here values of actual parameters are copied to the function formal parameters, and two type of parameters 
are stored in different memory locations.

```cpp
#include <iostream>
using namespace std;

void func(int x) {
    x = 50;
    cout << x << endl;
}


int main() {
    int x = 10;
    func(x);
    cout << x << endl;
    return 0;
}

```

Here the value of x vary since two different variable has been created and stored in two different memory locations.

** Pass by refrence **  :-Here, actual parameters and formal parameters are pointing to the same locations. So, any changes made
inside the function are reflected in the actual parameters of the caller.

```cpp
#include <iostream>
using namespace std;

void func(int &x){
    x = 50;
    cout << x << endl;
}

int main() {
    int x = 10;
    func(x);

    cout << x << endl;
    return 0;
}

```

## Functions Overloading

- Functions Overloading is programming in features in C++ that allows having more than one function having the same name but
different parameters 1,

```cpp
int add(int x, int y);

double add(double x, double y);

```
- Both add functions are different since both have different return types and arugments types. Therefore, Compiler doesnt through
an error.













