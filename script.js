// Welcome Message
console.log("Love Gift Hampers Loaded Successfully");

// Search Function
const searchInput = document.querySelector(".search-box input");

if (searchInput) {
    searchInput.addEventListener("keyup", function () {
        const value = this.value.toLowerCase();
        const products = document.querySelectorAll(".product");

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

// Add To Cart
let cart = 0;

document.querySelectorAll(".product button").forEach(button => {
    button.addEventListener("click", () => {
        cart++;
        alert("Product added to cart 🛒");

        const cartText = document.querySelector(".fa-cart-shopping");

        if (cartText) {
            cartText.nextElementSibling.innerHTML = "Cart (" + cart + ")";
        }
    });
});

// Hero Slider
const hero = document.querySelector(".hero");

const banners = [
"https://images.unsplash.com/photo-1512909006721-3d6018887383?auto=format&fit=crop&w=1600&q=80",
"https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=1600&q=80",
"https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?auto=format&fit=crop&w=1600&q=80"
];

let current = 0;

setInterval(() => {
    current++;

    if (current >= banners.length) {
        current = 0;
    }

    hero.style.background =
        `url('${banners[current]}') center/cover`;
}, 4000);
