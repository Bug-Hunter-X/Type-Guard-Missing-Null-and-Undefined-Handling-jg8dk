function printNumber(num: number): void {
  console.log(num);
}

function printString(str: string): void {
  console.log(str);
}

function processValue(value: number | string): void {
  if (typeof value === 'number') {
    printNumber(value);
  } else if (typeof value === 'string') {
    printString(value);
  } else {
    console.error('Invalid input type');
  }
}

processValue(10); // Works fine
processValue('hello'); // Works fine
processValue(null); // Throws an error because null is not a number or string