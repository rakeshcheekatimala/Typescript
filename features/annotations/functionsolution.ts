const add = (a: number, b: number): number => {
  return a + b;
};

// this function does not tell what are i/p type is

console.log(add(5, 6));

const subract = (a: number, b: number): number => {
  return a - b;
};

const logger = (message: string): void => {
  console.log(message);
};

// we annotate with never which means we tell typescript that we never return anything from the function
const throwError = (message: string): never => {
  throw new Error(message);
};

const logWeather = ({ date, weather }: { date: Date; weather: string }) => {
  console.log(date);
  console.log(weather);
};

// destructing the profile object
let profile = {
  name: 'John Doe',
  age: 72,
  setAge(age: number): void {
    this.age = age;
  },
  coords: {
    lat: 40,
    long: 98,
  },
};

// you need to tell typescript explicitly the destrucing types for profile
const { age }: { age: number } = profile;

const {
  coords: { lat, long },
}: { coords: { lat: number; long: number } } = profile;
