let basket = [];

function init() {
    renderDishes();
    renderBasket();
}

function addToBasket(dishName, dishPrice) {
    let foundDish = basket.find(item => item.name === dishName);
    if (foundDish) {
        foundDish.quantity++;
    } else {
        basket.push({
            name: dishName,
            price: dishPrice,
            quantity: 1
        });
    }    
    renderBasket();
}

function increaseQuantity(dishName) {
    let foundDish = basket.find(item => item.name === dishName);
    if (foundDish) {
        foundDish.quantity++;
    }
    renderBasket();
}

function decreaseQuantity(dishName) {
    let foundDish = basket.find(item => item.name === dishName);
    if (foundDish) {
        if (foundDish.quantity > 1) {
            foundDish.quantity--;
        } else {
            removeFromBasket(dishName);
        }
    }
    renderBasket();
}

function removeFromBasket(dishName) {
    let foundIndex = basket.findIndex(item => item.name === dishName);
    if (foundIndex !== -1) {
        basket.splice(foundIndex, 1);
    }
    renderBasket();
}

function createIcons() {
    return `
    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed">
        <path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"/>
    </svg>
    `;
}
