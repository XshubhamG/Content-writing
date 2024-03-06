## Cin

- To take input from the user via console, we use Cin statement.

```cpp
int x;
cin >> x;  // input
cout << x; // output

```

## Getline

- getline is a standard library function use to read a string or a line from a input stream;

```cpp
istream& getline(istream& is, string& str, char delim);

```

- is :- is an object of the istream class that tells the stream's function the input that need to be read.
- str :- is the string object which store the input after the stream's reading process is finished.
- delim ;- is the dilimiatation character, which commands the function to stop processing the input.By default, a newline character
  is delim.

```cpp
#include <iostream>
#include <string>
using namespace std;

int main() {
    string s;
    getline(cin, s);
    cout << s;
    return 0;
}

```

## cout

- The C++ cout is used to produce output on the standard output device, usually the display screen or console. cout is a pre-define
  variable that display output or text assigned using insetion operator(<<).

```cpp
cout << "hello world" << endl;
```

```cpp
#include <iostream>
using namespace std;

int main() {
    int age = 21;
    string firstName = "shubham";
    string lastName = "giri";
    cout << "My name is " firstName << lastName << endl;
    cout << "My age is " << age;

    return 0;
}

```
