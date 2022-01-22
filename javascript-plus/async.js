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

// new Promise((resolve, reject) => {
//   const isSuccessful = true;
//   if (isSuccessful) {
//     resolve("completed")
//   }
//   reject("failed")
// }).then((result)=> {console.log(result);}).catch((result)=> {console.log(result);})

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

// const countEl = document.querySelector("#num");
// // let limit = parseInt(prompt("Saniye yazınız"));

// let startNum = 0;
// function countSeconds(limit) {
//     if (startNum > limit) {
//       countEl.innerHTML = "finished";
//     } else {
//       if (startNum !== 0) {
//         countEl.innerHTML = `${startNum} saniye geçti...`;
//       }
//       startNum++;
//       setTimeout(countSeconds, 1000, limit);
//     };
//   };
// countSeconds(3);

//------------------------------------------------------------------------------------------

// let neighbors = [];
// let country = "";
// const countriesSection = document.querySelector(".countries");

// const renderCountry = (data, className = "") => {
//   const html = `
//   <div class="country ${className}">
//     <img class="country__img" src="${data.flag}" />
//     <div class="country__data">
//       <h3 class="country__name">${data.name}</h3>
//       <h4 class="country__region">${data.region}</h4>
//       <p class="country__row"><span><i class="fas fa-lg fa-landmark"></i></span>${
//         data.capital
//       }</p>
//       <p class="country__row"><span><i class="fas fa-lg fa-users"></i></span>${(
//         +data.population / 1_000_000
//       ).toFixed(1)}M People</p>
//       <p class="country__row"><span><i class="fas fa-lg fa-comments"></i></span>${
//         data.languages[0].name
//       }</p>
//       <p class="country__row"><span><i class="fas fa-lg fa-money-bill-wave"></i></span>${
//         data.currencies[0].name
//       }</p>
//     </div>
//   </div>`;
//   countriesSection.innerHTML += html;
//   //   // / ${data.nativeName}
//   countriesSection.style.opacity = 0.7;
// };

// const getCountryData = (countryName) => {
//   console.log(countryName);
//   fetch(`https://restcountries.com/v2/name/${countryName}`)
//   .then((response) => {
//     console.log(response);
//     if (!response.ok) throw new Error("something went wrong!");
//     return response.json();
//   })
//   .then((countryData) => {
//     console.log(countryData[0]);
//     renderCountry(countryData[0]);
//     neighbors.push(countryData[0].borders);
//     return countryData[0].borders;
//   })
//   .catch((error) => console.log(error.message));
// };
// const getNeighbor = (neighbors) => {
//   console.log(neighbors);
//   neighbors.forEach((el) => {
//     fetch(`https://restcountries.com/v2/alpha/${el}`)
//     .then((response) => {
//       if (!response.ok) throw new Error("something went wrong!");
//       return response.json();
//     })
//     .then((countryData) => {
//       console.log(countryData);
//       renderCountry(countryData);
//     })
//     .catch((error) => console.log(error.message));  });
// };

// const countryInp = document.getElementById("input");
// countryInp.addEventListener("keyup",  ()=>{countriesSection.innerHTML = ""; neighbors = []; country = "";});
// setTimeout(()=>{console.log(country);},5000)
// const countryBtn = document.getElementById("country");
// countryBtn.addEventListener("click",  ()=>{country = document.getElementById("input").value; getCountryData(country)});

// let neighborBtn = document.getElementById("neighbor");
// neighborBtn.addEventListener("click", ()=> {getNeighbor(neighbors[0])});
//------------------------------------------------------------------------------------------
//-----------------------ASYNC AWAIT YÖNTEMİYLE AYNI SAYFA----------------------------------
//------------------------------------------------------------------------------------------

let neighbors = [];
let country = "";
const countriesSection = document.querySelector(".countries");

