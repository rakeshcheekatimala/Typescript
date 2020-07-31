const add = (a, b) => {
  return a + b;
};

// this function does not tell what are i/p type is

console.log(add(4, 5));

// return type is not indicated , importance of return type
const subract = (a: number, b: number) => {
  a - b;
};

// return type is not indicated , explain about void
const logger = (message: string) => {
  console.log(message);
};

// return type is not indicated , explain about never
const throwError = (message: string) => {
  throw new Error(message);
};

// destructing example

let todayWeather = {
  date: new Date(),
  weather: 'hot',
};

const logWeather = (todayWeather: { date: Date; weather: string }) => {
  console.log(todayWeather.date);
  console.log(todayWeather.weather);
};

// how to support destruct , look for solution in functionsolution.ts

// object destruction

let profile = {
  name: 'John Doe',
  age: 72,
  setAge(age) {
    this.age = age;
  },
  coords: {
    lat: 40,
    long: 98,
  },
};

const { age } = profile;

const {
  coords: { lat, long },
} = profile;
