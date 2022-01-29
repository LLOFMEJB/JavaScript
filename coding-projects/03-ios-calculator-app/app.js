let output = document.querySelector(".output");


let content = document.querySelectorAll(".content")
for (let i = 0; i < content.length; i++) {
    content[i].addEventListener("click", ()=>{
        if (output.innerHTML == "0,0<") {
            output.innerHTML = ""
        }
        output.innerHTML += content[i].innerHTML
    })
    
}



let operator = document.querySelectorAll(".operator ");
operator.forEach((item)=>{
    item.addEventListener("click", ()=>{output.innerHTML += item.innerHTML})
})


let clear = document.querySelector(".clear")
clear.addEventListener("click", ()=>{output.innerHTML = "0,0"})


let equal = document.querySelector(".equal")
equal.addEventListener("click", ()=>{output.innerHTML = parseInt(output.innerHTML) * 1 })
