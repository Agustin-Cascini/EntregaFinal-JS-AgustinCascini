let cart = [];

const shopContainer = document.getElementById('shopContainer');

shopContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('btn-add-cart')) {
        validateCartProduct(e.target.id);
    }
});

const validateCartProduct = (id) => {
    const isRepeated = cart.some(product => product.id == id);

    // Probar que pasa si clickeo un boton cuyo id no se relaciona con algun id en mi array de STOCK.

    if (!isRepeated) {
        const product = productsList.find(product => product.id == id);
        cart.push(product);
        printCartProducts(product);
    } else {
        const product = cart.find(product => product.id == id);
        const modalQuantityProduct = document.getElementById(`qty${product.id}`)
        product.quantity++
        modalQuantityProduct.innerText = `${product.quantity}`
    }
}

const printCartProducts = (object) => {
    const modalBody = document.getElementById('modalBody');

    const modalBodyContainer = document.createElement('div');
    modalBodyContainer.className = 'modal-body-container';
    modalBodyContainer.innerHTML = `
        <img src="${object.img}">
        <span class="mbc-name-price">
            <p class="mbc-name">${object.name}</p>
            <p class="mbc-price">$${object.price}</p>
        </span>
        <i id="subtractQuantity" class="bi bi-dash-circle-fill"></i> <p id="qty${object.id}" class="mbc-qty">${object.quantity}</p> <i id="addQuantity" class="bi bi-plus-circle-fill"></i>
        <button class="delete-btn" value="${object.id}">X</button>
    `;

    modalBody.appendChild(modalBodyContainer);
};




