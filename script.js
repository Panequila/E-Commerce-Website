// Script for navigation bar
const bar = document.getElementById("bar");
const clos = document.getElementById("close");
const nav = document.getElementById("navbar");

if (bar) {
  bar.addEventListener("click", function () {
    nav.classList.add("active");
  });
}

if (clos) {
  clos.addEventListener("click", function () {
    nav.classList.remove("active");
  });
}


function PassProduct(element) {

  console.log(element);

  // Get the classes of the product by using querySelector.
  const productImage = element.querySelector(".productImage").src;
  const imageName = productImage.substring(productImage.lastIndexOf("/") + 1);

  const productBrand = element.querySelector(".productBrand").innerText;
  const productName = element.querySelector(".productName").innerText;
  const productPrice = element.querySelector(".productPrice").innerText;

  console.log(imageName);
  console.log(productBrand);
  console.log(productName);
  console.log(productPrice);

  // Create an object to store the data
  const data = {
    imageName: imageName,
    productBrand: productBrand,
    productName: productName,
    productPrice: productPrice,
  };

  // Store the data in local storage
  localStorage.setItem("ProductData", JSON.stringify(data));

  // Redirect to the new page with the URL
  window.location.href = "product.html";
}
