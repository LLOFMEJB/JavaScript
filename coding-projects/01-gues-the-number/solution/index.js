let number = Math.floor(Math.random() * 100 + 1);
console.log(number)


var attemptNum = 0;
let attempt = document.querySelector("#attempt");
attempt.innerText = attemptNum


document.querySelector("#submitguess").onclick = function() {
    
    let guess = document.getElementById("#inp").value;
    
    
    if (number < guess) 
    {
        message.classList.add("fail")
        help.innerHTML = "Try little low!"
        attemptNum++;
    } else if (number > guess)
    {
        message.classList.add("fail")
        help.innerHTML = "Try little high!"
        attemptNum++;
    } else if (number == guess) 
    {
        message.classList.add("success")
        help.innerHTML = "Absolutely true! Congrats!"
        attemptNum++;
    };
    
};

let message = document.querySelector("#middle");



let help = document.querySelector("#help");




// function getRandomInt(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min) + min);
//   }