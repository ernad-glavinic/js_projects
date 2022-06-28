var allTotal = 0;

function addToCart(element){
    let mainElement = element.closest('.single-item');
    let name = mainElement.querySelector('h3').innerText;
    let price = mainElement.querySelector('.price').innerText;
    let quantity = parseInt(mainElement.querySelector('input').value);
    let cartItems = document.querySelector('.cart-items');

    if(quantity <= 0) {
        alert("Quantity must be higher than 0!");
        return;
    }

    price = price.substring(1);
    price = parseFloat(price);

    let total = price * quantity;

    allTotal += total;

    cartItems.innerHTML += `<div class="cart-single-item">
                                <h3>${name}</h3>
                                <p>$${price} * ${quantity} = $${total}</p>
                            </div>`;

    element.innerText = "Added";
    element.setAttribute('disabled', 'true');

    document.querySelector('.total').innerText = "Total amount: $" + allTotal;
}