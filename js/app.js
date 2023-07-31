const shopContainer = document.getElementById('shopContainer');
const cardContainer = document.querySelector('.cardContainer');
const navCart = document.getElementById('navCart');
const modalContainer = document.getElementById('modalContainer');

let carrito = [];

const printProducts = () => {

    productsList.forEach((product) => {
        let productContainer = document.createElement('div');
        productContainer.className = 'cardContainer';
        productContainer.innerHTML = `
            <img src="${product.img}">
            <span class="categoria-producto">${product.categoria}</span><br><h3>${product.nombre}</h3>
            <p class="product-price">$${product.precio}</p>
        `;

        shopContainer.appendChild(productContainer);

        let buttonAdd = document.createElement('span');
        buttonAdd.className = 'btn-add';
        buttonAdd.innerHTML = `<span id="${product.id}" class="span-add">Add To <i class="bi bi-cart-plus"></i>`;

        productContainer.append(buttonAdd);
        // console.log(buttonAdd);


        buttonAdd.addEventListener('click', () => {
            carrito.push({
                id: product.id,
                img: product.img,
                nombre: product.nombre,
                precio: product.precio
            });
            // console.log(carrito);
        });
    });
};


navCart.addEventListener('click', () => {
    
    const modalHeader = document.createElement('div');
    modalHeader.className = 'modal-header';
    modalHeader.innerHTML = `
        <h2 class="modal-header-title"> Carrito </h2>
        <i id="modal-header-btn" class="bi bi-x-circle-fill"></i>
    `;
    
    modalContainer.append(modalHeader);

    // Asi lo creo el ejemplo del video.
    // const modalButton = document.createElement('h1');
    // modalButton.innerText = 'x';
    // modalButton.className = 'modal-header-btn';

    // modalHeader.append(modalButton);
});





const addToCart = (id) => {

};







document.addEventListener('DOMContentLoaded', printProducts());