const renderCountry = (data, className = "") => {
  const html = `
  <div class="country ${className}">
    <img class="country__img" src="${data.flag}" />
    <div class="country__data">
      <h3 class="country__name">${data.name}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span><i class="fas fa-lg fa-landmark"></i></span>${
        data.capital
      }</p>
      <p class="country__row"><span><i class="fas fa-lg fa-users"></i></span>${(
        +data.population / 1_000_000
      ).toFixed(1)}M People</p>
      <p class="country__row"><span><i class="fas fa-lg fa-comments"></i></span>${
        data.languages[0].name
      }</p>
      <p class="country__row"><span><i class="fas fa-lg fa-money-bill-wave"></i></span>${
        data.currencies[0].name
      }</p>
    </div>
  </div>`;
  countriesSection.innerHTML += html;
  //   // / ${data.nativeName}
  countriesSection.style.opacity = 0.9;
};

async function getCountryData(countryName) {
  console.log(countryName);
  const response = await fetch(
    `https://restcountries.com/v2/name/${countryName}`
  );
  console.log(response);
  if (!response.ok) throw new Error("something went wrong!");
  const countryData = await response.json();
  console.log(countryData);
  renderCountry(countryData[0]);
  neighbors.push(countryData[0].borders);
}
async function getNeighbor(neighbors) {
  console.log(neighbors);
  for (const el of neighbors) {
    const response = await fetch(`https://restcountries.com/v2/alpha/${el}`);
    if (!response.ok) throw new Error("something went wrong!");
    const countryData = await response.json();
    console.log(countryData);
    renderCountry(countryData);
  }};

const countryInp = document.getElementById("input");
countryInp.addEventListener("keyup", () => {
  countriesSection.innerHTML = "";
  neighbors = [];
  country = "";
});
setTimeout(() => {
  console.log(country);
}, 5000);
const countryBtn = document.getElementById("country");
countryBtn.addEventListener("click", () => {
  country = document.getElementById("input").value;
  getCountryData(country);
});

let neighborBtn = document.getElementById("neighbor");
neighborBtn.addEventListener("click", () => {
  getNeighbor(neighbors[0]);
});

//------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------

// console.log('  ❯› Clarusway');
// const countries = document.querySelector('.countries');
// countries.style.opacity = 1;

// /*
// setTimeout & setInterval recap
// write a function which counts up to given seconds and stop counting
// it should log to the console
// n seconds passed
// n+1 seconds passed etc
// counter finished
// */
// // setInterval
// function countSeconds(limit) {
//   let current = 0;
//   const intId = setInterval(() => {
//     if (current == limit) {
//       clearInterval(intId);
//       console.log('counter finished.');
//       return;
//     }
//     current++;
//     console.log(`${current} seconds passed.`);
//   }, 1000);
// }
// // countSeconds(4);

// // setTimeout
// let current = 0;
// function countSeconds2(limit) {
//   // recursive
//   if (current > limit) {
//     console.log('counter finished.');
//   } else {
//     if (current != 0) {
//       console.log(`${current} seconds passed.`);
//     }
//     current++;
//     setTimeout(countSeconds2, 1000, limit);
//   }
// }
// // countSeconds2(3);

// // new Promise(function (resolve, reject) {
// //   const isSuccessful = true;
// //   if (isSuccessful) {
// //     resolve('task completed successfully');
// //   }
// //   reject('failed');
// // })
// //   .then((sonuc) => {
// //     console.log(sonuc);
// //     return 'devam ediyor';
// //   })
// //   .then(console.log)
// //   .catch((err) => console.log(err));

// // let headersList = {
// //   Accept: '*/*',
// //   'User-Agent': 'Thunder Client (https://www.thunderclient.io)',
// // };

// // fetch('https://restcountries.eu/rest/v2/name/germany')
// //   .then(function (response) {
// //     return response.json();
// //   })
// //   .then(function (data) {
// //     console.log(data[0]);
// //   });

