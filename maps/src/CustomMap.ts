
// instractions to every class on how they can be an argument to 'addMArker'
export interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
  icon: string;
  markerContent(): string;
}

export class CustomMap {
  private googleMap: google.maps.Map; //private mean we can't reference it from outside of class
  constructor(elementId: string) {
    const map = document.getElementById(elementId) as HTMLElement;

    this.googleMap = new google.maps.Map(map, {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0
      }
    });
  }


  addMArker(mappable: Mappable): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng
      },
      icon: mappable.icon
    });
    marker.addListener('click', () => {
      const infoWindow = new google.maps.InfoWindow({
        content: mappable.markerContent()
      });
      infoWindow.open(this.googleMap, marker)
    });
  }

}