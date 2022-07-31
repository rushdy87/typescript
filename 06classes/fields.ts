class Vehicle {
  /*
  color: string;
  constructor(color: string) {
    this.color = color;
  }
  the short hand can be:
  */
  constructor(public color: string) { } //we can make color privet or protected, but we cann't access it outside the class.

  protected honke(): void {
    console.log('Beep')
  };
}

const vehicle = new Vehicle('Orange');
console.log(vehicle.color);

class Car extends Vehicle {
  constructor(public wheels: number, color: string) {
    super(color);
  }
  private drive(): void {
    console.log("vrom");
  }
  startDrivingProcess(): void {
    this.drive();
    this.honke();
  }
}

const car = new Car(4, 'red');
console.log(car.color);