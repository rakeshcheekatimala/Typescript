What is Typescript

In simple terms it's wrapper around JS that gives you the ability of typed system.

Typed System:

- Helps you to catch errors during the development & compilation phase
- Uses 'type annotations' that helps to analyse code
- Does not provide any optimization related to performance
- Only active during development

Installation:

- npm install -g typescript ts-node
  installing typescipt gives tsc(typescript compiler)
  ts-node is useful for compilation & running your code after compilation
  Exercise:

Make a network request to fetch some data and display

Interface

- Helps to define the structure of an object
- Helps to define the methods related to an class so that it can extends those methods and implement them
- Helps to describe the methods that should be reused by other objects for implementation (refer to interfacessolution.ts)

ex:
interface Todo {
id:number;
title:string;
completed:boolean;
}

Type:

- It refers to what value can fit into the variable that's declared and it's associated methods are available
- It helps to understand what values are flowing & allowed, tsc compiler can detect errors during development

Type Annotations

code we write to tell typescript what value variable refers to

Type Inference

We rely on typescript which guess the type for us

for variable declaration on the same line you don't need to write annotations

When to use Annotations:

- When you have a function that return is any.
- When you declare a variable and use it later
- When we want a variable with a type that can't be inferred
