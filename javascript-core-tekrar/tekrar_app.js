// console.log("slytherin")
// console.warn("hufflepuff")
// console.error("hufflepuff")

// const name = prompt("Write your name: ")
// console.log("Merhaba ", name,"!")

// document.write("Harry")
// document.write("<h1 style='color: brown;'>Harry</h1>")

// window.alert("Dikkat")

// console.log(typeof(0));
// console.log(typeof("harry"));
// console.log(typeof(3<2));
// console.log(typeof({}));
// console.log(typeof(harry));

// let num = 2.321654;
// let num2 = num.toFixed(2);
// console.log(num2)
// console.log(num.toFixed(2))

// myString = "Hogwarts School Of \"Magic\" and Gryffindor Is The 'Best'"
// console.log(myString)

// let name = "Harry";
// console.log(`Welcome to Hogwarts dear ${name} !`)

// console.log("%c Hello Harry", "color: red;")

// console.log(typeof (8+"8"))   // 88
// console.log(8=="8")           // true
// console.log(8==="8")          // false

// console.log(Boolean(0), Boolean(""), Boolean(null))
// console.log(Boolean("str"), Boolean(-5), Boolean("false"), Boolean("  "))

// console.log(typeof ("harry" + 60))

// let y = 10;
// x = y--;
// console.log(x)
// console.log(y)

// console.log(Boolean(NaN == NaN))   //FALSE
// console.log(Boolean(null == null))   //TRUE

// let name = "Harry";
// console.log({name})

// let topla = (a,b) => console.log(a + b);
// topla(10,20);

//  use strict, silmek, tekrarlamak vs yasak

// console.log(false<5)     true
// console.log(10<15<5)     true

// console.log(typeof("5" - 3))
// console.log(typeof("5" / 3))
// console.log(typeof("5" + 3))

// myString = "Hogwarts"
// console.log(myString.length)

// console.log(myString.includes("H"))

// if (5<9)   { console.log("true") };
// if (5<9)     console.log("true");
//     5<9  ?   console.log("true")  : console.log("false");

// if (5<4)   { console.log("true")} else if (5<4) {console.log("false")} else {console.log("else")}
//     5<4  ?   console.log("true")     :    (5<4 ? console.log("false") : console.log("else"))

// let name = prompt("Enter your name : ");

// if (name == "Harry") {console.log("Welcome Harry!")}  ;
// if (name == "Harry")  console.log("Welcome Harry!")   ;
//     name == "Harry" ? console.log("Welcome Harry!")    :  console.log("else") ;

// let name = prompt("Enter your name : ");

// if (name == "Harry") {console.log("Harry!")} else if (name == "Ron") {console.log("Ron!")} else {console.log("Hermoine!")};
//     name == "Harry" ? console.log("Harry!")        : (name == "Ron" ? console.log("Ron!")    :   console.log("Hermoine! ") )

// let name = prompt("Enter your name : ");
// if (name.toLowerCase() == "harry") {console.log("Welcome Harry!")}  ;

// let dayOfWeek = prompt("What day is it?").toLowerCase();
// switch (dayOfWeek) {
//     case "pazartesi": console.log("Oh shit... Here we go again..."); break;
//     case "salı":      console.log("Wait for 4 days man..."); break;
//     case "çarşamba":  console.log("We got 3 days left..."); break;
//     case "perşembe":  console.log("Just 2..."); break;
//     case "cuma":      console.log("OMG its the last..."); break;
//     default:          console.log("YESSS Its the party day..."); break;
// }

// let num1, num2, num3;

// let elma = 10;
// function eksilt(par) {
//     do { par -= 1; console.log(`Eksiltme yapıldı. Kalan elma ${par}`)} while (par > 0);
// }
// eksilt(elma);

// let house = "Hogwarts"
// for (let i = 0; i < house.length; i++) {
//     console.log(house[i]);
// }

// let house1 = "Hogxwarts"
// for (let i = 0; i < house1.length; i++) {
//     if (house1[i] == "x") {
//         continue;
//     } else {
//         console.log(house1[i]);
//     }
// }
// let house2 = "Hogxwarts"
// for (let i = 0; i < house2.length; i++) {
//     if (house2[i] == "x") {
//         break;
//     } else {
//         console.log(house2[i]);
//     }
// }

// FUNCTION

// let list = ["harry", "hermoine", "ron"];
// function ekle() {
//     list.push("draco")
//     console.log(list)
// }
// ekle(list)  ???????????????????

// function topla(a,b=10) {
//     return a+b;
// }
// console.log(topla(5))

// let boys = ["harry", "ron", "draco"];
// let friends = ["hermoine", ...boys];
// console.log(friends)

// function factorial(x) {
//     // if number is 0
//     if (x === 0) {
//         return 1;
//     }
//     // if number is positive
//     else {
//         return x * factorial(x - 1);
//     }
// }
// const num = 3;
// // calling factorial() if num is non-negative
// if (num > 0) {
//     let result = factorial(num);
//     console.log(`The factorial of ${num} is ${result}`);
// }

