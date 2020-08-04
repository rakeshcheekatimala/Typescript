class Boat {
  color: string = 'red';

  formattedColor(): string {
    return `This boats color is ${this.color}`;
  }

  @testDecorator
  pilot(): void {
    throw new Error();
    console.log('inside pilot');
  }
}

// DECORATOR  is simple function whose first arg is prototype and second arg is property, third arg is property descriptor
// property descriptor has the following values {writable:true/false,value:string,configurable:true/false,enumarable:true}
function testDecorator(
  target: any,
  key: string,
  desc: PropertyDescriptor
): void {
  console.log('Target: ', target);
  console.log('Key:', key);
  const method = desc.value;
  desc.value = () => {
    try {
      method();
    } catch (e) {
      console.log('I have caught the exception of pilot method');
    }
  };
}

new Boat().pilot();
// pilot has a decorator that throws error, the implementation of decorator
// using property decorator makes the error caught,catch blocks executes and prints the message
