//VARIABLE DE VALIDACION
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

//QUERY SELECTORS GENERALES
const contenedorCarrito = document.querySelector("#contenedorCarrito");

//FUNCIONES
//FUNCIONALIDAD DEL CARRITO: Renderizar Carrito en HTML "CarritoDeCompra"//

const renderizarCarrito = () => {
  contenedorCarrito.innerHTML = "";
  carrito.forEach((producto) => {
    const productoDelCarrito = document.createElement("div");
    productoDelCarrito.classList.add("card");
    productoDelCarrito.classList.add("mb-3");
    productoDelCarrito.setAttribute("style", "max-width: 100%");
    productoDelCarrito.setAttribute("data-aos", "fade-right");
    productoDelCarrito.innerHTML = `
        <div class="row g-0">
            <div class="col-sm-2 align-self-center">
              <img
                src="${producto.imagen}"
                class="img-fluid"
                alt="${producto.presentacion} de ${producto.nombre}"
              />
            </div>
            <div class="col-sm-8">
              <div class="card-body">
                <h5 class="card-title text-center">Has agregado a tu carrito el siguiente producto</h5>
                 <p class="card-text"> ${producto.tipoDeProducto} de ${producto.nombre}: $${producto.importe}
                </p>
                <div class="botonEliminar">
                  <button id="BotonEliminar" data-id = "${producto.identificador}">Eliminar Producto</button>
                </div>
              </div>
            </div>
          </div>
        </div>`;
    contenedorCarrito.append(productoDelCarrito);
  });
  const BotonEliminar = document.querySelectorAll("#BotonEliminar");
  BotonEliminar.forEach((boton) => {
    boton.addEventListener("click", EliminarDelCarrito);
  });
};

const EliminarDelCarrito = (e) => {
  const idProductoElegido = e.target.getAttribute("data-id");
  carrito = carrito.filter(
    (producto) => producto.identificador != idProductoElegido
  );

  localStorage.setItem("carrito", JSON.stringify(carrito));
  renderizarCarrito();
};

//RENDERIZACION HTML CON CARRITO SIN PRODUCTOS

const carritoVacio = () => {
  const mensajeCarritoVacio = document.createElement("div");
  mensajeCarritoVacio.innerHTML = `
    <div>
      <p>¡TU CARRITO ESTA VACIO!
      ¡VOLVE ATRÁS QUE SEGURO ENCONTRARÁS ALGUN PRODUCTO INTERESANTE!</p>
    </div>`;
  contenedorCarrito.append(mensajeCarritoVacio);
};

if (carrito.length > 0) {
  renderizarCarrito();
} else {
  carritoVacio();
}

//Función para actualizar cada 5 segundos(5000 milisegundos)
const actualizarPagina = () => {
  location.reload();
};
setInterval(actualizarPagina, 5000);

//EJECUCIONES //
//renderizarCarrito();
