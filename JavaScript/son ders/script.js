// // WHILE Loops
// let i = 0;
// let sum = 0;

// while (i < 6) {
//   sum = sum + i;
//   console.log(i);
//   i++;
// }
// console.log(`Total is: ${sum}`);

// //DO WHILE LOOP
// let i = 6, sum = 0;
// do {
//     sum += i;
//     i++
// } while (i < 5);
// console.log(sum);

// let counter = 0;
// for (let i = 1; i <= 50; i = i+10) {
//   // console.log('i', i);
//     counter += i;
// }
// console.log(counter);

// let counter = 0;
// for (let i = 0; i <= 50; i++) {
//   // console.log('i', i);
//   i % 10 === 0 ? (counter += i) : null;
// }
// console.log(counter);

// let brand = "Hogwarts"
// let brand1 = ""
// for (let i = 0; i < 9; brand1 += brand[i], i++) {
//     console.log(i+1, brand1);
// }

// let bests = ["Fenerbahçe", "Real Madrid", "Chelsea", "Man. City"];
// for(let i = 0 ; i < bests.length; i++) {
//     document.write("<h1>", i + 1, " : ", bests[i], "</h1>");
// }

// let i = 0;
// while (i < 10) {
//     if (i === 15) {break};
//     console.log(i);
//     i+=3;
// }

// let name1 = 'Hogwarts';
// name2 = '';
// for (let i = 0; i < name1.length; i++) {
//   console.log(name1[name1.length - (i + 1)]);
//   name2 = name2 + name1[name1.length - (i + 1)];
// }
// console.log(name2);
// document.write(name2);

// for (let j = 0; j < 11; j++) {
//   for (let i = 0; i < 11; i++) {
//     console.log(`${j} * ${i} = ${j * i}`);
//   }
// }

// const number = [13, 34, 24, 67, 23, 90];
// let total = 0;
// for (let i = 0; i < number.length; i++) {
//     total = total + number[i];
// }
// console.log(total);

// for (let i = 0; i < 101; i++) {
//   if      (i % 15 === 0)  console.log(`${i} fizz buzz`);
//   else if (i % 3 === 0)   console.log(`${i} fizz`);
//   else if (i % 5 === 0)   console.log(`${i} buzz`);
//   else console.log(i);
// }

// function hello() {
//     console.log("hello world");
// }
// hello()

// function sum(a,b) {
//     return(a+b);
// }
// sum(5,16);
// let toplam = sum(5,16);
// console.log("result: ", toplam);

// fonkisyonda numberi sayıya çevirmek için başına + koy +num+2

// function selam (name = "New User") {}
// Harry default name olmuş oldu

// function sayHi(myName) {
//     console.log(`Hello ${myName}`);
//     myName = "Harry"
//     console.log(`Hello ${myName}`);
// }
// let myName = "Jason"
// sayHi(myName)
// console.log(`Hello ${myName}`);
// Dışardaki let, üstteki ilk clgye atar, ,çerdeki atama dışarı çıkamaz

// let student = {};
// student.name = "Harry";

// function sayHi(student) {
//     console.log(`Hello ${student.name} entry point`);
//     student.name = "Jason"; // dışarıya geçti
//     console.log(`Hello ${student.name} first point`);
//     student = {name : "Hermoine"}; // dışarıya geçmez ???????????????????????????????
//     console.log(`Hello ${student.name} inside func`);
// }
// sayHi(student);
// console.log(`Hello ${student.name} outside func`);
// // içerdeki değişiklik dışarıyı etkiler

// function div(num1, num2) {
//   if (num2 === 0) return ('Zero Division Error');
//   return (num1 / num2);
// }
// // console.log(div(10, 0));

// function div(num1, num2){
//     return num2 ? num1/num2 : 'Zero Division Error'
// }
// console.log(div(10,5));

// function sum(...args) {
//   let total = 0;
//   let i = 0;
//   for (i ; i < arguments.length; i++) {
//     total += arguments[i];
//   }
//   return total;
// }
// console.log(sum(1, 2, 3, 4, 5, 6, 100));

// function sum(a,b,c,...args){
//     console.log(args); // args array
//     console.log(arguments); // arguments object
//     return a+b
// }
// console.log(sum(1, 2, 3, 4, 5, 6, 100));

// FONKSİYONU DEĞİŞKENE ATA RAMDAN KURTAR ÇAĞIR KULLAN
// function sayHi1() {
//   return 'Hello From sayHi1';
// }
// console.log(sayHi1());

const sayHi2 = function greet() {
  return 'Hello From sayHi2';
}
console.log(sayHi2()); //tanımdan sonra kullanılabilir
console.log(greet); //çalışmaz çünkü atadık
