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
        <i id="${object.id}" class="bi bi-dash-circle-fill subtract-quantity"></i> <p id="qty${object.id}" class="mbc-qty">${object.quantity}</p> <i id="${object.id}" class="bi bi-plus-circle-fill add-quantity"></i>
        <button class="delete-btn" value="${object.id}">X</button>
    `;

    modalBody.appendChild(modalBodyContainer);
};

// Funcion para pintar dentro del modal los productos que se encuentren en la variable cart (La usaremos para volver a pintar los productos una vez que se elimine alguno).
const printCart = (cart) => {
    const modalBody = document.getElementById('modalBody');

    modalBody.innerHTML = '';

    if (cart.length == 0){
        const modalBodyEmpty = document.createElement('p');
        modalBodyEmpty.className = 'modal-body-empty';
        modalBodyEmpty.innerText = 'El carrito esta vacio';

        modalBody.appendChild(modalBodyEmpty);
    } else {
        cart.forEach(object => {
            const modalBodyContainer = document.createElement('div');
            modalBodyContainer.className = 'modal-body-container';
            modalBodyContainer.innerHTML = `
                <img src="${object.img}">
                <span class="mbc-name-price">
                    <p class="mbc-name">${object.name}</p>
                    <p class="mbc-price">$${object.price}</p>
                </span>
                <i id="${object.id}" class="bi bi-dash-circle-fill subtract-quantity"></i> <p id="qty${object.id}" class="mbc-qty">${object.quantity}</p> <i id="${object.id}" class="bi bi-plus-circle-fill add-quantity"></i>
                <button class="delete-btn" value="${object.id}">X</button>
            `;
        
            modalBody.appendChild(modalBodyContainer);
        });
    }

    
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

    if (cart.length == 0){
        const totalCartQty = 0;
        const totalCartPrice = 0;

        printQtyAndPrice(totalCartQty, totalCartPrice);
        saveCartStorage(cart);
    } else {
        const totalCartQty = cart.reduce((acc, el) => acc + el.quantity, 0);
        const totalCartPrice = cart.reduce((acc, el) => acc + (el.price * el.quantity), 0); 
        // console.log(totalCartQty);   
        // console.log(totalCartPrice);
    
        printQtyAndPrice(totalCartQty, totalCartPrice);
        saveCartStorage(cart);
    } 
}

// Funcion para pintar el valor total de la compra.
const printQtyAndPrice = (totalCartQty, totalCartPrice) => {
    const cartCounter = document.getElementById('cartCounter');
    const totalPrice = document.getElementById('totalPrice');

    cartCounter.innerText = totalCartQty;
    totalPrice.innerText = totalCartPrice;
}

// Funcion para RESTAR una unidad del producto en el carrito.
const subtractOneUnity = (e) => {
    const idSubtractButton = cart.find(product => product.id == e.target.id);
    if (idSubtractButton.quantity > 1) {
        idSubtractButton.quantity--
    }
    console.log(idSubtractButton);
    printCart(cart);
    saveCartStorage(cart);
}

// Funcion para SUMAR una uniodad del producto en el carrito.
const addOneUnity = (e) => {
    const idAddButton = cart.find(product => product.id == e.target.id);
    idAddButton.quantity++
    
    console.log(idAddButton);
    printCart(cart);
    saveCartStorage(cart);
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





