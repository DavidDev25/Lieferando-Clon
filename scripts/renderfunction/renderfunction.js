function renderDishes() {
    const dishesRef = document.getElementById("content");

    for (let index = 0; index < dishes.length; index++) {
        let dish = document.createElement("div");
        dish.className = 'dish';
        dish.innerHTML = `
            <div class="dish-content">
                <h2>${dishes[index].name}</h2>
                <p class="description">${dishes[index].description}</p>
                <p class="price">Preis: €${dishes[index].price.toFixed(2)}</p>
                <button class="icon-button" onclick="addToBasket('${dishes[index].name}', ${dishes[index].price.toFixed(2)})">
                    ${createIcons()}
                </button>
            </div>
        `;
        dishesRef.appendChild(dish);
    }
}



function renderBasket() {
    const basketRef = document.querySelector('.basket');
    basketRef.innerHTML = `
        <h2>WARENKORB</h2>
    `;
    let totalPrice = 0;
    for (let i = 0; i < basket.length; i++) {
        let item = basket[i];
        totalPrice += item.price * item.quantity;
        let basketItem = document.createElement("div");
        basketItem.className = 'basket-item';
        basketItem.innerHTML = `
            <p>${item.name}: €${item.price.toFixed(2)} x ${item.quantity}</p>
            <button onclick="decreaseQuantity('${item.name}')">-</button>
            <button onclick="increaseQuantity('${item.name}')">+</button>
            <button onclick="removeFromBasket('${item.name}')">x</button>
        `;
        basketRef.appendChild(basketItem);
    }
    let totalDisplay = document.createElement("div");
    totalDisplay.className = 'total-price';
    totalDisplay.innerHTML = `<h3>Gesamt: €${totalPrice.toFixed(2)}</h3>`;
    basketRef.appendChild(totalDisplay);
}
function renderBasket() {
    const basketRef = document.querySelector('.basket');
    basketRef.innerHTML = `
        <h2>WARENKORB</h2>
    `;
    let totalPrice = 0;
    for (let i = 0; i < basket.length; i++) {
        let item = basket[i];
        totalPrice += item.price * item.quantity;
        let basketItem = document.createElement("div");
        basketItem.className = 'basket-item';
        basketItem.innerHTML = `
            <p>${item.name}: €${item.price.toFixed(2)} x ${item.quantity}</p>
            <button onclick="decreaseQuantity('${item.name}')">-</button>
            <button onclick="increaseQuantity('${item.name}')">+</button>
            <button onclick="removeFromBasket('${item.name}')">x</button>
        `;
        basketRef.appendChild(basketItem);
    }
    let totalDisplay = document.createElement("div");
    totalDisplay.className = 'total-price';
    totalDisplay.innerHTML = `<h3>Gesamt: €${totalPrice.toFixed(2)}</h3>`;
    basketRef.appendChild(totalDisplay);
}