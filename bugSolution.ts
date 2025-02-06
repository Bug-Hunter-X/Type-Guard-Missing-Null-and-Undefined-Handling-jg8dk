function printNumber(num: number): void {
  console.log(num);
}

function printString(str: string): void {
  console.log(str);
}

function processValue(value: number | string | null | undefined): void {
  if (value === null || value === undefined) {
    console.log('Null or undefined value encountered.');
    return; // Explicitly handle null and undefined
  } else if (typeof value === 'number') {
    printNumber(value);
  } else if (typeof value === 'string') {
    printString(value);
  } else {
    console.error('Invalid input type');
  }
}

processValue(10); // Works fine
processValue('hello'); // Works fine
processValue(null); // Handles null gracefully
processValue(undefined); // Handles undefined gracefully