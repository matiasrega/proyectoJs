// definición de las constantes que servirán para los arrays
const carrito = [];
const ordenadoCantidad = [];

//Funciones //

// Renderizacion de Productos //
const Propagacion = document.querySelector("#Propagacion");
const Consumibles = document.querySelector("#Consumibles");

alcoholaturas.forEach((producto5) => {
  const cardProductoNuevo = document.createElement("div");
  cardProductoNuevo.className = "card mb-3";
  cardProductoNuevo.setAttribute("style", "max-width: 100%");
  cardProductoNuevo.setAttribute("data-aos", "fade-right");
  cardProductoNuevo.innerHTML = `
        <div class="row g-0">
            <div class="col-md-4 align-self-center">
              <img
                src="${producto5.imagen}"
                class="img-fluid"
                alt="${producto5.presentacion} de ${producto5.nombre}"
              />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title text-center">${producto5.tipoDeProducto} de ${producto5.nombre}</h5>
                <p class="card-text"> ${producto5.descripcion}
                </p>
                <div class="botonCompra">
                  <button>Agregar al carrito</button>
                </div>
              </div>
            </div>
          </div>
        </div>`;
  Propagacion.append(cardProductoNuevo);
});
setas.forEach((producto4) => {
  const cardProductoNuevo = document.createElement("div");
  cardProductoNuevo.className = "card mb-3";
  cardProductoNuevo.setAttribute("style", "max-width: 100%");
  cardProductoNuevo.setAttribute("data-aos", "fade-right");
  cardProductoNuevo.innerHTML = `
        <div class="row g-0">
            <div class="col-md-4 align-self-center">
              <img
                src="${producto4.imagen}"
                class="img-fluid"
                alt="${producto4.presentacion} de ${producto4.nombre}"
              />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title text-center">${producto4.tipoDeProducto} de ${producto4.nombre}</h5>
                <p class="card-text"> ${producto4.descripcion}
                </p>
                <div class="botonCompra">
                  <button>Agregar al carrito</button>
                </div>
              </div>
            </div>
          </div>
        </div>`;
  Propagacion.append(cardProductoNuevo);
});
lc.forEach((producto3) => {
  const cardProductoNuevo = document.createElement("div");
  cardProductoNuevo.className = "card mb-3";
  cardProductoNuevo.setAttribute("style", "max-width: 100%");
  cardProductoNuevo.setAttribute("data-aos", "fade-right");
  cardProductoNuevo.innerHTML = `
        <div class="row g-0">
            <div class="col-md-4 align-self-center">
              <img
                src="${producto3.imagen}"
                class="img-fluid"
                alt="${producto3.presentacion} de ${producto3.nombre}"
              />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title text-center">${producto3.tipoDeProducto} de ${producto3.nombre}</h5>
                <p class="card-text"> ${producto3.descripcion}
                </p>
                <div class="botonCompra">
                  <button>Agregar al carrito</button>
                </div>
              </div>
            </div>
          </div>
        </div>`;
  Propagacion.append(cardProductoNuevo);
});
grainSpawn.forEach((producto2) => {
  const cardProductoNuevo = document.createElement("div");
  cardProductoNuevo.className = "card mb-3";
  cardProductoNuevo.setAttribute("style", "max-width: 100%");
  cardProductoNuevo.setAttribute("data-aos", "fade-right");
  cardProductoNuevo.innerHTML = `
        <div class="row g-0">
            <div class="col-md-4 align-self-center">
              <img
                src="${producto2.imagen}"
                class="img-fluid"
                alt="${producto2.presentacion} de ${producto2.nombre}"
              />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title text-center">${producto2.tipoDeProducto} de ${producto2.nombre}</h5>
                <p class="card-text"> ${producto2.descripcion}
                </p>
                <div class="botonCompra">
                  <button>Agregar al carrito</button>
                </div>
              </div>
            </div>
          </div>
        </div>`;
  Propagacion.append(cardProductoNuevo);
});
placaPetri.forEach((producto) => {
  const cardProductoNuevo = document.createElement("div");
  cardProductoNuevo.className = "card mb-3";
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
                  <button>Agregar al carrito</button>
                </div>
              </div>
            </div>
          </div>
        </div>`;
  Propagacion.append(cardProductoNuevo);
});

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
