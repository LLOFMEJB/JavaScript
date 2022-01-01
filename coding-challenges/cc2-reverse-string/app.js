let str = prompt("Yazıyı yazınız...")
let rev = ""

// function reverser(n) {
//     for (let i = n.length - 1; i >= 0; i--) {
//         rev += n[i]
//     }
//     return rev;
// }

function reverser(n) {
    return n.split("").reverse().join(""); 
}

strHtml = document.querySelector("#string");
strHtml.innerHTML = str;
revHtml = document.querySelector("#reversed");
revHtml.innerHTML = reverser(str);