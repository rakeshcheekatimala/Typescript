interface Reportable {
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

const printSummary = (item: Reportable): void => {
  console.log(item.summary());
};

const drink = {
  sugar: 40,
  color: 'brown',
  carbonated: true,
  summary(): string {
    return `My drink has {this.sugar} grams of sugar`;
  },
};
console.log(printSummary(oldToyota));
console.log(printSummary(drink));

// here both drink & oldToyota are different objects however the implementation method summary is present in both objects
// hence we can use printSummary to call the summary method present inside that object
