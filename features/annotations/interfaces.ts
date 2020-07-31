interface OldCar {
  name: string;
  year: Date;
  broken: boolean;
  summary(): string; // this is simple fn that summarises the facts of a car,return type is string
}

const oldToyota = {
  name: 'toyota',
  year: new Date(),
  broken: true,
  summary(): string {
    return `Name {this.name} and was bought in {this.year} and is it broken {this.broken}`;
  },
};

const printVehicle = (vehicle: OldCar): void => {
  console.log(vehicle.summary());
};

console.log(printVehicle(oldToyota));
