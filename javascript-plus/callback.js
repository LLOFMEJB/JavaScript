function movement(array, callback) {
  let total = 0;
  let arrDeposits = [];
  let arrWithdraws = [];
  array.forEach((el) =>
    el > 0
      ? (total += el, arrDeposits.push(el), callback(`You paid ${el} dollars`))
      : (total += el, arrWithdraws.push(el), callback(`You received ${el} dollars`))
  );
  // for (let i = 0; i < array.length; i++) {
  //     total += array[i];
  //     if (array[i]>0) {
  //         arrDeposits.push(array[i]);
  //         callback(`You deposited ${array[i]} dollars`);
  //     } else {
  //         arrWithdraws.push(array[i]);
  //         callback(`You withdrew ${array[i]} dollars`);

  //     };
  // };
  callback(`Total amount is ${total} usd`);
  callback(`arrDeposit ===> ${arrDeposits}`);
  callback(`arrWithdraws ===> ${arrWithdraws}`);
}
movement([100, 300, -200, 500, -400, 225, 1000, -700], (val) => {
  console.log(val);
});
console.log(
  "--------------------------------------------------------------------------------"
);

const string = "Osman Seher Muhammed Abdullah Nuriye";
let newStr = string.split(" ").map((el) => el[0]).join("");
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
let newStr2 = string2.split("").map((el) => el == el.toUpperCase ? el.toLowercase : el.toUpperCase).join("");
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

function filter(array) {
  let filtered = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i].length > 6) {
      filtered.push(array[i]);
      console.log(typeof filtered);
    }
  }
  console.log(`Filtered version ===> ${filtered}`);
}
filter([
  "spray",
  "limit",
  "elite",
  "exuberant",
  "destruction",
  "present",
  "Gryiffindor",
  "Future",
]);

console.log(
  "--------------------------------------------------------------------------------"
);
