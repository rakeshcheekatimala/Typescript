import faker from 'faker';
import { Mappable } from './map';
// implementation of user which has name,location
// randomly generate latitude & longtitude for a user
// we use the faker package to generate random user & lat,longtitude

class User implements Mappable {
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
  markerContent(): string {
    return `User Name ${this.name}`;
  }
}

export default User;
