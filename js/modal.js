// Capturamos los elementos necesarios para hacer funcionar el modal.
const openModal = document.getElementById('cartChango');
const closeModal = document.getElementById('modalBtnClose');
const myModal = document.getElementById('myModal');
const modalFooter = document.getElementById('modalFooter');

// Evento para abrir el modal clickeando el icono 'cart'.
openModal.addEventListener ('click', () => {
    myModal.style.display = 'block';
    // console.log(cart);
});

// Evento para cerrar el modal clickeando el iconod e la cruz.
closeModal.addEventListener('click', () => {
    myModal.style.display = 'none';
});

// Evento para cerrar el modal clickeando por fuera del container del modal. (Ayuda de Papi Gpt).
window.addEventListener('click', (e) => {
    if (e.target === myModal) {
        myModal.style.display = 'none';
    }
});

// Evento para aumentar la cantidad, reducir la cantidad o eliminar el producto del carrito.
myModal.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete-btn')) {
        deleteCartProduct(e.target.value);
    } else if (e.target.classList.contains('subtract-quantity')) {
        subtractOneUnity(e);
        updateQtyAndPrice(cart);
    } else if (e.target.classList.contains('add-quantity')) {
        addOneUnity(e);
        updateQtyAndPrice(cart);
    }
})

// Evento para vaciar el carrito o pagar por la compra.
modalFooter.addEventListener('click', (e) => {
    if (e.target.classList.contains('clean-cart-btn')) {
        let confirmBtn = confirm('¿Seguro que desea vaciar el carrito?');

        if (confirmBtn){
            cart = [];
            
        }
        printCart(cart);
        updateQtyAndPrice(cart);
    }
})