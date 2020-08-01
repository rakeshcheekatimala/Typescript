/// <reference types="@types/googlemaps" />
import User from './user';
import Company from './company';

class CustomMap {
  private googleMap: google.maps.Map;

  constructor(divId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(divId), {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0,
      },
    });
  }

  addUserMarker(mappableObject: User | Company) {
    new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappableObject.location.lat,
        lng: mappableObject.location.lng,
      },
    });
  }
}

export default CustomMap;
