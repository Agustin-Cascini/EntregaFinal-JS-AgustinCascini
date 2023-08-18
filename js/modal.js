// Capturamos los elementos necesarios para hacer funcionar el modal.
const openModal = document.getElementById('cartChango');
const closeModal = document.getElementById('modalBtnClose');
const myModal = document.getElementById('myModal');
const modalFooter = document.getElementById('modalFooter');


// Evento para abrir el modal clickeando el icono 'cart'.
openModal.addEventListener ('click', () => {
    myModal.style.display = 'block';
});


// Evento y funcion para cerrar el modal clickeando el iconod e la cruz.
closeModal.addEventListener('click', () => {
    myModal.style.display = 'none';
});


const closeModalFnc = () => {
    myModal.style.display = 'none';
}


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


modalFooter.addEventListener('click', (e) => {
    if (e.target.classList.contains('clean-cart-btn')) {

        Swal.fire({
            title: '¿Desea vaciar el carrito de compras?',
            showCancelButton: true,
            cancelButtonText: 'Cancelar',
            confirmButtonText: 'Vaciar Carrito',
            confirmButtonColor: 'pink',
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Se ha vaciado el carrito!',
                    '',
                    'success',
                )
                cart = [];
                printCart(cart);
                updateQtyAndPrice(cart);
                closeModalFnc();
            }
        })   
    }
})


// Evento para pagar por la compra.
modalFooter.addEventListener('click', (e) => {
    const totalCartPrice = cart.reduce((acc, el) => acc + (el.price * el.quantity), 0);

    if (e.target.classList.contains('buy-btn')) {
        
        Swal.fire({
            title: `Su importe a abonar es de $${totalCartPrice}`,
            confirmButtonText: 'Pagar',
            confirmButtonColor: 'pink',
            showCancelButton: true,
            cancelButtonText: 'Cancelar',
            // cancelButtonColor: 'red',
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire (
                    'Muchas gracias por su compra! Vuelva pronto!',
                    '',
                    'success',
                )
                cart = [];
                printCart(cart);
                updateQtyAndPrice(cart);
                closeModalFnc();
            }
        })
    }
})