// Variable del carrito. Donde se agregaran los productos que el usuario desee comprar.
let cart = [];

// Capturamos el contenedor donde se mostraran los productos de mi STOCK.
const shopContainer = document.getElementById('shopContainer');

// Evento click que agregara el producto seleccionado al carrito mediante la funcion addToCart.
shopContainer.addEventListener('click', (e) => {
    if (e.target.classList.contains('btn-add-cart')) {
        addToCart(e.target.id);
    }
});

// Funcion para agregar el producto seleccionado al carrito, contiene la validacion para aumentar su cantidad en caso de ya existir dentro de mi variable cart.
const addToCart = (id) => {
    const isRepeated = cart.some(product => product.id == id);

    if (!isRepeated) {
        const product = productsList.find(product => product.id == id);
        cart.push(product);
        printCartProducts(product);
        updateQtyAndPrice(cart);
    } else {
        const product = cart.find(product => product.id == id);
        const modalQuantityProduct = document.getElementById(`qty${product.id}`)
        product.quantity++
        modalQuantityProduct.innerText = `${product.quantity}`;
        updateQtyAndPrice(cart);
    }
}

// Funcion para pintar los productos seleccionados por el usuario que se encuentran en la variable cart dentro del modal.
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

// Funcion para pintar dentro del modal los productos que se encuentren en la variable cart (La usaremos para volver a pintar los productos una vez que se elimine alguno).
const printCart = (cart) => {
    const modalBody = document.getElementById('modalBody');

    modalBody.innerHTML = '';

    cart.forEach(object => {
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
    })
};


const deleteCartProduct = (id) => {
    cart.forEach((product, index) => {
        if (product.id == id) {
            cart.splice(index, 1)
            // console.log(cart);
        }
    })
    printCart(cart);
    updateQtyAndPrice(cart);
}

// Funcion para mostrar el precio total de los productos seleccionados en el carrito.
const updateQtyAndPrice = (cart) => {
    const totalCartQty = cart.reduce((acc, el) => acc + el.quantity, 0);
    const totalCartPrice = cart.reduce((acc, el) => acc + (el.price * el.quantity), 0); 
    // console.log(totalCartQty);   
    // console.log(totalCartPrice);
    
    printQtyAndPrice(totalCartQty, totalCartPrice);
    saveCartStorage(cart);
}

// Funcion para pintar el valor total de la compra.
const printQtyAndPrice = (totalCartQty, totalCartPrice) => {
    const cartCounter = document.getElementById('cartCounter');
    const totalPrice = document.getElementById('totalPrice');

    cartCounter.innerText = totalCartQty;
    totalPrice.innerText = totalCartPrice;
}



// ----- STORAGE -----

const saveCartStorage = (cart) => {
    localStorage.setItem('carrito', JSON.stringify(cart));
}

const getCartStorage = () => {
    const cartStorage = JSON.parse(localStorage.getItem('carrito'));
    return cartStorage;
}

const loadCart = () => {
    if (localStorage.getItem('carrito')) {
        cart = getCartStorage();
        printCart(cart);
        updateQtyAndPrice(cart);
    }    
}





