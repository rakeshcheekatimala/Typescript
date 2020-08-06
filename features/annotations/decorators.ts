class Boat {
  color: string = 'red';

  @logError("Damn boat is sunk , now you can't see the color")
  formattedColor(): string {
    throw new Error();
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

// pilot has a decorator that throws error, the implementation of decorator
// using property decorator makes the error caught,catch blocks executes and prints the message

new Boat().pilot();

//decorator factories help pass some information to the decorator

function logError(errorMessage: string) {
  return function (target: any, key: string, desc: PropertyDescriptor) {
    const method = desc.value;
    // override the implementation
    desc.value = () => {
      try {
        method();
      } catch (e) {
        console.log(errorMessage);
      }
    };
  };
}

new Boat().formattedColor();
