//VARIABLE DE VALIDACION
const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

//QUERY SELECTORS GENERALES
const contenedorCarrito = document.querySelector("#contenedorCarrito");

//FUNCIONALIDAD DEL CARRITO: Agregar Y Renderizar al carrito //

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
              </div>
            </div>
          </div>
        </div>`;
    contenedorCarrito.append(productoDelCarrito);
  });
};

//EJECUCIONES //
renderizarCarrito();
