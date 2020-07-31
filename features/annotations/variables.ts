const apples: number = 5;
// : number is called type annotation which tells the typescript apples can accept or hold a number value
const speed: string = '80kmph';
const isEligibletoVote: boolean = true;
const PF: undefined = undefined;
const salary: null = null;
const today: Date = new Date();

// the first params indicates the type of i/p to the function
// the second param boolean indicates the type of the return type from the funcion
const isEven: (num: number) => boolean = (num: number) => {
  return num % 2 === 0;
};

// object literal
const point: { x: number; y: number } = {
  x: 10,
  y: 10,
};

// let arrays for strings
let persons: string[] = ['rakesh', 'rahul'];

// array of boolean

let predicates: boolean[] = [true, false, true];
