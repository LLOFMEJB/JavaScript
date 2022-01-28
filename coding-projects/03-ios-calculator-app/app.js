let content1 = document.querySelector(".content1")
content1.addEventListener("click", ()=>{output.innerHTML += "1"})

let content2 = document.querySelector(".content2")
content2.addEventListener("click", ()=>{output.innerHTML += "2"})

let content3 = document.querySelector(".content3")
content3.addEventListener("click", ()=>{output.innerHTML += "3"})

let content4 = document.querySelector(".content4")
content4.addEventListener("click", ()=>{output.innerHTML += "4"})

let content5 = document.querySelector(".content5")
content5.addEventListener("click", ()=>{output.innerHTML += "5"})

let content6 = document.querySelector(".content6")
content6.addEventListener("click", ()=>{output.innerHTML += "6"})

let content7 = document.querySelector(".content7")
content7.addEventListener("click", ()=>{output.innerHTML += "7"})

let content8 = document.querySelector(".content8")
content8.addEventListener("click", ()=>{output.innerHTML += "8"})

let content9 = document.querySelector(".content9")
content9.addEventListener("click", ()=>{output.innerHTML += "9"})

let content10 = document.querySelector(".content10")
content10.addEventListener("click", ()=>{output.innerHTML += "10"})


let contentdot = document.querySelector(".contentdot")
contentdot.addEventListener("click", ()=>{output.innerHTML += "."})



let add = document.querySelector(".add ")
add.addEventListener("click", ()=>{output.innerHTML += "+"})


let substract = document.querySelector(".substract")
substract.addEventListener("click", ()=>{output.innerHTML += "-"})


let multiply = document.querySelector(".multiply")
multiply.addEventListener("click", ()=>{output.innerHTML += "*"})


let divide = document.querySelector(".divide")
divide.addEventListener("click", ()=>{output.innerHTML += "/"})


let equal = document.querySelector(".equal")
equal.addEventListener("click", ()=>{output.innerHTML = `${number(output.innerHTML)}`})


let clear = document.querySelector(".clear")
clear.addEventListener("click", ()=>{output.innerHTML = ""})


let output = document.querySelector(".output")

console.log(output.innerHTML);