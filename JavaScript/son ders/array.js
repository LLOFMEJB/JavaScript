// const cars = ["Audi", "Ferrari", "Lamborghini", "Porsche"]
// console.log(typeof cars);
// console.log(cars);

// const numbers = new Array(2,10)
// console.log(numbers);

// const numbers2 = new Array(10)
// console.log(numbers2);

// const cars = ["Audi", "Ferrari", "Lamborghini", "Porsche"]
// var bestcar = cars[1]
// console.log(cars);
// console.log(bestcar);
// console.log("The best car is obviously " + bestcar);

// const cars = ["Audi", "Ferrari", "Lamborghini", "Porsche"]
// cars[0] = "Mercedes"
// console.log("The cars are  " + cars);
// console.log(cars.length);

// // CONCAT METHOD
// const cars = ["Audi", "Ferrari", "Lamborghini"]
// const cars2 = ["BMW", "Porsche"]
// console.log(cars.concat(cars2, "Honda", 2022)); // + ile yaparsan string olur sonuç

// const cars = ["Audi", "Ferrari", "Lamborghini", "Porsche"]
// console.log(cars.sort());

// const points = [40, 100, 1, 5, 25, 10];
// console.log(points.sort());
// console.log(points.sort(function(a,b){return a-b})); // neye göre sıralayacağını anlattık

// // PUSH -(append) AND POP
// const cars = ["Audi", "Ferrari", "Lamborghini"]
// cars.push("Bugatti");   // en sona ekler
// console.log(cars);
// cars.pop();         // hep son öğeyi siler
// console.log(cars);

//SHİFT VE USHİFT
// const cars = ["Audi", "Ferrari", "Lamborghini"]
// const shiftedcar = cars.shift();    // ilk elemanı siler ve seçip gösterir
// console.log(shiftedcar);
// console.log(cars);

// const added = cars.unshift('VW');
// console.log(added);   //added sayı verir sadece
// console.log(cars);


const cars = ["Audi", "Ferrari", "Lamborghini"];
console.log(cars);
cars[6] = "Porsche"      // aradaki sayılar boşluk olarak kalır.
console.log(cars);
//CONST İLE TANIMLANAN NESNE ÜZERİNDE DEĞİŞİKLİK YAPILABİLİR
//AMA TANIMLAYICI DEĞERDE DEİŞİKLİK YAPILAMAZ