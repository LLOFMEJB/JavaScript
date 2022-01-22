array1 = [100, 300, -200, 500, -400, 225, 1000, -700];
total = 0;
arrDeposits = [];
arrWithdraws = [];
array1.map((el) =>
  el > 0
    ? ((total += el),
      arrDeposits.push(el),
      console.log(`You paid ${el} dollars`))
    : ((total += el),
      arrWithdraws.push(el),
      console.log(`You received ${el} dollars`))
);

// function movement(array, callback) {
//   let total = 0;
//   let arrDeposits = [];
//   let arrWithdraws = [];
//   array.forEach((el) =>
//     el > 0
//       ? (total += el, arrDeposits.push(el), callback(`You paid ${el} dollars`))
//       : (total += el, arrWithdraws.push(el), callback(`You received ${el} dollars`))
//   );
//   // for (let i = 0; i < array.length; i++) {
//   //     total += array[i];
//   //     if (array[i]>0) {
//   //         arrDeposits.push(array[i]);
//   //         callback(`You deposited ${array[i]} dollars`);
//   //     } else {
//   //         arrWithdraws.push(array[i]);
//   //         callback(`You withdrew ${array[i]} dollars`);

//   //     };
//   // };
//   callback(`Total amount is ${total} usd`);
//   callback(`arrDeposit ===> ${arrDeposits}`);
//   callback(`arrWithdraws ===> ${arrWithdraws}`);
// }
// movement([100, 300, -200, 500, -400, 225, 1000, -700], (val) => {
//   console.log(val);
// });
console.log(
  "--------------------------------------------------------------------------------"
);

const string = "Osman Seher Muhammed Abdullah Nuriye";
let newStr = string
  .split(" ")
  .map((el) => el[0])
  .join("");
console.log(newStr);
// function firstLetter(string) {
//   let stringArr = string.split(" ");
//   console.log(stringArr);
//   let firstLetterStr = "";
//   for (let i = 0; i < stringArr.length; i++) {
//     firstLetterStr = firstLetterStr.concat(stringArr[i][0]);
//   }
//   console.log(`The string of first letters ===> ${firstLetterStr}`);
// }
// firstLetter("Osman Seher Muhammed Abdullah Nuriye");
console.log(
  "--------------------------------------------------------------------------------"
);

const string2 = "The Quick Brown Fox";
let newStr2 = string2
  .split("")
  .map((el) => (el == el.toUpperCase() ? el.toLowerCase() : el.toUpperCase()))
  .join("");
console.log(newStr2);

// function change(string) {
//   let stringArr = string.split("");
//   console.log(stringArr);
//   let changed = "";
//   for (let i = 0; i < stringArr.length; i++) {
//     if (stringArr[i] == stringArr[i].toUpperCase()) {
//       changed = changed.concat(stringArr[i].toLowerCase());
//     } else {
//       changed = changed.concat(stringArr[i].toUpperCase());
//     }
//   }
//   console.log(`Changed version ===> ${changed}`);
// }
// change("The Quick Brown Fox");
console.log(
  "--------------------------------------------------------------------------------"
);

array2 = [
  "spray",
  "limit",
  "elite",
  "exuberant",
  "destruction",
  "present",
  "Gryiffindor",
  "Future",
];
let filteredArr = array2.filter((el) => el.length > 6);
console.log(filteredArr);

// function filter(array) {
//   let filtered = [];
//   for (let i = 0; i < array.length; i++) {
//     if (array[i].length > 6) {
//       filtered.push(array[i]);
//       console.log(typeof filtered);
//     }
//   }
//   console.log(`Filtered version ===> ${filtered}`);
// }
// filter([
//   "spray",
//   "limit",
//   "elite",
//   "exuberant",
//   "destruction",
//   "present",
//   "Gryiffindor",
//   "Future",
// ]);

console.log(
  "--------------------------------------------------------------------------------"
);

