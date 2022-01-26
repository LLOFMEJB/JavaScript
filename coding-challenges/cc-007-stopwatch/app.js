let time = document.getElementById("time");
let cont = 0;
let mins = 0;
let secs = 0;
let split = 0;

const startStopBtn = document.getElementById("startStop");
const resetBtn = document.getElementById("reset");

startStopBtn.addEventListener("click", ()=>{cont++});

let num = 0;

const timer = setInterval(function () {
  if (cont % 2 == 1) {
    split++;
  }
  if (split == 60) {
    split = 0;
    secs++
  }
  if (secs == 60) {
    secs = 0;
    mins++
  }
  if (mins = 60) {
    mins = 0;
  }
  time.innerHTML = `${mins}:${secs}:${split}`
}, 1.666666666666668);


