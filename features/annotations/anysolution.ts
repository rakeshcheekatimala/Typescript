// function JSON.parse takes i/p and returns the value , this function return type is any since typescript can't predict
// we fix this issue by telling the i/p types
const points = '{"x":"10","y":"20"}';
const coordinates: { x: number; y: number } = JSON.parse(points); // this is the solution

const colors: string[] = ['red', 'blue', 'green'];

let isColorFound: boolean; // here the declartion is showing the value as any since it's the initialization is done later

// the solution for this
for (let color of colors) {
  if (color === 'green') {
    isColorFound = true;
  }
}

let numberGreaterThanZero: boolean | number = false;

let numbers: number[] = [-1, -10, 77];

for (let num of numbers) {
  if (num > 0) {
    numberGreaterThanZero = num;
  }
}
