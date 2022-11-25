//VARIABLES
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
const ordenadoCantidad = [];

//QUERY SELECTORS GENERALES
const searchBarInput = document.querySelector("#searchBarInput");
const searchBarButton = document.querySelector("#searchBarButton");
const irACarritoButton = document.querySelector("#irACarritoButton");
const Propagacion = document.querySelector("#Propagacion");
const Consumibles = document.querySelector("#Consumibles");
const ecomerceDiv = document.querySelector("#ecomerceDiv");

//FUNCIONES //

// FUNCION: Renderizacion de Productos  //
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
                <h5 class="card-title text-center">${producto.tipoDeProducto} de ${producto.nombre}: $${producto.importe}</h5>
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
                <h5 class="card-title text-center">${producto.tipoDeProducto} de ${producto.nombre}: $${producto.importe}</h5>
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
                <h5 class="card-title text-center">${producto.tipoDeProducto} de ${producto.nombre}: $${producto.importe}</h5>
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
                <h5 class="card-title text-center">${producto.tipoDeProducto} de ${producto.nombre}: $${producto.importe}</h5>
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
                <h5 class="card-title text-center">${producto.tipoDeProducto} de ${producto.nombre}: $${producto.importe}</h5>
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

//Agrega al Carrito
const agregarAlCarrito = (e) => {
  const idProductoElegido = e.target.getAttribute("data-id");
  const productoSeleccionadoAlCarrito = todosProductos.find(
    (producto) => producto.identificador == idProductoElegido
  );

  carrito.push(productoSeleccionadoAlCarrito);
  localStorage.setItem("carrito", JSON.stringify(carrito));
  console.log(carrito);
};

// Renderiza imagen de carrito para ir CarritodeCompra.HTML
carritoVisible = () => {
  const carritoVisible = document.createElement("div");
  carritoVisible.classList.add("divCarrito");
  carritoVisible.innerHTML = `<a href="../page/carritoDeCompra.html"><img src="../assets/img/shopping-cart.svg" alt="shopping-cart"></a>
        <p>IR AL CARRITO DE COMPRAS</p>
        </div>`;
  ecomerceDiv.append(carritoVisible);
};

/* const renderizarImagenCarrito = () => {
  if (carrito.length > 0) {
    const carritoVisible = document.createElement("div");
    carritoVisible.classList.add("divCarrito");
    carritoVisible.innerHTML = `<a href="../page/carritoDeCompra.html"><img src="../assets/img/shopping-cart.svg" alt="shopping-cart"></a>
        <p>IR AL CARRITO DE COMPRAS</p>
        </div>`;
    ecomerceDiv.append(carritoVisible);
  } else {
    return false;
  }
}; */

const renderizarImagenCarrito = () => {
  return new Promise((renderiza, rechaza) => {
    setTimeout(() => {
      if (carrito.length > 0) {
        renderiza(carritoVisible);
      } else {
        rechaza(`Error: No hay elementos en el carrito`);
      }
    }, 8000);
  });
};

// EVENT LISTENERS

/* searchBarButton.addEventListener("click", () => {
  console.log(searchBarInput.value);
}); */

//EJECUCIONES//
renderizacionDeProductos();
setInterval(() => {
  renderizarImagenCarrito()
    .then((renderiza) => {
      carritoVisible();
    })
    .catch((error) => {
      console.log(error);
    });
}, 8000);

/* 


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
