// myDiv = document.getElementById("maindiv");
// console.log(myDiv.innerHTML)

// li1 = document.getElementById("li1");
// console.log(li1.innerHTML);

// friends = document.getElementsByClassName("mainli");
// console.log(friends[1].innerHTML);

// bytag = document.getElementsByTagName("li");
// console.log(bytag);

// bad = document.querySelector("#li3");
// console.log(bad.innerHTML)

// beautiful = document.querySelectorAll(".girl");
// console.log(beautiful[1].innerHTML)

// beauty = beautiful[0].innerHTML + " " + beautiful[1].innerHTML;
// console.log(beauty);

// beautiful[1].innerHTML += " watson";

// let liler = document.querySelectorAll(".mainli");
// console.log(liler[3].innerHTML)
// let friends = liler

// // for (const i of liler) {
// //     friends += liler[i]
// // }
// console.log(liler)

let link = document.querySelector("#link");
let linkHref = link.getAttribute("href");
link.setAttribute("href","https://www.linkedin.com/feed/");
link.innerText = "Linkedin";

link.style.backgroundColor = "grey";
link.style.fontSize = "25px"

let classes = link.classList;
console.log(classes);
link.classList.add("linkedin");
console.log(link.classList);
link.classList.remove("linkedin");
console.log(link.classList);
link.classList.replace("youtube", "linkedin");
console.log(link.classList);

let linkDiv = document.querySelector("#link-div");
let newLi = document.createElement("li");
newLi.innerHTML = "New Li";
linkDiv.appendChild(newLi)