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

// const cars = ["Audi", "Ferrari", "Lamborghini"];
// console.log(cars);
// cars[6] = "Porsche"      // aradaki sayılar boşluk olarak kalır.
// console.log(cars);
// //ARAAYLARDA CONST İLE TANIMLANAN NESNE ÜZERİNDE METODLARLA DEĞİŞİKLİK YAPILABİLİR
// //AMA TANIMLAYICI DEĞERDE DEİŞİKLİK YAPILAMAZ

// const name = ['Muhammed', "Harry"]; //değişir
// name.push("ali")
// console.log(name);

// const name1 = 'Muhammed'   ///değişmez
// name.push("ali")
// console.log(name1);

// //SPLİCE (başlangıç, silinecek sayısı, eklenecek ögeler)
// var cars = ["Audi", "Ferrari", "Lamborghini"];
// var deleted = cars.splice(1,0,"Porsche", "Bugatti");
// console.log(cars);  //sonucu verir
// console.log(deleted); //sadece silinenleri verir

// //SLİCE (başlangıç, bitiş dahil değil)
// const cars = ["Audi", "Ferrari", "Lamborghini", "Bugatti", "Porsche"];
// const newcars = cars.slice(2,3);   // ikinci rakam dahil değil
// console.log(cars);      //orjinali değişmez
// console.log(newcars);
// console.log(cars.slice(1,5));
// console.log(cars.slice(1,-1));
// console.log(cars.slice(-4,-1));

// console.log(cars.reverse());    //REVERSE TERS DİZER VE DEĞİŞTİRİR
// console.log(cars);

// //İNDEXOF   LASTINDEXOF  (varsa konumu, yoksa -1 verir)
// var cars = ["Audi", "Ferrari", "Lamborghini", "Bugatti", "Porsche"];
// var x = cars.indexOf("Porsche", 3);
// console.log(x);

// var cars = ['Audi', 'Ferrari', 'Porsche', 'Lamborghini', 'Bugatti', 'Porsche'];
// var last = cars.lastIndexOf('Porsche');
// var first = cars.indexOf('Porsche');
// console.log(first); //2  baştan tarar
// console.log(last); //5   sondan geriye tarar


// function test1(data){
//     console.log(`inside func before ops ${data}`);   // 5
//     data = 10
//     console.log(`inside func after ops ${data}`);     // 10
// }
// const data = 5;   //primitivelerde de arrayda da içeriye atanır, içerde değişir, dışarda eskiye döner
// test1(data);
// console.log(`outsde func after ops ${data}`);     // 5


// function test1(data){
//     console.log(`inside func before ops ${data}`);    //3,7,8,9
//     data.push(13)     //PUSH İLE ATARSAK DIŞARIYA DA ÇIKAR
//     console.log(`inside func after ops ${data}`);    //3,7,8,9,13
// }
// const data = [3,7,8,9];
// test1(data);
// console.log(`outsde func after ops ${data}`);   //3,7,8,9,13


// function test1(data){
//     console.log(`inside func before ops ${data}`);    //3,7,8,9
//     data.pop()     //pop İLE ATARSAK DIŞARIYA DA ÇIKAR
//     console.log(`inside func after ops ${data}`);    //3,7,8
// }
// const data = [3,7,8,9];
// test1(data);
// console.log(`outsde func after ops ${data}`);   //3,7,8

//REFERANS TİPİNDE STACK DEĞİL HWAPTA TUTAR


const arr = [1,2,3,4,5,6,7,8];
const a = arr[0];
const b = arr[1];
const c = arr[2];
console.log(a,b,c);
const[x,y,z] = arr;   //üç satır yerine tek satırda atandı
console.log(x,y,z);