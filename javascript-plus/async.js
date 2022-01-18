// console.time("answer time");

// console.timeLog("answer time");

// setTimeout(()=> {console.timeEnd("answer time");}, 5000)

// console.timeLog("answer time");

// // answer time: 0.003662109375 ms
// // async.js:7 answer time: 0.158935546875 ms
// // async.js:5 answer time: 5014.997802734375 ms


function showTime(){
    const par = document.getElementById("par");
    const time = new Date();
    par.innerHTML = time.toLocaleTimeString();
}
setInterval(showTime,1)

let numInside = parseInt(prompt("Geri sayım için kaç saniye istersin?")) + 1;
function showNum(){
    const num = document.getElementById("num");
    num.innerHTML = numInside;
    numInside !== 0 ? numInside-- : numInside;
}
setInterval(showNum,1000)

const id = 
