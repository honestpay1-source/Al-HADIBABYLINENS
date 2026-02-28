let products = [];
let cart = [];

for (let i = 1; i <= 1000; i++) {
    let category = i % 2 === 0 ? "winter" : "summer";
    products.push({
        id: i,
        name: `Baby Product ${i}`,
        price: 1000 + i,
        category: category
    });
}

function displayProducts(filter) {
    const container = document.getElementById("product-container");
    container.innerHTML = "";

    let filtered = filter === "all" ? products : products.filter(p => p.category === filter);

    filtered.forEach(product => {
        container.innerHTML += `
            <div class="product">
                <h3>${product.name}</h3>
                <p>Price: Rs.${product.price}</p>
                <button onclick="addToCart(${product.id})">Add to Cart</button>
            </div>
        `;
    });
}

function filterProducts(category) {
    displayProducts(category);
}

function addToCart(id) {
    let product = products.find(p => p.id === id);
    cart.push(product);
    document.getElementById("cart-count").innerText = cart.length;

    let cartItems = document.getElementById("cart-items");
    let li = document.createElement("li");
    li.textContent = product.name + " - Rs." + product.price;
    cartItems.appendChild(li);
}

function sendWhatsAppOrder() {
    let message = "Order Details:%0A";
    cart.forEach(item => {
        message += item.name + " - Rs." + item.price + "%0A";
    });

    window.open(`https://wa.me/923190833295?text=${message}`);
}

displayProducts("all");
