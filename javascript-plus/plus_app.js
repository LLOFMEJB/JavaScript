// const myDom = document.getElementById("dom");
// console.log(myDom);


// const instructor = document.getElementById("info");
// console.log(instructor);

// const ins = document.getElementById("instructor");
// console.log(ins);

// const withClassName = document.getElementsByClassName("class-info");
// // console.log(withClassName);
// console.log(withClassName[0]);


// const cw = document.getElementsByTagName("h3");
// console.log(cw);


// const brands = document.querySelector('#brands');
// console.log(brands);

// const innerBrands = document.querySelectorAll(".brand");
// console.log(innerBrands)

// console.log(innerBrands[3].innerText) 

// const brands = [
//     {id: 1, name: "audi"},
//     {id: 1, name: "ferrari"},
//     {id: 1, name: "porsche"},
//     {id: 1, name: "mercedes"}
// ];

// const cars = document.querySelector("#cars");

// for (const i of brands) {
//     cars.innerHTML += `<li>${i.name}</li><br>`
// }


const dolar = document.querySelector("#dolar");

const dolarHrefAtt = dolar.getAttribute("href");
console.log(dolarHrefAtt);
dolar.setAttribute("href","https://wwww.fenerbahçe.org")