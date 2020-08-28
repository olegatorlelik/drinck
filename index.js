// let heiter = {
//   name: "Bil",
//   lastName: "Geits",
//   getName() {
//     return this.name + "" + this.lastName;
//   },
// };
// console.log(heiter.getName());

// let heiter2 = {
//   name: "donald",
//   lastName: "tramp",
//   getName() {
//     return this.name + "" + this.lastName;
//   },
// };
// console.log(heiter2.getName());

// class Heiter {
//   constructor(name, lastName) {
//     this.name = name;
//     this.lastName = lastName;
//   }
//   sayName() {
//     console.log(`Имя: ${this.name} Фамилия: ${this.lastName}`);
//   }
// }

// let heiter = new Heiter("Bobi", "English");
// heiter.sayName();

// let animal = {
//   name: "Animal",
//   age: 7,
//   hastTall: true,
// };

// class Animal {
//   constructor(options) {
//     this.name = options.name;
//     this.age = options.age;
//     this.hasTall = options.hasTall;
//   }
//   voiceAnimal() {
//     console.log(`i am ${this.hasTall}`);
//   }
// }

// const cat = new Animal({
//   name: "cat",
//   age: 3,
//   hasTall: true,
// });

// const dog = new Animal({
//   name: "dog",
//   age: "5",
//   hasTall: false,
// });

// console.log(cat.voiceAnimal());
// console.log(dog.voiceAnimal());

class Storage {
  DrinkStorage = {
    mojito: ["Ром", "Содовая", "Лайм", "Мята"],
    cubaLibre: ["Ром", "кола", "лайм"],
    afterDrinck: ["Водка", "Мартини", "огурец"],
  };
  reset() {
    for (let i in this.DrinkStorage) {
      delete this.DrinkStorage[i];
    }
  }
  addValue(key, value) {
    return (this.DrinkStorage[key] = value);
  }
  getValue(key) {
    return this.DrinkStorage[key];
  }
  deleteValue(key) {
    for (let i in this.DrinkStorage) {
      if (this.DrinkStorage[i] === this.DrinkStorage[key]) {
        delete this.DrinkStorage[i];
        return true;
      } else {
        return false;
      }
    }
  }
  getKeys() {
    return Object.keys(this.DrinkStorage);
  }
}

// const check = new Storage();
// console.log(check.getKeys());
// check.deleteValue(check.drinks.mojito);
// console.log(check.deleteValue("mojito"));
// console.log(check);
// console.log(check.getValue("mojito"));

// CHECK NEW BRANCH
