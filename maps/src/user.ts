import faker from 'faker';

// implementation of user which has name,location
// randomly generate latitude & longtitude for a user
// we use the faker package to generate random user & lat,longtitude

class User {
  name: string;
  location: {
    lat: number;
    lng: number;
  };
  constructor() {
    this.name = faker.name.firstName();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }
}

export default User;
