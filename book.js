let cart = [];
let total = 0;

function addToCart(item, price) {
    cart.push({ item, price });
    total += price;
    updateCart();
}

function updateCart() {
    const cartDiv = document.getElementById('cart');
    cartDiv.innerHTML = '';
    cart.forEach((cartItem, index) => {
        cartDiv.innerHTML += `<div>${cartItem.item} - $${cartItem.price} <button onclick="removeFromCart(${index})">Remove</button></div>`;
    });
    document.getElementById('total').innerText = total;
}

function removeFromCart(index) {
    total -= cart[index].price;
    cart.splice(index, 1);
    updateCart();
}

function checkout() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }
    alert('Thank you for patronizing us!');
    cart = [];
    total = 0;
    updateCart();
}

