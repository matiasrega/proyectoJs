//VARIABLES
let todosProductos = [];
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
//const ordenadoCantidad = [];

//QUERY SELECTORS GENERALES
const searchBarInput = document.querySelector("#searchBarInput");
const searchBarButton = document.querySelector("#searchBarButton");
const irACarritoButton = document.querySelector("#irACarritoButton");
const Productos = document.querySelector("#Productos");
const ecomerceDiv = document.querySelector("#ecomerceDiv");

//FUNCIONES //

// FUNCION: Renderizacion de Productos  //
const renderizacionDeProductos = () => {
  todosProductos.forEach((producto) => {
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
    Productos.append(cardProductoNuevo);
  });
  const BotonCompra = document.querySelectorAll("#BotonCompra");
  BotonCompra.forEach((boton) => {
    boton.addEventListener("click", agregarAlCarrito);
    boton.addEventListener("click", actualizarPagina);
  });
};

// Actualiza pagina luego de seleccionar producto para mostrar Imagen de carrito si el LocalStorage tiene productos
const actualizarPagina = () => {
  location.reload();
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

// Funcion de Filtro Busqueda //
const filtroBusqueda = (e) => {
  const productoBuscado = document
    .getElementById("searchBarInput")
    .value.toLowerCase();
  const productoBuscadofiltrado = todosProductos.filter(
    (producto) => producto.tipoDeProducto.toLowerCase() == productoBuscado
  );
  console.log(productoBuscadofiltrado);
};

// Renderiza imagen de carrito para ir CarritodeCompra.HTML //
carritoVisible = () => {
  const carritoVisible = document.createElement("div");
  carritoVisible.classList.add("divCarrito");
  carritoVisible.innerHTML = `<a href="../page/carritoDeCompra.html"><img src="../assets/img/shopping-cart.svg" alt="shopping-cart"></a>
        <p>IR AL CARRITO DE COMPRAS</p>
        </div>`;
  ecomerceDiv.append(carritoVisible);
};

const renderizarImagenCarrito = () => {
  if (carrito.length > 0) {
    carritoVisible();
  } else {
    return false;
  }
};

// EVENT LISTENERS

// BARRA Y LUPA DE BUSQUEDA DE PRODUCTOS
searchBarButton.addEventListener("click", filtroBusqueda);
//Busqueda con tecla "ENTER"
searchBarInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    filtroBusqueda();
  }
});
//Salida y borrado de campo con tecla "Escape"
searchBarInput.addEventListener("keydown", (e) => {
  if (e.which == 27) {
    searchBarInput.value = "";
  }
});

/* searchBarButton.addEventListener("click", () => {
  console.log(searchBarInput.value);
});*/

//EJECUCIONES//
fetch(`../Js/data.json`)
  .then((res) => res.json())
  .then((data) => {
    todosProductos = data;
    renderizacionDeProductos();
  });

renderizarImagenCarrito();

// ordenar listado por cantidad
/*function ordenar() {
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
