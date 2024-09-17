function init() {
    renderDishes();
}

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

function addToBasket(dishName, dishPrice) {
    const basketRef = document.querySelector('.basket');
    
    let basketItem = document.createElement("div");
    basketItem.className = 'basket-item';
    basketItem.innerHTML = `
        <p>${dishName}: €${dishPrice.toFixed(2)}</p>
        <button onclick="removeFromBasket()">x</button>
    `;
    basketRef.appendChild(basketItem);
}

function removeFromBasket() {

}
