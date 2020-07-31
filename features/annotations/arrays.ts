const cars = ['benz', 'audi', 'toyota'];
// type inference

const carTyres = [];
//inference will be any

const dates = [new Date(), new Date()];

const carsByMake: string[][] = [];

// Help with inference with extracing values

const firstCar = cars[0];

//cars.push(5); // avoids incompatibility push to the arrays

// Help with map,reduce,filter,etc

cars.map((car: string): string => {
  return car.toUpperCase();
});

// Flexible types, how to store two different types

const importantDates: (Date | string)[] = [new Date(), '2020-02-20'];

//importantDates.push(10); //incompatible type push

// avoid any so that typescript can help