// function total(n) {
//     if (n === 1) {
//         return 1;
//     } else {
//         return n + total(n-1);
//     }
// }
// console.log(total(3))

// let newFunc = function total(n) {
//     if (n === 1) {
//         return 1;
//     } else {
//         return n + total(n-1);
//     }
// }(4)
// console.log(newFunc)

// (   function (n) {
//     let sum = 0
//     while (n>0) {
//         sum +=n;
//         n--
//     }
//     console.log(sum)
// })(4)

// const power = (n) => console.log(n**2);
// power(5)

// const hogwarts = {
//     good : "Harry",
//     beautiful : "Hermoine",
//     girl(){
//         return this.beautiful
//     }
// }
// console.log(hogwarts.girl())

//---------------------------STRING METHODS---------------------------

//--------LENGTH
// let boys = ["harry", "ron", "draco"];
// console.log(boys.length)

//--------CONCAT
// let personal = "Harry Potter.";
// let friend = "Best friend is Hermione";
// let complete = personal.concat(friend);
// console.log(personal, friend)
// console.log(complete)

//--------CHARAT
// let personal = "Harry Potter.";
// console.log(personal.charAt(0));

//--------INCLUDES
// let personal = "Harry Potter.";
// console.log(personal.includes("rr"));

//--------INDEXOF
// let personal = "Harry Potter and my best friend is Hermione";
// console.log(personal.indexOf("rr"));

//--------LASTINDEXOF
// let personal = "Harry Potter and my best friend is Hermione";
// console.log(personal.lastIndexOf("o"));

//--------SEARCH
// let personal = "Harry Potter and my best friend is Hermione";
// console.log(personal.search("o"));

//--------REPLACE
// let personal = "Harry Potter and my best friend is Hermione";
// let newPersonal = personal.replace("Hermione", "Ron");
// console.log(newPersonal)

//--------SLICE
// let personal = "Harry Potter and my best friend is Hermione";
// let sliced = personal.slice(0,12);
// console.log(sliced)

//--------SLICE
// let personal = "Harry Potter and my best friend is Hermione";
// let sliced = personal.split(" ");
// console.log(sliced)

//--------SUBSTR
// let personal = "Harry Potter and my best friend is Hermione";
// let sliced = personal.substr(13,4);
// console.log(sliced)

// //--------SUBSTRING   slice - index kullanılmaz
// let personal = "Harry Potter and my best friend is Hermione";
// let sliced = personal.substring(0,12);
// console.log(sliced)

// console.log("HarRY pOtTer".toLowerCase())

// console.log("HarRY pOtTer".toUpperCase())

// console.log("İngilizce".toLocaleUpperCase())

// let personal = "      \tHarry Potter and my best friend is Hermione     ";
// console.log(personal);
// console.log(personal.trim())
// console.log(personal.trimEnd())

//________________________ARRAYS____________________________

// let list = ["harry", "hermoine", "ron", "draco"];
// let list2 = list[3];
// console.log(list2)
// let list3 = new Array(3,10);
// console.log(list3)

// let list = ["harry", "hermoine", "ron", "draco"];
// console.log(list[0][3])
// list[3] = "malfoy";
// console.log(list)

// let list = ["harry", "hermoine", "ron", "draco"];
// let family = ["muhammed", "abdullah", "nuriye"];
// let hogwarts = list.concat(family);
// console.log(hogwarts)

// SORT
// let hogwarts = ['harry', 'hermoine', 'ron', 'draco', 'muhammed', 'abdullah', 'nuriye']
// console.log(hogwarts.sort())
// //PUSH sona ekle
// hogwarts.push("ceren");
// console.log(hogwarts);
// //POP sondan sil
// hogwarts.pop();
// console.log(hogwarts);
// //SHIFT baştan sil
// hogwarts.shift();
// console.log(hogwarts);
// //UNSHIFT yani push
// hogwarts.unshift("harry");
// console.log(hogwarts);
// //SPLICE başlangıç sayı, eklenenler ----- veya silmeden araya ekleme
// let deleted = hogwarts.splice(4,2,"eklenen");
// console.log(deleted)   //silinenler
// console.log(hogwarts)
// hogwarts.splice(4,0,"yeniden")
// console.log(hogwarts);
// //SLICE
// let sliced = hogwarts.slice(1,3);
// console.log(hogwarts)
// console.log(sliced);
// //INDEXOF
// console.log(hogwarts.indexOf("harry",1));
// //LASTINDEXOF
// console.log(hogwarts.lastIndexOf("harry",1));

// let hogwarts = ["harry", "hermoine", "ron", "draco"];

// for (let i = 0; i < hogwarts.length; i++) {
//     console.log("hello",hogwarts[i]);
// }

// for (const i of hogwarts) {
//     console.log("hello",i);
// }

// hogwarts.forEach(i => {
//     console.log("hello",i);
// });

// for (const i in hogwarts) {
//         console.log("hello",hogwarts[i]);
// }
