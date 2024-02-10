# Scope in C++

- There are mainly two scopes for variable in C++. Global and Local variable.

```cpp
#include <iostream>

int a; // global variable

int main() {
    int b;  // local variable
    return 0;
}

```

- A local variable is only avaiable inside the particular block or function unlike a global variable which is avaiable for the       entire module.


## Local variable

```cpp
void function() {
    // local Variable
    int marks = 90;
    marks = marks + 2;
    cout << "Student obtained " << marks << " marks."
    return;
}

```

## Instance variable

```cpp
class A {
    int a;  // by default private Instance variables
    int b;
public:
    int c;  // public instance variable
    Void function() {
        a = 10;
        cout << a;
    }
}

```

## Static variable

- The static variable is created at the started of the program and get destroyed at the end of the program.

```cpp
class A {
    static int var;
    Void function() {
        ++var;
    }
}

```

## Overflow and Underflow

- Overflow happens when the assigned values is more than of it's range, eg: In case of int, the max value of int data type is 
  2,147,483,647 (INT_MAX) and after incrementing it with 1, it will return -2,147,483,648(INT_MIN), this is Overflow.

- The min value of int data type is (INT_MIN) and after decrementing 1 on this value, it will return INT_MAX. This is Underflow.

```cpp
#include <iostream>
using namespace std;

int main() {
    int x = INT_MAX;
    int y = INT_MIN;
    x = x + 1;
    y = y - 1;
    cout << x << endl;
    cout << y;
    return 0;
}

```

## Typecasting

- Implicit Type Conversion

  - It is automatically performed by the complier itself to ensure that the calculations between the same data types take place
    and avoid any loss of data. Such type of conversions take place when more than one data types is present in an expression.
    The order of automatically type conversion or the sequence for smallest to largest data types for this type of conversions.

    bool -> short int -> int -> unsigned int -> long -> unsigned -> long long -> float -> double -> long double.

```cpp
#include <iostream>
using namespace std;

int main() {
    int number = 200;
    char letter = 'A';
    float dec = 0.7;
    int res1 = number + letter;
    cout << res1 << " ";
    float res2 = res1 + dec;
    cout << res2;
    return 0;
}

```

- Explicit Type Conversion

  - This process is also called typecasting, and it is user-defined. Here the user can typecast the result to make it of a particular data type which may lead to data loss and  is also known as forceful casting.

```cpp
int main() {
    double dbl = 5.6;
    int res = int(dbl) + 9;

    cout << "Result : " << res;
    return 0;
}

```

