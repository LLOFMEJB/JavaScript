const navbarItem1 = document.getElementsByClassName("nav__item")[0];
const navbarItem2 = document.getElementsByClassName("nav__item")[1];
const navbarItem3 = document.getElementsByClassName("nav__item")[2];

const h1 = document.querySelector("h1");
// const highlightSpan = h1.querySelectorAll(".highlight");
// h1.firstElementChild.style.color = "red";
// h1.lastElementChild.style.color = "red";
// h1.closest(".header").style.backgroundColor = "grey";

// window.onload = () => {alert("Welcome To Hogwarts1")};
// window.addEventListener("load", () => alert("Welcome To Hogwarts2"));
// window.addEventListener("load", function() {alert("Welcome To Hogwarts3")});

// console.log(navbarItem1);
// navbarItem1.onclick = () => alert("from onclick js");
// navbarItem1.addEventListener("click", () => alert("from js addEL"));
// const sayHello = () => alert("from js const func")

navbarItem2.addEventListener("mouseover", () => (navbarItem2.innerText = "over me"));
navbarItem2.addEventListener("mouseout", () => (navbarItem2.innerText = "Operations"));