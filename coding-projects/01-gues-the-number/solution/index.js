let number = Math.floor(Math.random() * 100 + 1);
console.log(number);

let button = document.querySelector("#submitguess");


let counter = 0;

let attempt = document.querySelector("#attempt");

button.onclick = function () {

    attempt.innerText = counter;

    let guess = document.getElementById("#inp").value;

    if (number < guess) {
    message.classList.add("fail");
    help.innerHTML = "Try little low!";
    counter++;
  } else if (number > guess) {
    message.classList.add("fail");
    help.innerHTML = "Try little high!";
    counter++;
  } else if (number == guess) {
    message.classList.add("success");
    help.innerHTML = "Absolutely true! Congrats!";
    counter++;
  }
};

let message = document.querySelector("#middle");

let help = document.querySelector("#help");

// function getRandomInt(min, max) {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min) + min);
//   }
