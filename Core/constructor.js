function car(brand, model, color) {
  this.brand = brand;
  this.model = model;
  this.color = color;

  // define function
  this.drive = function () {
    console.log("I am Driving" + this.model);
  };
}

let car1 = new car("BMW", "XS", "white");
console.log(car1);
car1.drive();
