function init (){
    renderDishes();
}


function renderDishes(){
    let dishesRef =  document.getElementById("content");
    dishesRef.innerHTML = "";

    for (let index = 0; index < dishes.length; index++){
        let dish  = dishes[index];

        let dishesItem = /*html*/`
            <div class= dishes-content>
                <h2>${dish.name}</h2>
                <p>${dish.price}</p>
                <p>${dish.description}</p>
            </div>
        `;
        dishesRef.innerHTML += dishesItem;
    }
}