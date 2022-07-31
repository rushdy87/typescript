class Vehicle {
  drive(): void {
    console.log('Chugga chugga');
  };

  honke(): void {
    console.log('Beep')
  };
}

class Car extends Vehicle {
  // 1- We can use The Vehicl methods in Car's instance
  // 2- We can override method of perint class:
  drive(): void {
    console.log("vrom");
  }
}

// const vehicle = new Vehicle();
// vehicle.drive();
// vehicle.honke();

const car = new Car();
car.drive();
car.honke();