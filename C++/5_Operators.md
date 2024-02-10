# Operator

- Arthimetic operator
- Unary operator
- Relational operator
- Logical operator
- bitwise operator
- Assignment operator
- Misc operator

## Arthimetic operators

```cpp
#include <iostream>
using namespace std;

int main() {
    int a = 50;
    int b = 70;
    int add = a + b;            // adding two numbers
    int subtract = a - b;       // subtracting two numbers
    int multiply = a * b;       // multiplying two numbers
    int divide = a / b;         // dividing two numbers
    int modules = a % b;        // getting reminder after division
    cout << add << subtract << multiply << divide << modules;

    return 0;
}

```

## Unary operators

- It only require only one operands. They form various operations on single operand, such as increment, decrement by one,  negating  an expression, or giving a boolean value.

```cpp
 int main() {
     int num1 = 10;

     int num2 = -num1;       // minus operator

     int a = 9;
     int b = 6;
     cout << !(a < b);     // NOT operator reverse the boolean answer

     int i;
     cout << ++i << i++;     // increment by one (pre and past)
     cout << --i << i--;    // decrement by one (pre and post)

     int y = 6;
     cout << y << "'s bitwise complement " << ~y;   // Bitwise operator

     return 0;
 }

```

## Relational Operator

```cpp
int main() {
    int a = 10;
    int b = 20;
    int c = 20;

    // ( == ) equality operator
    cout << (a == b) << endl;
    cout << bool(b == c);

    // ( != ) not equal Operator
    cout << (a != b);

    // Greater and Greater or equal
    cout << (a < b);
    cout << (b <= c);

    // Less than and Less than or equal
    cout << (a > b);
    cout << (b >= c);

    return 0;
}

```

## Logical Operator

- Logical AND operator(&&) - return TRUE if both condition are true.
- Logical OR operator(||)  - return TRUE if one of the two condition is true.
- Logical NOT operator(!)  - return TRUE if the condition is false.

## Bitwise Operator

- The bitwise operators are used to manipulate bit on numbers. There are various types of Bit operators that are used in C++.

(i) Bitwise AND(&)

- 1 & 1 = 1
- 1 & 0 = 0

```cpp
int main() {
    int a = 6; // Binary representation of 6 is 0110
    int b = 7; // Binary representation of 7 is 0111
    cout << (a & b); // 0110 & 0111 = 0110
    return 0;
}
```

(ii) Bitwise OR(|)

- 1 | 0 = 1
- 1 | 1 = 1
- 0 | 0 = 0

```cpp
int main() {
    int a = 6; // Binary representation of 6 is 0110
    int b = 7; // Binary representation of 7 is 0111
    cout << (a | b); // 0110 | 0111 = 0111
    return 0;
}

```
(iii) Bitwise NOT(~)

- ~1 = 0
- ~0 = 1

```cpp
int main() {
    int a = 6;

    cout << "~a = " << ~a;
    return 0;
}

```

(iv) Bitwise XOR operator(^)

- 1 ^ 1 = 0
- 1 ^ 0 = 1
- 0 ^ 0 = 0

```cpp
int main() {
    int a = 6; // Binary representation of 6 is 0110
    int b = 7; // Binary representation of 7 is 0111
    cout << "a ^ b : " << a ^ b; // 0110 ^ 0111 = 0001
    return 0;
}

```

(v) Left shift operator (<<)

```cpp
int main() {
    int a = 8;

    cout << (a << 2); // 1 0 0 0 0 0 = 32;
    return 0;
}

```

(vi) Right shift operator (>>)

```cpp
int main() {
    int a = 8; // 1 0 0 0

    cout << (a >> 2); // 1 0 = 2;
    return 0;
}

```

## Assignment Operator

- Used to assigned values in the variables in C++.

* +=, -=, *=, /=, %=

```cpp
int main() {
     int a = 9;
     int b= 5;

    b += 9;
    a -= 2;
    b *= 5;
    a /= 3;
    b %= 6;

    cout << b << a;
    rerturn 0;
}

```

## Misc Operator


(i) sizeof operator

- This operator determines a variable's size. sizeof operator can also used to determines the size of a data type.

```cpp
#include <iostream>
using namespace std;


int main() {
    int a;
    cout << sizeof(int) << "\n";
    cout << sizeof(char) << "\n";
    cout << sizeof(double) << "\n";
    cout << sizeof(float) << "\n";
    cout << sizeof(a) << "\n";

    return 0;
}

```

(ii) Comma(,)

```cpp
int main() {
    int x, y;

    y = 100;
    x = (y + 10, 99 + y);
    cout << "With Brackets value of x  : " << x;      // x = 199;

    x = y + 10, 99 + y;
    cout << "Without Brackets value of x : " << x;    // x = 110;

    return 0;
}

```

(iii) Conditional Operator(?) or ternary operator

(condition) ? expression1 : expression2;

```cpp
int main() {
    int a = 1, b;
    b = (a > 1) ? 5 : 3;
    cout << b;  // b = 3;

    return 0;
}

```

(iv) Pointer Operator

- & It refers to the address in which operand is stored.
- * It is pointer operator.

```cpp
int main() {
    int a = 1, * b;   // b is pointer operator for int type.
    b = & a;
    cout << "Address of variable a : " << b << endl;
    cout << "Address of variable b : " << & b;

    return 0;
}

```

