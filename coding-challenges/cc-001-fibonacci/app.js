// let sayı = prompt("Sayıyı yazınız: ");

function fibonacci(n) {
    let num1 = 0;
    let num2 = 1;
    for (let i = 0; i <= n; i++) {
        let deger = num1 + num2;
        num1 = num2;
        num2 = deger;
    }
    return deger;
}


sayıHtml = document.querySelector("#sayı");
sayıHtml.value = sayı;
degerHtml = document.querySelector("#deger");
degerHtml.innerHTML = fibonacci(sayı);
hesapBtn = document.querySelector("#hesapla");
hesapBtn.