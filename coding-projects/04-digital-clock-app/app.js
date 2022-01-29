setInterval(() => {
}, 1000);

const writeTime = ()=>{
let currentDate = new Date;
let seconds = currentDate.getSeconds();
let minutes = currentDate.getMinutes();
let hour = currentDate.getHours();
console.log(hour + ":" + minutes + ":" + seconds);}