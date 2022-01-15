// ------------------------------------------MAIN CODE---------------------------------------------------------
document
  .getElementById("customer-form")
  .addEventListener("submit", function (e) {
    const nameBox = this.querySelector("#name");
    const priceBox = this.querySelector("#price");
    const quantityBox = this.querySelector("#quantity");
    e.preventDefault();
    const product = new Product(
      nameBox.value,
      priceBox.value,
      quantityBox.value
    );
    product.showLoading(product);
  });

function Product(nameVal, priceVal, quantityVal) {
  this.nameVal = nameVal;
  this.priceVal = priceVal;
  this.quantityVal = quantityVal;
}

Product.prototype.addProduct = function (product) {
    const productsDiv = document.getElementsByClassName("products")[0];
    productsDiv.innerHTML += `<div class="product">
    <div class="product-image">
    <img src="img/toblerone.jpg">
    </div>
    <div class="product-details">
    <div class="product-title">${product.nameVal}</div>
    </div>
    <div class="product-price">${product.priceVal}</div>
    <div class="product-quantity">
    <input type="number" value="${product.quantityVal}" min="1">
    </div>
    <div class="product-removal">
    <button class="remove-product">
    Remove
    </button>
    </div>
    <div class="product-line-price">${(
        parseFloat(product.priceVal) * parseFloat(product.quantityVal)
        ).toFixed(2)}</div>
        </div>`;
    };
Product.prototype.showLoading = function (product) {
    const loading = document.querySelector(".loading");
    loading.style.display = "block";
    const displayObj = this;
    console.log(displayObj);
    setTimeout(function () {
        loading.style.display = "none";
        displayObj.addProduct(product);  //product
        document.getElementById("customer-form").reset();
    }, 750);
};
// ------------------------------------------MAIN CODE---------------------------------------------------------

// const queryString = window.location.search;
// console.log(queryString);
// const urlParams = new URLSearchParams(queryString);
// console.log(urlParams);
// const firstname = urlParams.get("firstname");
// const lastname = urlParams.get("lastname");
// alert("welcome " + firstname + " " + lastname);

const updateProductQuantity = (input) => {
  alert(input.value);
};

document.querySelectorAll(".product-quantity input").forEach(function (input) {
  input.addEventListener("change", function () {
    updateProductQuantity(input);
  });
});

const removeProduct = (button) => {
  let productRow = button.parentElement.parentElement;
  productRow.remove();
};

document.querySelectorAll(".product-removal button").forEach(function (button) {
  button.addEventListener("click", function () {
    removeProduct(button);
  });
});

// const queryString = window.location.search;
// console.log(queryString);
// const urlParams = new URLSearchParams(queryString);
// console.log(urlParams);
// const firstname = urlParams.get("firstname")
// const lastname = urlParams.get("lastname")
// console.log(firstname)
// console.log(lastname)

// const updateProductQuantity = (input) => {
//     alert(input.value);
// }

// document.querySelectorAll(".product-quantity input").forEach
// (function(input) {
//     input.addEventListener("change", function() {
//         updateProductQuantity(this);
//     })
// });

// document.querySelectorAll(".product-removal button").forEach
// (function(button) {
//     button.addEventListener("click", function() {
//         removeProduct(this)
//     })
// })

// const removeProduct = (removeButton) => {
//     let productRow = removeButton.closest(".product");
//     productRow.remove();
// }

// let translate = new Date("3 march 2015 20:21:44");
// console.log(translate.toLocaleDateString());

// document.querySelectorAll(".product-quantity input").forEach(function(input){
