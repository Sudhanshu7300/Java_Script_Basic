class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  showDetails() {
    return this.name;
  }
}

let person1 = new Person("Sudhanshu", 22);
console.log(person1);
console.log(person1.showDetails());
