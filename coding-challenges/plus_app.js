let sayı = prompt("Sayıyı yazınız: ");
let n1 = 0;
let n2 = 1;
let deger;

function fibonacci(n) {
    for (let i = 0; i <= n-1; i++) {
        deger = n1 + n2;
        n1 = n2;
        n2 = deger;
    }
    return deger;
}


sayıHtml = document.querySelector("#sayı");
sayıHtml.innerHTML = sayı;
degerHtml = document.querySelector("#deger");
degerHtml.innerHTML = fibonacci(sayı);