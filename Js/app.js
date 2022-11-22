// VARIABLES
const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
const ordenadoCantidad = [];

//QUERY SELECTORS GENERALES
const searchBarInput = document.querySelector("#searchBarInput");
const searchBarButton = document.querySelector("#searchBarButton");
const verCarritoButton = document.querySelector("#verCarritoButton");
const Propagacion = document.querySelector("#Propagacion");
const Consumibles = document.querySelector("#Consumibles");
const contenedorCarrito = document.querySelector("#contenedorCarrito");

//FUNCIONES //

// FUNCION: Renderizacion de Productos //
const renderizacionDeProductos = () => {
  alcoholaturas.forEach((producto) => {
    const cardProductoNuevo = document.createElement("div");
    cardProductoNuevo.classList.add("card");
    cardProductoNuevo.classList.add("mb-3");
    cardProductoNuevo.setAttribute("style", "max-width: 100%");
    cardProductoNuevo.setAttribute("data-aos", "fade-right");
    cardProductoNuevo.innerHTML = `
        <div class="row g-0">
            <div class="col-md-4 align-self-center">
              <img
                src="${producto.imagen}"
                class="img-fluid"
                alt="${producto.presentacion} de ${producto.nombre}"
              />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title text-center">${producto.tipoDeProducto} de ${producto.nombre}</h5>
                <p class="card-text"> ${producto.descripcion}
                </p>
                <div class="botonCompra">
                  <button id="BotonCompra" data-id = "${producto.identificador}">Agregar al carrito</button>
                </div>
              </div>
            </div>
          </div>
        </div>`;
    Propagacion.append(cardProductoNuevo);
  });
  setas.forEach((producto) => {
    const cardProductoNuevo = document.createElement("div");
    cardProductoNuevo.classList.add("card");
    cardProductoNuevo.classList.add("mb-3");
    cardProductoNuevo.setAttribute("style", "max-width: 100%");
    cardProductoNuevo.setAttribute("data-aos", "fade-right");
    cardProductoNuevo.innerHTML = `
        <div class="row g-0">
            <div class="col-md-4 align-self-center">
              <img
                src="${producto.imagen}"
                class="img-fluid"
                alt="${producto.presentacion} de ${producto.nombre}"
              />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title text-center">${producto.tipoDeProducto} de ${producto.nombre}</h5>
                <p class="card-text"> ${producto.descripcion}
                </p>
                <div class="botonCompra">
                <button id="BotonCompra" data-id = "${producto.identificador}">Agregar al carrito</button>
                </div>
              </div>
            </div>
          </div>
        </div>`;
    Propagacion.append(cardProductoNuevo);
  });
  lc.forEach((producto) => {
    const cardProductoNuevo = document.createElement("div");
    cardProductoNuevo.classList.add("card");
    cardProductoNuevo.classList.add("mb-3");
    cardProductoNuevo.setAttribute("style", "max-width: 100%");
    cardProductoNuevo.setAttribute("data-aos", "fade-right");
    cardProductoNuevo.innerHTML = `
        <div class="row g-0">
            <div class="col-md-4 align-self-center">
              <img
                src="${producto.imagen}"
                class="img-fluid"
                alt="${producto.presentacion} de ${producto.nombre}"
              />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title text-center">${producto.tipoDeProducto} de ${producto.nombre}</h5>
                <p class="card-text"> ${producto.descripcion}
                </p>
                <div class="botonCompra">
                  <button id="BotonCompra" data-id = "${producto.identificador}">Agregar al carrito</button>
                </div>
              </div>
            </div>
          </div>
        </div>`;
    Propagacion.append(cardProductoNuevo);
  });
  grainSpawn.forEach((producto) => {
    const cardProductoNuevo = document.createElement("div");
    cardProductoNuevo.classList.add("card");
    cardProductoNuevo.classList.add("mb-3");
    cardProductoNuevo.setAttribute("style", "max-width: 100%");
    cardProductoNuevo.setAttribute("data-aos", "fade-right");
    cardProductoNuevo.innerHTML = `
        <div class="row g-0">
            <div class="col-md-4 align-self-center">
              <img
                src="${producto.imagen}"
                class="img-fluid"
                alt="${producto.presentacion} de ${producto.nombre}"
              />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title text-center">${producto.tipoDeProducto} de ${producto.nombre}</h5>
                <p class="card-text"> ${producto.descripcion}
                </p>
                <div class="botonCompra">
                  <button id="BotonCompra" data-id = "${producto.identificador}">Agregar al carrito</button>
                </div>
              </div>
            </div>
          </div>
        </div>`;
    Propagacion.append(cardProductoNuevo);
  });
  placaPetri.forEach((producto) => {
    const cardProductoNuevo = document.createElement("div");
    cardProductoNuevo.classList.add("card");
    cardProductoNuevo.classList.add("mb-3");
    cardProductoNuevo.setAttribute("style", "max-width: 100%");
    cardProductoNuevo.setAttribute("data-aos", "fade-right");
    cardProductoNuevo.innerHTML = `
        <div class="row g-0">
            <div class="col-md-4 align-self-center">
              <img
                src="${producto.imagen}"
                class="img-fluid"
                alt="${producto.presentacion} de ${producto.nombre}"
              />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title text-center">${producto.tipoDeProducto} de ${producto.nombre}</h5>
                <p class="card-text"> ${producto.descripcion}
                </p>
                <div class="botonCompra">
                 <button id="BotonCompra" data-id = "${producto.identificador}">Agregar al carrito</button>
                </div>
              </div>
            </div>
          </div>
        </div>`;
    Propagacion.append(cardProductoNuevo);
  });
  const BotonCompra = document.querySelectorAll("#BotonCompra");
  BotonCompra.forEach((boton) => {
    boton.addEventListener("click", agregarAlCarrito);
  });
};