const array4 = [1, 2, 3, 4];
const reducer = (sum, num) => sum + num;
console.log(array4.reduce(reducer));
console.log(array4.reduce(reducer, 5));

console.log(
  "--------------------------------------------------------------------------------"
);
const array5 = [1, 2, 3, 4];
const show = (sum, num) => sum + num;
console.log(array5.reduce(show));
console.log(array5.reduce(show, 5));

console.log(
  "--------------------------------------------------------------------------------"
);

let bigArray = [];
for (let i = 0; i < 10; i++) {
  bigArray[i] = i;
}

let reducedBigArray = bigArray.reduce((acc, val) => {
  if (val % 2 === 0) {
    acc.push(val * 2);
  }
  return acc;
}, []);
console.log(reducedBigArray);

let mappedBigArray = bigArray
  .filter(function (val) {
    return val % 2 === 0;
  })
  .map(function (val) {
    return val * 2;
  });
console.log(mappedBigArray);

console.log(
  "--------------------------------------------------------------------------------"
);

const chart = [
  { item: "cips", price: 6 },
  { item: "monster", price: 8 },
  { item: "fıstık", price: 11 },
  { item: "toblerone", price: 17 },
];

//------  ÇÖZÜM 1 -------------
let sum1 = 0;
for (const el of chart) {
  sum1 += el.price;
}
console.log(sum1);

//------  ÇÖZÜM 2 -------------
let sum2 = 0;
chart.forEach((el) => sum2 += el.price)
console.log(sum2);

//------  ÇÖZÜM 3 -------------
let sum3 = 0;
for (let i = 0; i < chart.length; i++) {
  sum3 += chart[i].price;
}
console.log(sum3);

//------  ÇÖZÜM 4 -------------
sum4 = chart.reduce(((acc, item) => acc + item.price ), 0)
console.log(sum4);
//------  ÇÖZÜM 5 ------------- VERGİ DİLİMİNE GÖRE, FİYATA GÖRE VS İF'Lİ SİSTEM
sum5 = chart.reduce(((acc, item) => item.price < 10 ? acc + item.price * 2 : acc + item.price ), 0)
console.log(sum5);

//------  ÇÖZÜM 6 -------------
let sum6 = 0;
for (const el of chart) {
  sum6 += el.price;
}
console.log(sum6);

const parent = {
  firstName :  "James",
  lastName : "Potter",
  profession : "wizard"
};

function Baby() {
  this.firstName = "unnamed";
  this.weight = 3.4;
}

Baby.prototype = parent;

let harry = new Baby;
harry.firstName = "Harry";

for (const prop in harry) {
  if (Object.hasOwnProperty.call(harry, prop)) {
    const element = harry[prop];
    console.log(prop, "==>", element)
  }
}

console.log(harry)
console.log(Baby)
console.log(parent)

const chart = [
  { item: "Yoğurtlu cips", brand: "Lays" },
  { item: "Klasik cips", brand: "Lays" },
  { item: "Enerji içeceği", brand: "Monster" },
  { item: "Fıstık", brand: "Tadım" },
  { item: "Kaju", brand: "Tadım" },
  { item: "Çikolata bar", brand: "Toblerone" },
];

let brandObj = chart.reduce((acc, obj) => {
  if (!acc[obj.brand]) {
    acc[obj.brand] = [];
  }
  acc[obj.brand].push(obj);
  return acc;
}, {});
console.log(brandObj)

const characters = [
  { name: 'Jean-Luc Picard', age: 59 },
  { name: 'Will Riker', age: 29 },
  { name: 'Deanna Troi', age: 29 },
  { name: 'Mustafa', age: 40 },
  { name: 'Hasan', age: 40 }
];
const reducer = (acc, val) => {
  if (acc[val] == null) {
    acc[val] = 1;
  } else {
    ++acc[val];
  }
  return acc;
};
console.log(characters.map(char => char.age).reduce(reducer, {}));
