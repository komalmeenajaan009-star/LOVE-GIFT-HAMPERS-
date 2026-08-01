// =====================================
// LOVE GIFT HAMPERS
// Script Part 1
// =====================================

const searchInput = document.getElementById("searchInput");
const products = document.querySelectorAll(".product-card");

if (searchInput) {

searchInput.addEventListener("keyup", function () {

const value = this.value.toLowerCase();

products.forEach(product => {

const title = product.querySelector("h3").innerText.toLowerCase();

if (title.includes(value)) {

product.style.display = "block";

} else {

product.style.display = "none";

}

});

});

}

// =======================
// Wishlist
// =======================

const wishlistIcon = document.querySelector(".fa-heart");

if (wishlistIcon) {

wishlistIcon.addEventListener("click", () => {

alert("❤️ Wishlist feature will be available soon.");

});

}

// =======================
// Smooth Scroll
// =======================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

anchor.addEventListener("click", function(e){

e.preventDefault();

const target = document.querySelector(this.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});// =======================
// Add To Cart
// =======================

let cart = JSON.parse(localStorage.getItem("giftCart")) || [];

const cartButtons = document.querySelectorAll(".cart-btn");

cartButtons.forEach(button => {

button.addEventListener("click", function(e){

e.preventDefault();

const product = this.closest(".product-card");

const title = product.querySelector("h3").innerText;

const price = product.querySelector(".price").innerText;

const image = product.querySelector("img").src;

cart.push({

title,
price,
image

});

localStorage.setItem("giftCart", JSON.stringify(cart));

alert(title + " added to cart successfully 🛒");

updateCartCount();

});

});

// =======================
// Cart Counter
// =======================

function updateCartCount(){

const cartIcon = document.querySelector(".fa-cart-shopping");

if(cartIcon){

cartIcon.setAttribute("data-count", cart.length);

}

}

updateCartCount();// =======================
// Product Popup
// =======================

const popup = document.getElementById("productPopup");

const closePopup = document.querySelector(".close-popup");

const detailButtons = document.querySelectorAll(".details-btn");

const popupImage = document.getElementById("popupImage");
const popupTitle = document.getElementById("popupTitle");
const popupPrice = document.getElementById("popupPrice");
const popupDescription = document.getElementById("popupDescription");

detailButtons.forEach(button => {

button.addEventListener("click", function(e){

e.preventDefault();

const product = this.closest(".product-card");

popupImage.src = product.querySelector("img").src;

popupTitle.innerText =
product.querySelector("h3").innerText;

popupPrice.innerText =
product.querySelector(".price").innerText;

popupDescription.innerText =
product.querySelector("p").innerText;

popup.style.display = "flex";

});

});

if(closePopup){

closePopup.addEventListener("click", function(){

popup.style.display = "none";

});

}

window.addEventListener("click", function(e){

if(e.target === popup){

popup.style.display = "none";

}

});

// =======================
// Buy Now (Popup)
// =======================

const popupBuyBtn =
document.querySelector("#productPopup .buy-btn");

if(popupBuyBtn){

popupBuyBtn.addEventListener("click", function(e){

e.preventDefault();

const productName = popupTitle.innerText;

window.open(

`https://wa.me/919079471045?text=Hello, I want to buy ${encodeURIComponent(productName)}`,

"_blank"

);

});

}// =======================
// WhatsApp Order
// =======================

const whatsappButtons =
document.querySelectorAll(".whatsapp-btn");

whatsappButtons.forEach(button => {

button.addEventListener("click", function(e){

e.preventDefault();

const productName = popupTitle.innerText || "Gift Hamper";

window.open(

`https://wa.me/919079471045?text=Hello, I want to order ${encodeURIComponent(productName)}`,

"_blank"

);

});

});

// =======================
// Similar Products
// =======================

const similarItems =
document.querySelectorAll(".similar-products div");

similarItems.forEach(item=>{

item.addEventListener("click",function(){

const img = this.querySelector("img").src;

const title = this.querySelector("p").innerText;

popupImage.src = img;

popupTitle.innerText = title;

popupPrice.innerText = "₹999";

popupDescription.innerText =
"Premium handcrafted gift hamper with luxury packing, chocolates, flowers and surprise gifts.";

});

});

// =======================
// Page Loader
// =======================

window.addEventListener("load",function(){

document.body.style.opacity="1";

});

// =======================
// Scroll To Top Button
// =======================

const topButton = document.createElement("button");

topButton.innerHTML = "↑";

topButton.id = "scrollTopBtn";

document.body.appendChild(topButton);

topButton.style.position = "fixed";
topButton.style.bottom = "90px";
topButton.style.right = "20px";
topButton.style.width = "50px";
topButton.style.height = "50px";
topButton.style.border = "none";
topButton.style.borderRadius = "50%";
topButton.style.background = "#FFD700";
topButton.style.color = "#000";
topButton.style.fontSize = "22px";
topButton.style.cursor = "pointer";
topButton.style.display = "none";
topButton.style.zIndex = "999";

window.addEventListener("scroll",function(){

if(window.scrollY > 300){

topButton.style.display = "block";

}else{

topButton.style.display = "none";

}

});

topButton.addEventListener("click",function(){

window.scrollTo({

top:0,

behavior:"smooth"

});

});// =======================
// Review Card Animation
// =======================

const reviewCards = document.querySelectorAll(".review-card");

const reviewObserver = new IntersectionObserver((entries) => {

entries.forEach(entry => {

if(entry.isIntersecting){

entry.target.style.opacity = "1";
entry.target.style.transform = "translateY(0px)";

}

});

},{
threshold:0.2
});

reviewCards.forEach(card=>{

card.style.opacity="0";
card.style.transform="translateY(40px)";
card.style.transition="0.6s";

reviewObserver.observe(card);

});

// =======================
// Welcome Notification
// =======================

setTimeout(function(){

console.log("❤️ Welcome to LOVE GIFT HAMPERS");

},800);

// =======================
// Cart Counter Refresh
// =======================

window.addEventListener("storage",function(){

updateCartCount();

});

// =======================
// Prevent Empty Links
// =======================

document.querySelectorAll('a[href="#"]').forEach(link=>{

link.addEventListener("click",function(e){

e.preventDefault();

});

});

// =======================
// Script Ready
// =======================

console.log("LOVE GIFT HAMPERS Script Loaded Successfully");// =======================
// Final Safety Checks
// =======================

// Hide popup on ESC key

document.addEventListener("keydown", function(e){

if(e.key === "Escape" && popup){

popup.style.display = "none";

}

});

// Safe Image Loading

document.querySelectorAll("img").forEach(img=>{

img.onerror = function(){

this.src = "logo.png";

};

});

// Footer Year

const copyright =
document.querySelector(".copyright");

if(copyright){

copyright.innerHTML =
`© ${new Date().getFullYear()} LOVE GIFT HAMPERS. All Rights Reserved.`;

}

// =======================
// Finished
// =======================

console.log("=================================");
console.log("LOVE GIFT HAMPERS");
console.log("Website Loaded Successfully");
console.log("Premium Luxury Edition");
console.log("=================================");
