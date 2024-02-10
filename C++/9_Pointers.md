# Pointers in C++

- Pointers are another type of variables in c++ which store the addresses of other variables in the memory.

- while creating a pointers variables, we need mention the type of the data whose address is stored in the pointer.
e.g; To create a pointer that stores the address of an integer, we need to write: `int* p`

## Address of Operator

- The address of a variable can be obtained by preceding the name of a variable with an ampersend(&) sign, known as the address-of.

```cpp
#include <iostream>
using namespace std;

int main() {
    int i = 10;
    int* p;
    p = & i;

    cout << "Address of integer i is : " << p << endl;
    cout << "Address of the pointer p is : " << &p << endl;

    return 0;
}

```

## Derefrence Operator

- As just seen, a variable that stores the address of another variable is called a pointer. Pointers are said to "point-to" The
variable whose address they stores.

- Pointers can access the variable they point to directly. This is done by preceding the pointer name with the Derefrence Operator
The Operator itself can be read as "value pointed to by".

The refrence and Derefrence Operators are thus complimentary :-

- & is the address-of Operator and can be read simply as "Address of";

- * is the Derefrence Operator and can be read as "value pointed by."

```cpp
#include <iostream>
using namespace std;

int main() {
    int firstValue = 10, secondValue = 20;
    char thirdValue = 'a';
    int* p1,* p2;
    char* p3;
    p1 = & firstValue;   // address of firstValue
    p2 = & secondValue;  //  address of secondValue
    p3 = & thirdValue;   // address of thirdValue
    * p1 = 10;  // value pointed to by p1 = 10
    * p2 = * p1;     // value pointed to by p2 = value pointed to by p2
    p1 = p2;      // p1 = p2; (value of pointer is copied)
    *p1 = 20;
    *p3 = 30;
    cout << firstValue << " " << secondValue << " " << thirdValue << endl;
    cout << p1 << " " << p2 << " " << p3 << endl;

    return 0;
}


```

## Pointers Arthematics

- Arithmetic operations on pointers behave differently than they do on simple data types we studied earlier. Only
addition and subtraction operations are allowed; other aren't allowed n pointers. But both addition and subtraction
have different behavior with pointers, according to size of the data type which they are point.

for example, char always has a size of 1 byte, short is generally larger than that, and int and long are even larger;
the exact size of these depends on the system. For example, let's imagine that in a given system, char takes 1 byte,
short takes 2 bytes, and long takes 4.

suppose now that we define three-pointers,

```cpp
char *myChar;
short *myShort;
long *myLong;

```

and they point to the memory locations 1000, 2000 and 3000, respectively;

Therefore, if we write;

```cpp
++myChar;
++myShort;
++myLong;

```

- myChar would contain the value 1001,
- myShort would contain the value 2002,
- myLong would contain the value 3004,

- Pointers may be compared by using relations operators, such as  ==, <, and >. If p1 and p2 point to variables related
to each other, such as the same array of elements, then p1 and p2 can be meainfully compared.

## Types of Pointers in C++

- Null Pointers
- Double Pointers
- Void Pointers
- Wild Pointers
- Dangling Pointers









