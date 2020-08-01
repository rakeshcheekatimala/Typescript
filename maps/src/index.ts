/// <reference types="@types/googlemaps" />
import User from './user';
import Company from './company';
import CustomMap from './map';
const user = new User();
const company = new Company();

const customMap = new CustomMap('map');

customMap.addUserMarker(user);
customMap.addCompanyMarker(company);
