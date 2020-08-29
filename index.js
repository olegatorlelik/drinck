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
  constructor() {
    this.DrinkStorage = {
      mojito: ["Ром", "Содовая", "Лайм", "Мята"],
      cubaLibre: ["Ром", "кола", "лайм"],
      afterDrinck: ["Водка", "Мартини", "огурец"],
    };
  }
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
  getBtn(nameId) {
    return document.querySelector(nameId);
  }
  setInfo() {
    // let that = this;
    let qstionDrinck = prompt("Введи название напитка");
    let qstionComposition = prompt("Введи состав напитка");
    this.addValue(qstionDrinck, qstionComposition);
  }
}
const drinck = new Storage();
drinck.setInfo();
console.log(drinck);
// drinck.getBtn("#intInfoDrinck").addEventListener("click", drinck.setInfo);

// console.log(drinck.DrinkStorage);
// let nameDrink = prompt("Введи название напитка");
// let composishonDrink = prompt("Введи состав").split(",");
// drinck.addValue(nameDrink, composishonDrink);
// console.log(drinck);

// function intNameDrinck() {
//   let intName = prompt("хочешь узнать рецепт? введи название напитка");
//   let curent = 0;
//   for (let i in drinck.DrinkStorage) {
//     if (i === intName) {
//       alert(drinck.DrinkStorage[i]);
//       curent++;
//     }
//   }
//   alert(`Было найденно ${curent} напитков`);
// }
// intNameDrinck();

// let qstionNameDrink = prompt("Какой напиток хочешь удалить?");
// drinck.deleteValue(qstionNameDrink);
// console.log(drinck);
// alert(`Перечень всех напитков ${drinck.getKeys()}`);
