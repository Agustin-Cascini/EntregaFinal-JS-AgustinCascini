// Capturamos los elementos necesarios para ahcer funcionar el modal, (Boton de apertura, boton de cierre y el contenedor padre).
const openModal = document.getElementById('cartChango');
const closeModal = document.getElementById('modalBtnClose');
const myModal = document.getElementById('myModal');

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

// Evento para capturar el id del boton que eliminara el producto dentro del carrito.
myModal.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete-btn')) {
        deleteCartProduct(e.target.value);
    }
})