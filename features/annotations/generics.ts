class ArrayOfNumbers {
  constructor(public collection: number[]) {
    this.collection = collection;
  }

  get(index: number): number {
    return this.collection[index];
  }
}

class ArrayofAnything<T> {
  constructor(public collection: T) {}

  get(index: number): T {
    return this.collection[index];
  }
}

function printAnything<T>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

function printArray<T>(inputArray: T[]): void {
  for (let input of inputArray) {
    console.log(input);
  }
}

class House implements Printable {
  print(): void {
    console.log('Inside House print method');
  }
}

class Car implements Printable {
  print(): void {
    console.log('Inside Car print method');
  }
}
interface Printable {
  print(): void;
}
function callPrintMethod<T extends Printable>(input: T[]) {
  for (let obj of input) {
    obj.print();
  }
}

callPrintMethod([new Car(), new House()]);
