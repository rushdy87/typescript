import faker from 'faker';

import { Mappable } from './CustomMap';

export class Company implements Mappable {

  companyName: string;
  catchPhrase: string;
  location: {
    lat: number;
    lng: number;
  };
  icon: string = "http://maps.google.com/mapfiles/kml/shapes/ranger_station.png";

  constructor() {
    this.companyName = faker.company.companyName();
    this.catchPhrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    }
  }

  markerContent(): string {
    return (
      `<div>
        <h3 style="color: red;">${this.companyName}</h3>
        <p>${this.catchPhrase}</p>
      </div>`
    )
  }

}