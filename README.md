# Type Guard Missing Null and Undefined Handling

This repository demonstrates a common issue in TypeScript type guards where null and undefined values are not explicitly handled, leading to runtime errors. The example shows a function that processes either numbers or strings, but fails when a null or undefined value is passed.

## Problem
The `processValue` function uses type guards (`typeof value === 'number'` and `typeof value === 'string'`) to check the type of the input value. However, this approach does not consider null or undefined, which are distinct types in TypeScript. Passing null or undefined leads to type errors and potential runtime exceptions.

## Solution
The solution involves adding explicit checks for null and undefined values before the type guards, preventing the runtime error.
