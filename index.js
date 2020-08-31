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
  // getBtn(nameId) {
  //   return document.querySelector(nameId);
  // }
  // setInfo() {
  //   let qstionDrinck = prompt("Введи название напитка");
  //   let qstionComposition = prompt("Введи состав напитка");
  //   this.addValue(qstionDrinck, qstionComposition);
  // }
  // init() {
  //   this.getBtn("#intInfoDrinck").addEventListener("click", this.setInfo);
  // }
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
