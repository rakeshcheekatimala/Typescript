/// <reference types="@types/googlemaps" />
import User from './user';
import Company from './company';

export interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
  markerContent(): string;
}
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

  addMarker(mappableObject: Mappable) {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappableObject.location.lat,
        lng: mappableObject.location.lng,
      },
    });

    marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: mappableObject.markerContent(),
      });
      infoWindow.open(this.googleMap, marker);
    });
  }
}

export default CustomMap;
