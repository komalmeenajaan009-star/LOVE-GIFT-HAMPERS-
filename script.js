/*====================================

LOVE GIFT HAMPERS
PREMIUM SCRIPT

====================================*/

// ================= CART =================

let cart = 0;

const cartCount = document.getElementById("cart-count");

document.querySelectorAll(".btn-cart").forEach(button => {

button.addEventListener("click", () => {

cart++;

if(cartCount){

cartCount.textContent = cart;

}

button.innerHTML = "✔ Added";

button.style.background = "#28a745";

setTimeout(()=>{

button.innerHTML = "Add To Cart";

button.style.background = "";

},1200);

});

});

// ================= SCROLL TO TOP =================

const scrollBtn = document.getElementById("scrollTop");

window.addEventListener("scroll",()=>{

if(window.scrollY>400){

scrollBtn.style.display="flex";

}else{

scrollBtn.style.display="none";

}

});

if(scrollBtn){

scrollBtn.style.display="none";

scrollBtn.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

}// ================= DYNAMIC PRODUCTS =================

const dynamicProducts = document.getElementById("dynamicProducts");
const loadBtn = document.getElementById("loadProducts");

const products = [];

for(let i=7;i<=30;i++){

products.push({

name:`Luxury Gift Hamper ${i}`,

image:`Product${i}.jpg`,

price:999+(i*80),

oldPrice:1499+(i*100),

reviews:150+i,

discount:20+(i%15)

});

}

let loaded = 0;

function loadProducts(){

if(!dynamicProducts) return;

const end = Math.min(loaded+6,products.length);

for(let i=loaded;i<end;i++){

const p = products[i];

dynamicProducts.innerHTML += `

<article class="product-card">

<div class="badge">

${p.discount}% OFF

</div>

<img src="${p.image}" alt="${p.name}">

<div class="product-content">

<h3>${p.name}</h3>

<div class="rating">

★★★★★

<span>(${p.reviews} Reviews)</span>

</div>

<div class="price">

₹${p.price}

<del>₹${p.oldPrice}</del>

</div>

<p>

Premium customized luxury gift hamper
crafted for every special occasion.

</p>

<div class="product-buttons">

<button class="btn-outline">

View Details

</button>

<button class="btn-cart">

Add To Cart

</button>

<a class="btn-buy"

href="https://wa.me/919079471045?text=I want to order ${encodeURIComponent(p.name)}">

Buy Now

</a>

</div>

</div>

</article>

`;

}

loaded = end;

// Re-attach Add to Cart events for newly added cards
document.querySelectorAll(".btn-cart").forEach(button=>{

if(!button.dataset.bound){

button.dataset.bound="1";

button.addEventListener("click",()=>{

cart++;

if(cartCount){

cartCount.textContent=cart;

}

button.innerHTML="✔ Added";

button.style.background="#28a745";

setTimeout(()=>{

button.innerHTML="Add To Cart";

button.style.background="";

},1200);

});

}

});

if(loaded>=products.length && loadBtn){

loadBtn.style.display="none";

}

}

if(loadBtn){

loadBtn.addEventListener("click",loadProducts);

  }// ================= LIVE SEARCH =================

const searchInput = document.querySelector(".search-box input");

if(searchInput){

searchInput.addEventListener("keyup",()=>{

const value = searchInput.value.toLowerCase();

const cards = document.querySelectorAll(".product-card");

cards.forEach(card=>{

const title = card.querySelector("h3").textContent.toLowerCase();

const desc = card.querySelector("p").textContent.toLowerCase();

if(title.includes(value) || desc.includes(value)){

card.style.display="block";

}else{

card.style.display="none";

}

});

});

}

// ================= VIEW DETAILS =================

document.addEventListener("click",(e)=>{

if(e.target.classList.contains("btn-outline")){

const card = e.target.closest(".product-card");

const name = card.querySelector("h3").textContent;

const price = card.querySelector(".price").innerText;

alert(

"Product : " + name +

"\n\nPrice : " + price +

"\n\nFor complete details please contact us on WhatsApp."

);

}

});

// ================= SIMPLE FADE ANIMATION =================

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0)";

}

});

},

{

threshold:0.15

});

document.querySelectorAll(

".feature-card,.category-card,.product-card,.why-card,.review-card"

).forEach(el=>{

el.style.opacity="0";

el.style.transform="translateY(40px)";

el.style.transition=".6s ease";

observer.observe(el);

});// ================= HERO FLOAT EFFECT =================

const heroImage = document.querySelector(".hero-image img");

if(heroImage){

window.addEventListener("mousemove",(e)=>{

const x=(window.innerWidth/2-e.clientX)/35;

const y=(window.innerHeight/2-e.clientY)/35;

heroImage.style.transform=`translate(${x}px,${y}px)`;

});

}

// ================= WISHLIST =================

document.querySelectorAll(".fa-heart").forEach(icon=>{

icon.addEventListener("click",()=>{

icon.classList.toggle("fa-solid");

icon.classList.toggle("fa-regular");

icon.style.color="#ff2d55";

});

});

// ================= BUTTON RIPPLE =================

document.querySelectorAll(".btn,.btn-buy,.btn-cart,.btn-outline").forEach(btn=>{

btn.addEventListener("click",(e)=>{

const circle=document.createElement("span");

const size=Math.max(btn.clientWidth,btn.clientHeight);

const rect=btn.getBoundingClientRect();

circle.style.width=size+"px";

circle.style.height=size+"px";

circle.style.left=(e.clientX-rect.left-size/2)+"px";

circle.style.top=(e.clientY-rect.top-size/2)+"px";

circle.style.position="absolute";

circle.style.borderRadius="50%";

circle.style.background="rgba(255,255,255,.35)";

circle.style.transform="scale(0)";

circle.style.animation="ripple .6s linear";

circle.style.pointerEvents="none";

btn.style.position="relative";

btn.style.overflow="hidden";

btn.appendChild(circle);

setTimeout(()=>circle.remove(),600);

});

});

// ================= AUTO LOAD FIRST PRODUCTS =================

window.addEventListener("load",()=>{

if(typeof loadProducts==="function"){

loadProducts();

}

});

// ================= FOOTER YEAR =================

const year=document.querySelector(".copyright p");

if(year){

year.innerHTML=`© ${new Date().getFullYear()} LOVE GIFT HAMPERS. All Rights Reserved.`;

}

console.log("LOVE GIFT HAMPERS Loaded Successfully");
