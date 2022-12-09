//VARIABLES
let todosProductos = [];
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
let iva = 1.21;
//const ordenadoCantidad = [];

//QUERY SELECTORS GENERALES
const searchBarInput = document.querySelector("#searchBarInput");
const searchBarButton = document.querySelector("#searchBarButton");
const irACarritoButton = document.querySelector("#irACarritoButton");
const Productos = document.querySelector("#Productos");
const ecomerceDiv = document.querySelector("#ecomerceDiv");
const divCarrito = document.querySelector("#DivCarrito");

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
                <h5 class="card-title text-center">${producto.tipoDeProducto.toUpperCase()} de ${producto.nombre.toUpperCase()}</h5> <p class="precioProducto">PRECIO: $${
      producto.importe * iva
    }</p>
                <p class="card-text"> ${producto.descripcion}
                </p>
                <div class="botonCompra">
                  <button id="BotonCompra" class="btnInteractivo3" data-id = "${
                    producto.identificador
                  }">Agregar al carrito</button>
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
    boton.addEventListener("click", sweetAlertPopA);
  });
};

//SweetAlert al agregar al carrito
const sweetAlertPopA = () => {
  let timerInterval;
  Swal.fire({
    background: "hsl(270deg, 3%, 87%)",
    confirmButtonColor: "hsl(278deg, 68%, 11%)",
    toast: true,
    title: "Producto Agregado al carrito",
    html: "",
    timer: 900,
    timerProgressBar: true,
    didOpen: () => {
      Swal.showLoading();
      const b = Swal.getHtmlContainer().querySelector("b");
      timerInterval = setInterval(() => {
        b.textContent = Swal.getTimerLeft();
      }, 100);
    },
    willClose: () => {
      clearInterval(timerInterval);
    },
  }).then((result) => {
    if (result.dismiss === Swal.DismissReason.timer) {
    }
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
};

// Funcion de Filtro Busqueda //
const filtroBusqueda = () => {
  const inputProductoBuscado = document
    .getElementById("searchBarInput")
    .value.toLowerCase();
  const productofiltradoDelTotal = todosProductos.filter(
    (producto) =>
      producto.tipoDeProducto.includes(inputProductoBuscado.toLowerCase()) ||
      producto.nombre.includes(inputProductoBuscado.toLowerCase()) ||
      producto.familiaDeProducto.includes(inputProductoBuscado.toLowerCase()) ||
      producto.presentacion.includes(inputProductoBuscado.toLowerCase())
    /*       producto.descripcion.includes(inputProductoBuscado.toLowerCase()) */
  );
  Productos.innerHTML = "";
  productofiltradoDelTotal.forEach((producto) => {
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
                <h5 class="card-title text-center" >${producto.tipoDeProducto.toUpperCase()} de ${producto.nombre.toUpperCase()}</h5><p class="precioProducto">PRECIO: $${
      producto.importe
    }</p>
                <p class="card-text"> ${producto.descripcion}
                </p>
                <div class="botonCompra">
                  <button id="BotonCompra" class="btnInteractivo3" data-id = "${
                    producto.identificador
                  }">Agregar al carrito</button>
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
    boton.addEventListener("click", sweetAlertPopA);
  });
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
    Productos.innerHTML = "";
    renderizacionDeProductos();
  }
});

//EJECUCIONES//
fetch(`../Js/data.json`)
  .then((res) => res.json())
  .then((data) => {
    todosProductos = data;
    renderizacionDeProductos();
  });
