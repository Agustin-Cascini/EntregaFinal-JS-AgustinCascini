// Funcion pintar productos donde mostramos de manera dinamica los productos de nuestro STOCK.

const printProducts = (stock) => {
    const shopContainer = document.getElementById('shopContainer');

    stock.forEach(product => {
        const cardProduct = document.createElement('div');
        cardProduct.className = 'card-product';
        cardProduct.innerHTML = `
            <div class="card-img">
                <img src="${product.img}">
            </div>
            <div class="card-body">
                <h3 class="card-category">${product.category}</h3>
                <h2 class="card-name">${product.name}</h2>
                <p class="card-price">$${product.price}</p>
                <i id="${product.id}" class="bi bi-cart-plus btn-add-cart"> Agregar</i>
            </div>
        `;
        
        shopContainer.append(cardProduct);
    });
}

document.addEventListener('DOMContentLoaded', printProducts(productsList));
document.addEventListener('DOMContentLoaded', loadCart());