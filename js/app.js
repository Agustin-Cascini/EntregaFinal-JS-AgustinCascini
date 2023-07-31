// document.addEventListener('DOMContentLoaded', printProducts());

const shopContainer = document.getElementById('shopContent');

let carrito = [];

productsList.forEach((product) => {
    let productContainer = document.createElement('div');
    productContainer.className = 'cardContainer';
    productContainer.innerHTML = `
        <img src="${product.img}">
        <h3><span class="categoria-producto">${product.categoria}</span><br>${product.nombre}</h3>
        <p class="product-price">$${product.precio}</p>
        <i id="btnAddToCart" class="bi bi-cart-plus"> Add</i>
    `;

    shopContainer.append(productContainer);

    const addToCart = document.getElementById('btnAddToCart');
    addToCart.addEventListener('click', () => {
        carrito.push({
            img: product.img,
            id: product.id,
            nombre: product.nombre,
            precio: product.precio
        });
    console.log(carrito);
    });
});

