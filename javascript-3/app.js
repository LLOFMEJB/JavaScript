// let a = 10;
// {
//     let b = 20;
//     console.log(a, b)
//     let a = 30;
//     console.log n(a,b)
// }

// console.log(a)

// var a;

// while (isNaN(a)) {
//     a = prompt("Enter number...")
//     a = Number(a);
//     console.log(a, typeof a);
// }

// window.alert("hello")

// function deneme() {
//     const num = 10
// }
// deneme()
// console.log(num)

// var num = 10;

// function deneme() {
//     var num = 20
//     console.log(num)
// }
// deneme()
// console.log(num)

// if (true) {
//     let num = 10;
// };
// console.log(num)

// {
//     var num = 20;
// }
// console.log(num)

// let num2 = 30;

// function deneme() {
//     console.log("içerde", num2)

// };

// deneme();

// console.log("dışarda", num2)

// console.log(num1);
// var num1 = 10;
// console.log(num2);
// let num2 = 10;
// console.log(num3);
// const num3 = 10;

// console.log("%c Hello!", "color:pink; background: white")

// console.log("selam"+5)

// const num = 10;
// {
//     console.log(num)
// }

// let num = "hi";
// console.log(isNaN(num))

// var a;

// while (isNaN(a)) {
//     a = prompt("enter a number")
//     a = Number(a)
//     console.log(a, typeof a)
// }

// let password = "Jbme";
// console.log(password.length)
// console.log(password.includes("J"))

// let num = null ?? 10
// console.log(num)

// let score = 49;
// if (score >= 50) {
//     console.log("Congrats")
// };

// if (!true) score++;
// console.log(score)

// let laps = prompt("Hoe many laps did you ride?")

// if (laps > 60) {
//     console.log("Well done!")
// } else if (laps > 40) {
//     console.log("Not bad!")
// } else {
//     console.log("Try harder!")
// }



// let day = prompt("Write the day:")
// day = day.toLowerCase()

// switch (day) {
//   case "pazartesi":
//   case "çarşamba":
//   case "perşembe":
//   case "cumartesi":
//     console.log("inclass day");
//     break;
//   case "salı":
//   case "cuma":
//     console.log("team work day");
//     break;
//   default:
//       console.log("free day")
//     break;
// }



// let i = 0;
// let sum = 0;
// while (i<6) {
//   sum = sum + i;
//   console.log(i)
//   i++;
// }
// console.log(`Total is ${sum}`)


// let i = 5, sum = 0;
// do {
//   sum += i;
// } while (i<5);
// console.log(sum);


// for (let i = 0, sum = 0; i < 8; i++, sum += i) {
//   document.write("i", i);
//   console.log("i", i);
//   console.log("sum", sum)
// }


let brand = "Hogwarts"
for (let i = 0, j = brand.length - 1; i < brand.length; i++, j--) {
  console.log(i+1, brand[i], j+1, brand[j - 1] ,brand.length - i, brand[brand.length - i - 1])
}