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
        return alert("Напиток был удален");
      } else {
        return false;
      }
    }
  }
  getKeys() {
    return Object.keys(this.DrinkStorage);
  }
  //   // getBtn(nameId) {
  //   //   return document.querySelector(nameId);
  //   // }
  //   // setInfo() {
  //   //   let qstionDrinck = prompt("Введи название напитка");
  //   //   let qstionComposition = prompt("Введи состав напитка");
  //   //   this.addValue(qstionDrinck, qstionComposition);
  //   // }
  //   // init() {
  //   //   this.getBtn("#intInfoDrinck").addEventListener("click", this.setInfo);
  //   // }
}
const drinck = new Storage();

init("#intInfoDrinck", setInfo);
init("#getInfoDrinck", qstionInfoDrinck);
init("#deletDrinck", deletDrinck);
init("#infoDrinck", info);
console.log(drinck);

function info() {
  let arr = [];
  for (let i in drinck.DrinkStorage) {
    arr.push(i);
  }
  alert(arr);
}

function deletDrinck() {
  let deletQstion = prompt("Какой напиток хочешь удалить?");
  drinck.deleteValue(deletQstion);
}

function qstionInfoDrinck() {
  let counter = 0;
  let qstion = prompt("О каком напитке ты хочешь узнать?");
  for (let i in drinck.DrinkStorage) {
    if (qstion === i) {
      alert(drinck.DrinkStorage[i]);
      counter++;
    }
  }
  alert(`Было найдено ${counter} напитков`);
}

function setInfo() {
  let qstionDrinck = prompt("Введи название напитка");
  let qstionComposition = prompt("Введи состав напитка");
  drinck.addValue(qstionDrinck, qstionComposition);
}

function init(nameId, foo) {
  let btn = document.querySelector(nameId);
  btn.addEventListener("click", foo);
}

// class Anketa {
//   constructor() {
//     this.name = "";
//     this.lastName = "";
//     this.serName = "";
//     this.age = "";
//     this.nextAge = "";
//     this.gender = "";
//     this.pension = "";
//   }
//   intName() {
//     return (this.name = prompt("Ваше имя"));
//   }
//   intLastName() {
//     return (this.lastName = prompt("Введи фамилию"));
//   }
//   intSerName() {
//     return (this.serName = prompt("Введи отчество"));
//   }
//   intAge() {
//     return (this.age = prompt("Введи ваш возраст"));
//   }
//   getNeaxAge() {
//     return (this.nextAge = Number(this.age) + 5);
//   }
//   getGender() {
//     let check = confirm("Если ты мужчина нажми ок");
//     if (check === true) {
//       return (this.gender = "men");
//     } else {
//       return (this.gender = "women");
//     }
//   }
//   getPension() {
//     if (this.gender === "men" && this.age > 65) {
//       return (this.pension = "мужчина на пенсии");
//     } else if (this.gender === "women" && this.age > 55) {
//       return (this.pension = "Женщина на пенсии");
//     } else {
//       return (this.pension = "Человек не на пенсии");
//     }
//   }
// }

// const anketa = new Anketa();
// function alertAnketa() {
//   anketa.intName();
//   anketa.intLastName();
//   anketa.intSerName();
//   anketa.intAge();
//   anketa.getNeaxAge();
//   anketa.getGender();
//   anketa.getPension();
// }

// function getAlert() {
//   alertAnketa();
//   alert(`Ваше имя ${anketa.name}
// Ваша фамилия ${anketa.lastName}
// Ваше отчество ${anketa.serName}
// Ваш возраст ${anketa.age}
// Ваш возраст через 5 лет ${anketa.nextAge}
// Ваш пол ${anketa.gender}
// Вы на пенсии? ${anketa.pension}`);
// }

// document.querySelector("#anketa").addEventListener("click", getAlert);

// class Goods {
//   constructor(a, b, c, d) {
//     this.name = a;
//     this.amount = b;
//     this.image = c;
//     this.count = d;
//   }
//   draw() {
//     document.querySelector(
//       this.name
//     ).innerHTML = `<p class="${this.amount}"> ${this.image} ${this.count}</p>`;
//   }
// }
// const goods = new Goods("#test", "text", "Alena", "50 рублей");
// goods.draw();
// console.log(goods);

// class Usser {
//   constructor(userName, userPasword) {
//     this.user = userName;
//     this.pasword = userPasword;
//   }
//   validationPasword() {
//     if (this.pasword.length > 6) {
//       return true;
//     } else {
//       return false;
//     }
//   }
// }
// let a = "ivan";
// let b = "777";

// const person = new Usser(a, b);
// console.log(person);
// console.log(person.validationPasword());

// class Stydent extends Usser {
//   constructor(userName, userPasword, nickName) {
//     super(userName, userPasword);
//     this.pogonylo = nickName;
//   }
//   getKlikuha() {
//     this.pogonylo = prompt("Кто по жизни?");
//   }
// }
// const stydent = new Stydent();
// stydent.getKlikuha();
// console.log(stydent);

// class Button {
//   constructor(width, height, background, value) {
//     this.width = width + "px";
//     this.height = height + "px";
//     this.background = background;
//     this.value = value;
//   }
//   createButton() {
//     let btn = document.createElement("button");
//     btn.innerHTML = this.value;
//     btn.style.width = this.width;
//     btn.style.height = this.height;
//     btn.style.background = this.background;
//     document.body.append(btn);
//   }
// }

// const button = new Button(900, 200, "orange", "push My");
// button.createButton();
// console.log(button);