// const renderCountry = (data, className = '') => {
//   const countriesSection = document.querySelector('.countries');
//   const html = `
//   <div class="country ${className}">
//     <img class="country__img" src="${data.flag}" />
//     <div class="country__data">
//       <h3 class="country__name">${data.name}</h3>
//       <h4 class="country__region">${data.region}</h4>
//       <p class="country__row"><span><i class="fas fa-lg fa-landmark"></i></span>${
//         data.capital
//       }</p>
//       <p class="country__row"><span><i class="fas fa-lg fa-users"></i></span>${(
//         +data.population / 1_000_000
//       ).toFixed(1)}M People</p>
//       <p class="country__row"><span><i class="fas fa-lg fa-comments"></i></span>${
//         data.languages[0].name
//       }</p>
//       <p class="country__row"><span><i class="fas fa-lg fa-money-bill-wave"></i></span>${
//         data.currencies[0].name
//       }</p>
//     </div>
//   </div>`;

//   // / ${data.nativeName}
//   countriesSection.insertAdjacentHTML('beforeend', html);
//   countriesSection.style.opacity = 1;
// };

// // fetch('https://restcountries.eu/rest/v2/name/turkey')
// //   .then((response) => {
// //     return response.json();
// //   })
// //   .then((data) => {
// //     renderCountry(data[0]);
// //   });
// //   .then(function (response) {
// //     return response.json();
// //   })
// //   .then(function (data) {
// //     console.log(data[0]);
// //   });

// const getCountryData = (countryName) => {
//   fetch(`https://restcountries.eu/rest/v2/name/${countryName}`)
//     .then((response) => {
//       console.log(response);
//       if (!response.ok) throw new Error('something went wrong!');
//       return response.json();
//     })
//     .then((countryData) => {
//       console.log(countryData[0]);
//       renderCountry(countryData[0]);
//     })
//     .catch((error) => console.log(error.message));
// };

// const getCountryByCode = (countryCode) => {
//   fetch(`https://restcountries.eu/rest/v2/alpha/${countryCode}`)
//     .then((response) => {
//       console.log(response);
//       if (!response.ok) throw new Error('something went wrong!');
//       return response.json();
//     })
//     .then((countryData) => {
//       console.log(countryData);
//       renderCountry(countryData, 'neighbour');
//     })
//     .catch((error) => console.log(error.message));
// };

// const getCountryAndNeighbours = (countryName) => {
//   fetch(`https://restcountries.eu/rest/v2/name/${countryName}`)
//     .then((response) => {
//       console.log(response);
//       if (!response.ok) throw new Error('something went wrong!');
//       return response.json();
//     })
//     .then((countryData) => {
//       console.log(countryData[0]);
//       const theCountry = countryData[0];
//       renderCountry(theCountry);
//       return countryData[0].borders;
//     })
//     .then((neighbours) => {
//       if (neighbours.length) {
//         console.log('neighbours :>> ', ...neighbours);
//         neighbours.forEach((country) => {
//           getCountryByCode(country);
//         });
//       }
//     })
//     .catch((error) => console.log(error.message));
// };

// // getCountryData('italy');
// // getCountryData('Usa');
// // getCountryData('turkey');
// // getCountryData('spain');
// // getCountryByCode('tur');
// // getCountryAndNeighbours('germany');
// // getCountryAndNeighbours('usa');

// // async function getNe() {

// // }
// const f = async () => {
//   let response = await fetch(`https://restcountries.eu/rest/v2/name/turkey`);
//   console.log(response);
// };
// f();

// const getCountryNeighbourDataAsync = async (country) => {
//   try {
//     let response = await fetch(
//       `https://restcountries.eu/rest/v2/name/${country}`
//     );
//     console.log(response);

//     if (!response.ok)
//       throw new Error(`something went wrong (${response.status})`);

//     let data = await response.json();

//     renderCountry(data[0]);
//     // list all neighbours if any
//     const neighbours = data[0].borders;
//     if (neighbours.length) {
//       console.log('neighbours :>> ', ...neighbours);
//       neighbours.forEach((neighbour) => {
//         getCountryByCode(neighbour);
//       });
//     }
//     response = await fetch(
//       `https://restcountries.eu/rest/v2/alpha/${neighbour}`
//     );
//   } catch (err) {
//     console.log(err.message);
//   }
// };

// getCountryNeighbourDataAsync('Bulgaria');
