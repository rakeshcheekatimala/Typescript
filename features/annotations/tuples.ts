const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 40,
};

const pepsi: [string, boolean, number] = ['brown', true, 40]; // this is tuple which helps you identify the drink

type Drink = [string, boolean, number];

// tuples are useful for handling csv data which you can use represent a row
