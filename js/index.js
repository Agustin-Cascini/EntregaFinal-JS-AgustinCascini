const shopContainer = document.getElementById('shopContainer');

const printProducts = (productsList) => {
    productsList.forEach(product => {
        const cardProduct = document.createElement('div');
        cardProduct.className = 'card-product';
        cardProduct.innerHTML = `
            <img class="card-img" src="${product.img}">
            <h3 class="card-categoria">${product.categoria}</h3>
            <h2 class="card-name">${product.nombre}</h2>
            <p class="card-precio">${product.precio}</p>
        `;

        shopContainer.append(cardProduct);


        const cardBtn = document.createElement('button');
        cardBtn.className = 'card-btn';
        cardBtn.innerText = 'AddToCart';

        shopContainer.append(cardBtn);
    });
}


cardBtn.addEventListener('click', (e) => {
    console.log(e.target);
})























document.addEventListener('DOMContentLoaded', printProducts(productsList));