// console.time("answer time");

// console.timeLog("answer time");

// setTimeout(()=> {console.timeEnd("answer time");}, 5000)

// console.timeLog("answer time");
// // answer time: 0.003662109375 ms
// // async.js:7 answer time: 0.158935546875 ms
// // async.js:5 answer time: 5014.997802734375 ms

//---------------------------------------------------------------------------------------------------

// function showTime(){
//     const par = document.getElementById("par");
//     const time = new Date();
//     par.innerHTML = time.toLocaleTimeString();
// }
// // showTime(); //bir kez
// setInterval(showTime,2000); //belirtilen sürede bir tekrarla

//---------------------------------------------------------------------------------------------------

// let numInside = parseInt(prompt("Geri sayım için kaç saniye istersin?"));
// function showNum(){
// if (numInside == 3) {
//     clearInterval(id);
//     const num = document.getElementById("num");
//     num.innerHTML = "Bitti";
// } else {
//     const num = document.getElementById("num");
//     num.innerHTML = numInside;
//     numInside--
// }};
// // setInterval(showNum,500)
// const id = setInterval(showNum, 250);

//---------------------------------------------------------------------------------------------------

// const todos = [
//   { title: "iş bulunacak", aim: "3 ay içinde" },
//   { title: "evlenilecek", aim: "2 yıl içinde" },
//   { title: "saygınlık :)", aim: "1 yıl içinde" },
// ];

// let todoListEl = document.querySelector("#todo");

// function todoList() {
//     setTimeout(() => {
//     let todoItem = "";
//     todos.forEach((item) => {
//         todoItem += `
//                  <li>
//                      <b>${item.title}</b>
//                      <p>${item.aim}</p>
//                  </li>  `
//     });
//     todoListEl.innerHTML = todoItem;}, 1500)
// };
// todoList();

// // function newTodo(todo) {
// //     setTimeout(()=> {
// //         todos.push(todo)
// //     }, 2000)
// // }
// // newTodo({ title: "faydalı ol", aim: "Hemen" });
// // todoList();
// // Aşağısı daha iyi--------------------------------
// function newTodo(todo, callback) {
//     setTimeout(()=> {
//         todos.push(todo);
//         callback();
//     }, 2000)
// }
// newTodo({ title: "faydalı ol", aim: "Hemen" }, todoList);

//---------------------------------------------------------------------------------------------------

// let todoListEl = document.querySelector("#todo");

// function todoList() {
//     let todoItem = ""
//   todos.forEach((item) => {
//     todoItem += `
//         <li>
//             <b>${item.title}</b>
//             <p>${item.aim}</p>
//         </li>  `
//   });
//   todoListEl.innerHTML = todoItem;
// }

// function newTodo(todo) {
//     setTimeout(() => {todos.push(todo);}, 1000)
// }

// newTodo({ title: "faydalı ol", aim: "Hemen" });

// todoList();

// todoList()

// ______________P R O M I S E________________

// const myPromise = new Promise((resolve, reject) => {
//   console.log("myPromise started");
//   let condition = true;
//   if (condition) {
//     resolve("işlem tamam");
//   }
//   reject(Error("Gerçekleşmedi.."));
// });

// console.log("merhaba");

// myPromise
//   .then((msg) => {
//     console.log(msg);
//   })
//   .catch((msg) => {
//     console.log("catch");
//   })
//   .finally((msg)=> {
//       console.log("finally")
//   }
//   )

// console.log("merhaba");

// const todos = [
//   { title: "iş bulunacak", aim: "3 ay içinde" },
//   { title: "evlenilecek", aim: "2 yıl içinde" },
//   { title: "saygınlık :)", aim: "1 yıl içinde" },
// ];

// let todoListEl = document.querySelector("#todo");

// function todoList() {
//   setTimeout(() => {
//     let todoItem = "";
//     todos.forEach((item) => {
//       todoItem += `
//                    <li>
//                        <b>${item.title}</b>
//                        <p>${item.aim}</p>
//                    </li>  `;
//     });
//     todoListEl.innerHTML = todoItem;
//   }, 1500);
// }
// todoList();

// function newTodo(todo) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       todos.push(todo);
//       const e = false;
//       if (!e) {
//         resolve();
//       } else {
//         reject("Hata var...");
//       }
//     }, 2000);
//   });
// }
// newTodo({ title: "faydalı ol", aim: "Hemen" })
//   .then(response => todoList())
//   .catch((e) => console.log(e));

//------------------------------------------------------------------------------------------

// // let limit = parseInt(prompt("Saniye yazınız"));
// const countEl = document.querySelector("#num");

// function countSeconds(limit) {
//   let startNum = 0;
//   setInterval(() => {
//     if (startNum == limit) {
//       countEl.innerHTML = "finished";
//     } else {
//     countEl.innerHTML = `${startNum} saniye geçti...`;
//     startNum++;
//   }}, 1000);
// }
// countSeconds(3);

const countEl = document.querySelector("#num");
// let limit = parseInt(prompt("Saniye yazınız"));

let startNum = 0;
function countSeconds(limit) {
    if (startNum > limit) {
      countEl.innerHTML = "finished";
    } else {
      if (startNum !== 0) {
        countEl.innerHTML = `${startNum} saniye geçti...`;
      }
      startNum++;
      setTimeout(countSeconds, 1000, limit);
    };
  };
countSeconds(3);
