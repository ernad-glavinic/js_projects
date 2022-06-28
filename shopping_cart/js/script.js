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
                                <p>$${price} * ${quantity} = $<span>${total}</span></p>
                                <button onclick="removeFromCart(this)" class="remove-item">Remove</button>
                            </div>`;

    element.innerText = "Added";
    element.setAttribute('disabled', 'true');

    document.querySelector('.total').innerText = "Total amount: $" + allTotal;
}

function removeFromCart(element){
    let mainElement = element.closest('.cart-single-item');
    let price = mainElement.querySelector('p span').innerText;
    let name = mainElement.querySelector('.cart-single-item h3').innerText;
    let vegetables = document.querySelectorAll('.single-item');

    allTotal -= parseFloat(price);

    document.querySelector('.total').innerText = "Total amount: $" + allTotal;
    mainElement.remove();

    vegetables.forEach(function (vege){
        let itemName = vege.querySelector('.si-content h3').innerText;

        console.log("Item name " + itemName);
        console.log("Removed item name " +name);

        if(itemName === name){
            vege.querySelector('.actions input').value = 0;
            vege.querySelector('.actions button').removeAttribute('disabled');
            vege.querySelector('.actions button').innerText = "Add";
        }
    });
}