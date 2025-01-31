let cart = [];

function addToCart(button) {
    let product = button.parentElement;
    let name = product.getAttribute("data-name");
    let price = parseFloat(product.getAttribute("data-price"));

    let existingItem = cart.find(item => item.name === name);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ name, price, quantity: 1 });
    }

    updateCart();
}

function updateCart() {
    let cartList = document.getElementById("cart-items");
    let totalPrice = document.getElementById("total-price");
    let cartCount = document.getElementById("cart-count");

    cartList.innerHTML = "";
    let total = 0;
    let count = 0;

    cart.forEach(item => {
        total += item.price * item.quantity;
        count += item.quantity;

        let li = document.createElement("li");
        li.textContent = `${item.name} x ${item.quantity} - $${item.price * item.quantity}`;
        cartList.appendChild(li);
    });

    totalPrice.textContent = total;
    cartCount.textContent = count;
    document.getElementById("cart").style.display = cart.length ? "block" : "none";
}

function toggleCart() {
    let cartSection = document.getElementById("cart");
    cartSection.style.display = cartSection.style.display === "none" ? "block" : "none";
}

function checkout() {
    document.getElementById("checkout-form").classList.remove("hidden");
}

document.getElementById("customer-form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Order placed successfully!");
    cart = [];
    updateCart();
    document.getElementById("checkout-form").classList.add("hidden");
});
