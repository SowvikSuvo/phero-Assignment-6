1.  What is the difference between var, let, and const?

    Ans:-

        let-

    1. Introduced in ES6 modern JavaScript.

    2. Scope -> Block-scoped({ }).

    3. Re-declare -> Not allowed in the same scope.

    4. Re-assign -> Allowed.

    5. Hoisting -> Variables declared with let are hoisted to the top of their block scope but are not initialized. Accessing them before the declaration results in a ReferenceError due to the "temporal dead zone".

       const-

    6. Introduced in ES6 modern JavaScript.

    7. Scope -> Block-scoped({ }).

    8. Re-declare -> Not allowed in the same scope.

    9. Re-assign -> Not allowed.

    10. Hoisting -> Variables declared with const are hoisted to the top of their block scope but are not initialized. Accessing them before the declaration results in a ReferenceError due to the "temporal dead zone".

        var-

    11. Introduced in the early versions of JavaScript.

    12. Scope -> Function-scoped.

    13. Re-declare -> Allowed in the same scope.

    14. Re-assign -> Allowed.

    15. Hoisting -> Variables declared with var are hoisted to the top of their function scope and initialized with undefined. Accessing them before the declaration does not result in an error, but the value will be undefined.

2.  What is the difference between map(), forEach(), and filter()?

    Ans:-

        map()-

    1. The map() method creates a new array populated with the results of calling a provided function on every element in the calling array.

    2. It returns a new array.

    3. It does not modify the original array.

    4. It is used when you want to transform each element of an array.

       forEach()-

    5. The forEach() method executes a provided function once for each array element.

    6. It does not return a new array; it returns undefined.

    7. It does not modify the original array.

    8. It is used when you want to perform side effects (like logging or updating external variables) for each element in an array.

       filter()-

    9. The filter() method creates a new array with all elements that pass the test implemented by the provided function.

    10. It returns a new array containing only the elements that satisfy the condition.

    11. It does not modify the original array.

    12. It is used when you want to select a subset of elements from an array based on a condition.

3.  What are arrow functions in ES6?

    Ans:-

    Arrow functions, introduced in ES6, are a more concise syntax for writing function expressions in JavaScript. They are often used for shorter functions and have some differences compared to traditional function expressions.

    Syntax:

    ```javascript
    // Traditional function expression
    const add = function (a, b) {
      return a + b;
    };

    // Arrow function expression
    const add = (a, b) => a + b;
    ```

    Key Features of Arrow Functions:

    1. Concise Syntax: Arrow functions have a shorter syntax compared to traditional function expressions, especially for single-expression functions where the return statement is implicit.

    2. Lexical `this`: Arrow functions do not have their own `this` context. Instead, they inherit `this` from the surrounding lexical scope. This is particularly useful in scenarios where you want to maintain the context of `this` from the outer function.

    3. No `arguments` Object: Arrow functions do not have their own `arguments` object. If you need to access the arguments passed to an arrow function, you can use rest parameters (`...args`).

    4. Cannot be used as Constructors: Arrow functions cannot be used as constructors and will throw an error if you try to use them with the `new` keyword.

    5. No `prototype`: Arrow functions do not have a `prototype` property, so they cannot be used to create instances of objects.

    Example:

    ```javascript
    const numbers = [1, 2, 3, 4, 5];

    // Using arrow function with map
    const doubled = numbers.map((num) => num * 2);
    console.log(doubled); // Output: [2, 4, 6, 8, 10]

    // Using arrow function with forEach
    numbers.forEach((num) => console.log(num)); // Output: 1 2 3 4 5
    ```

4.  How does destructuring assignment work in ES6?

    Ans:-

    Destructuring assignment is a feature in ES6 that allows you to unpack values from arrays or properties from objects into distinct variables. This syntax provides a more concise and readable way to extract data from complex structures.

    There are two main types of destructuring: array destructuring and object destructuring.

    1. Array Destructuring:
       You can extract values from an array and assign them to variables using square brackets [].

    Example:

    ```javascript
    const numbers = [1, 2, 3];

    // Destructuring assignment
    const [a, b, c] = numbers;

    console.log(a); // Output: 1
    console.log(b); // Output: 2
    console.log(c); // Output: 3
    ```

    You can also skip elements by leaving empty spaces in the destructuring pattern:

    ```javascript
    const [first, , third] = numbers;
    console.log(first); // Output: 1
    console.log(third); // Output: 3
    ```

    2. Object Destructuring:
       You can extract properties from an object and assign them to variables using curly braces {}.

    Example:

    ```javascript
    const person = {
      name: "Alice",
      age: 30,
      city: "New York",
    };

    // Destructuring assignment
    const { name, age } = person;

    console.log(name); // Output: Alice
    console.log(age); // Output: 30
    ```

    You can also assign new variable names while destructuring:

    ```javascript
    const { name: fullName, age: years } = person;
    console.log(fullName); // Output: Alice
    console.log(years); // Output: 30
    ```

    Additionally, you can provide default values in case the property does not exist in the object:

    ```javascript
    const { country = "USA" } = person;
    console.log(country); // Output: USA (default value)
    ```

5.  Explain template literals in ES6. How are they different from string concatenation?

    Ans:-

    Template literals, introduced in ES6, are a new way to work with strings in JavaScript. They provide a more flexible and readable syntax for creating strings compared to traditional string concatenation.

    Key Features of Template Literals:

    1. Backticks (` `): Template literals are enclosed in backticks instead of single (' ') or double (" ") quotes. This allows for multi-line strings without the need for escape characters.

    2. Interpolation: Template literals support interpolation, which means you can embed expressions directly within the string using the `${expression}` syntax. This makes it easy to include variables and expressions in the string without breaking it up.

    3. Multi-line Strings: Template literals can span multiple lines without the need for concatenation or escape characters, making it easier to create formatted strings.

    Example of Template Literals:

    ```javascript
    const name = "Alice";
    const age = 30;

    // Using template literals
    const greeting = `Hello, my name is ${name} and I am ${age} years old.`;
    console.log(greeting);
    // Output: Hello, my name is Alice and I am 30 years old.

    // Multi-line string
    const multiLine = `This is a multi-line string.
    It can span multiple lines
    without any special characters.`;
    console.log(multiLine);
    ```

    Comparison with String Concatenation:

    1. Readability: Template literals are generally more readable than string concatenation, especially when dealing with multiple variables or expressions.

    2. Less Error-Prone: With template literals, you don't have to worry about adding spaces or plus signs (+) between strings and variables, reducing the chances of errors.

    3. Multi-line Support: Template literals allow for easy creation of multi-line strings without the need for escape characters or concatenation.

    Example of String Concatenation:

    ```javascript
    const name = "Alice";
    const age = 30;

    // Using string concatenation
    const greeting =
      "Hello, my name is " + name + " and I am " + age + " years old.";
    console.log(greeting);
    // Output: Hello, my name is Alice and I am 30 years old.
    ```
