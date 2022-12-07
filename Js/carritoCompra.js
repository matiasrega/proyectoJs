//VARIABLES
let iva = 1.21;

//VARIABLE DE VALIDACION
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

//QUERY SELECTORS GENERALES
const contenedorCarrito = document.querySelector("#contenedorCarrito");
const finalizacionDeCompra = document.querySelector("#finalizacionDeCompra");

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
                 <p class="card-text"> ${producto.tipoDeProducto.toUpperCase()} de ${producto.nombre.toUpperCase()}</p>
                </p>
                <div class="botonEliminar">
                  <button id="BotonEliminar"class="btnInteractivo3" data-id = "${
                    producto.identificador
                  }">Eliminar Producto</button>
                </div>
              </div>
            </div>
            <div class="col-sm-2 align-self-center precioFinal">
              <p class="precioFinal__p"> PRECIO</p> <p>$${producto.importe}</p>
              <p class="precioFinal__p"> IVA (${iva * 100 - 100}%) </p> <p>$${
      producto.importe * iva - producto.importe
    } </p>
              <p class="precioFinal__p"> P.FINAL</p><p>$${precioFinal()} </p>
            </div>
          </div>
        </div>`;
    contenedorCarrito.append(productoDelCarrito);
    function precioFinal() {
      return producto.importe * 1.21;
    }
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
  sweetAlertPopB();
  actualizarPagina();
};

const renderizarResumenCarrito = () => {
  const resumenTotal = carrito.reduce(
    (acumulador, producto) => acumulador + producto.importe * iva,
    0
  );
  const divResumenProductos = document.createElement("div");
  divResumenProductos.classList.add("divResumenProductos");
  divResumenProductos.innerHTML = `
  <div class="resumenProductos">
  <p>Total a pagar</p>
  <p>$ ${resumenTotal}<p>
  </div>`;
  finalizacionDeCompra.append(divResumenProductos);
  localStorage.setItem("totalAPagar", JSON.stringify(resumenTotal));
};

const botonesDeFinalizacion = () => {
  const finalizacionDeCompraBtn = document.createElement("div");
  finalizacionDeCompraBtn.classList.add("finalizacionDeCompraBtn");
  finalizacionDeCompraBtn.innerHTML = `                
  <div class="vaciarCarrito">
       <button id="VaciarCarrito" class="btnInteractivo">¡Vaciá todo el Carrito!</button>
  </div>
  <div class="finalizarCompra">
        <a href="../page/pantallaDePago.html" class="btnInteractivo2">¡Pagá tus productos!</a>
  </div>`;
  finalizacionDeCompra.append(finalizacionDeCompraBtn);

  const botonVaciarCarrito = document.querySelector("#VaciarCarrito");
  botonVaciarCarrito.addEventListener("click", sweetAlertPopConfirm);
};

//SweetAlert eliminar Productos del carrito
const sweetAlertPopB = () => {
  let timerInterval;
  Swal.fire({
    toast: true,
    title: "Producto eliminado del carrito",
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

// FUNCIONALIDAD DE BOTON DE VACIADO DE CARRITO //
const sweetAlertPopConfirm = () => {
  Swal.fire({
    title: "¡Estás vaciando tu carrito de Compras!",
    text: "ATENCIÓN: Esta operacion no puede revertirse",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "¡Si, quiero vaciarlo!",
    cancelButtonText: "Cancelar",
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire(
        "Vaciaste tu carrito",
        "Ahora podes llenarlo con nuevos productos",
        "success"
      );
      localStorage.removeItem("carrito");
      contenedorCarrito.innerHTML = "";
      actualizarPagina();
    }
  });
};

//RENDERIZACION HTML CON CARRITO SIN PRODUCTOS

const carritoVacio = () => {
  const mensajeCarritoVacio = document.createElement("div");
  mensajeCarritoVacio.innerHTML = `
    <div class="carritoVacio">
      <p>¡TU CARRITO ESTA VACIO!
      ¡VOLVE ATRÁS QUE SEGURO ENCONTRARÁS ALGUN PRODUCTO INTERESANTE!</p>
    </div>`;
  contenedorCarrito.append(mensajeCarritoVacio);
};

if (carrito.length > 0) {
  renderizarCarrito();
  renderizarResumenCarrito();
  botonesDeFinalizacion();
} else {
  carritoVacio();
}

//Función para actualizar cada 5 segundos(5000 milisegundos)
const actualizarPagina = () => {
  location.reload();
};
/*setInterval(actualizarPagina, 5000);*/
