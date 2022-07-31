class Vehicle {
  protected honke(): void {
    console.log('Beep')
  };
}

const vehicle = new Vehicle();
// vehicle.honke(); // error: Property 'honke' is protected and only accessible within class 'Vehicle' and its subclasses.

class Car extends Vehicle {
  private drive(): void {
    console.log("vrom");
  }
  startDrivingProcess(): void {
    this.drive();
    this.honke();
  }
}

const car = new Car();
car.startDrivingProcess();

/*
class Vehicle {
  public drive(): void {
    console.log('Chugga chugga');
  };

  public honke(): void {
    console.log('Beep')
  };
}

class Car extends Vehicle {
  private drive(): void { // error: class Car
                              Class 'Car' incorrectly extends base class 'Vehicle'.
                              Property 'drive' is private in type 'Car' but not in type 'Vehicle'.
    console.log("vrom");
  }
  startDrivingProcess(): void {
    this.drive()
  }
}
*/