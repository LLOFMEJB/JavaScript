// var a = "5";
// var b = 3;

// console.log(a+b);
// console.log(a-b);

// let x = 2 && 3;
// console.log(x);

// let y = 5 || 6
// console.log(!y);

// let password = 'password@'
// console.log(password.length >= 2 && password.includes("@") && password.length <8);

// let score = prompt("What is your exam note?") ;
// // KLASİK YÖNTEM
// if (score >= 50) {console.log("Congrats!");} else {console.log("Work Harder!");}
// // TERNARY YÖNTEM MODERN
//     score >= 50 ? console.log("Congrats!")    :    console.log("Work Harder!");


// let userName = null;
//     userName ? console.log(`Hello ${userName}`): console.log(`Please login!`);


// let score = prompt("What is your exam note?") ;
// // KLASİK YÖNTEM
// if (score >= 80) {console.log("Congrats!")} else if (score >= 50) {console.log("Not Bad!")} else {console.log("Work Harder!")}
// // TERNARY YÖNTEM MODERN
//     score >= 80 ? console.log("Congrats!") :         (score >= 50 ? console.log("Not Bad!") :       console.log("Work Harder!"))

// var text;
// var fruits = "GReen apple ";
// fruits = fruits.toLowerCase();

// switch (fruits){
//     case "banana":
//         text = "Banana is not bad!"
//         break;
//     case "orange":
//         text = "Orange is good but juicy!"
//         break;
//     case "green apple":
//     case "apple":
//         text = "Apple is amazing!"
//         break;
//     default:
//         text = "I've never heard that!"
// }
// console.log(text);

var plan;
var day = prompt("Gün belirtiniz: ");
var day = day.toLowerCase();
switch (day){
    case "pazartesi":
    case "çarşamba":
    case "perşembe":
    case "cumartesi":
        plan = "in class";
        break;
    case "salı":
    case "cuma":
        plan = "workshop";
        break;
    default:
        plan = "free time";
}
console.log(plan);