class Vehicle {
  color: string;

  constructor(color: string) {
    this.color = color;
  }

  public drive(): void {
    console.log('Ready to drive....');
  }
  honk(): void {
    console.log('beep beep..');
  }
}

const vehicle = new Vehicle('orange');
vehicle.drive();
vehicle.honk();

class Car extends Vehicle {
  drive(): void {
    console.log('vroom vroom...');
  }
}

let c1 = new Car('blue');
console.log(c1.honk());
console.log(c1.color);

//access modifiers can be used on both modifiers or methods or constructor
// public is accessible from anywhere
// protected only accessible b/w the classess who inherited and the parent class
// private only accessible with in that class aslone
// default is accessible outside the class