//FUNCION: Agregar al Carrito //

const renderizarCarrito = () => {
  carrito.forEach((producto) => {
    const productoDelCarrito = document.createElement("div");
    productoDelCarrito.classList.add("card");
    productoDelCarrito.classList.add("mb-3");
    productoDelCarrito.setAttribute("style", "max-width: 100%");
    productoDelCarrito.setAttribute("data-aos", "fade-right");
    productoDelCarrito.innerHTML = `
        <div class="row g-0">
            <div class="col-md-4 align-self-center">
              <img
                src="${producto.imagen}"
                class="img-fluid"
                alt="${producto.presentacion} de ${producto.nombre}"
              />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title text-center">${producto.tipoDeProducto} de ${producto.nombre}</h5>
              </div>
            </div>
          </div>
        </div>`;

    contenedorCarrito.append(productoDelCarrito);
  });
};

const agregarAlCarrito = (e) => {
  const idProductoElegido = e.target.getAttribute("data-id");
  const productoSeleccionadoAlCarrito = todosProductos.find(
    (producto) => producto.identificador == idProductoElegido
  );
  carrito.push(productoSeleccionadoAlCarrito);
  localStorage.setItem("carrito", JSON.stringify(carrito));
  console.log(carrito);
  // renderizarCarrito();
};

const carritoToLocalStorage = () => {};

// EVENT LISTENERS

searchBarButton.addEventListener("click", () => {
  console.log(searchBarInput.value);
});

verCarritoButton.addEventListener("click", carritoToLocalStorage());

//EJECUCIONES//
renderizacionDeProductos();

/* 
// función para listar el array con productos cargados
function listarProductos() {
  console.table(productos);
}

// ordenar listado por cantidad
function ordenar() {
  let productosOrdenados = productos.sort((a, b) => {
    if (a.Cantidad > b.Cantidad) {
      return 1;
    }
    if (a.Cantidad < b.Cantidad) {
      return -1;
    }
    return 0;
  });
  console.table(productosOrdenados);
} */

// Insercion de Botones //

/* let botonListar = document.querySelector("#listarProd");
botonListar.addEventListener("click", listarProductos);

let botonAgregar = document.querySelector("#agregarProd");
botonAgregar.addEventListener("click", agregarProducto);

let botonOrdenar = document.querySelector("#ordenarProd");
botonOrdenar.addEventListener("click", ordenar);
 */
