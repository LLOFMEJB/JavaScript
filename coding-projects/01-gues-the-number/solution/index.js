let number = getRandomInt(0,100);
console.log(number)

let guess = document.querySelector("#inp").value;
console.log(guess)

let message = document.querySelector("#middle");

let attempt = document.querySelector("#attempt");
let help = document.querySelector("#help");

let num = 0;
attempt.innerHTML = num

function guessFunc(number) {
    if (number < guess) {
        num++
        message.classList.add("fail")
        help.innerHTML = "Try little low"
    } else if (number > guess){
        num++
        message.classList.add("fail")
    } else {
        num++
        message.classList.add("success")
        help.innerHTML = "Absolutely true! Congrats!"
    }
    
}


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }