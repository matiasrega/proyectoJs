// definición de las constantes que servirán para los arrays
const carrito = [];
const ordenadoCantidad = [];

//Funciones //
const nombreTitulo = (nombreTitulo) => {
  for (i = 0; i < nombreTitulo.length; i++) {
    nombreTitulo[i].nombre;
  }
};

nombreTitulo(todosProductos);

console.log(nombreTitulo);

// Renderizacion de Productos //
const Propagacion = document.querySelector("#Propagacion");

placaPetri.forEach((producto) => {
  const cardProductoNuevo = document.createElement("div");
  cardProductoNuevo.className = "card mb-3";
  cardProductoNuevo.setAttribute("style", "max-width: 100%");
  cardProductoNuevo.setAttribute("data-aos", "fade-right");
  cardProductoNuevo.innerHTML = `
        <div class="row g-0">
            <div class="col-md-4 align-self-center">
              <img
                src="../assets/img/placa petri 1.jpg"
                class="img-fluid"
                alt="Placa Petri"
              />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title text-center">Placas Petri de ${nombreTitulo(
                  placaPetri
                )} </h5>
                <p class="card-text">
                  Como una novedosa tecnica de aislamiento, depuración y
                  conservacion de cepas, tenemos disponibilidad de Placas petri
                  de 90 x 10 (vidrio de borosilicato o plastico) con base
                  gelificadas de PDA (Potatoe - Dextrose - Agar) con muchisimas
                  variedades. Las placas se entregan 100% colonizadas; es por
                  ello que los pedidos deben solicitarse con una anticipacion no
                  menor a 10 dias habiles. Todos nuestros elementos de
                  propagación cumplen con las mas estrictas normas de asepsia
                  para asegurar el exito en todos tus cultivos.
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

/*       <div class="propagacion">
        <h4>Propagacion y Reproduccion Micelial</h4>

        <div data-aos="fade-right" class="card mb-3" style="max-width: 100%">
          <div class="row g-0">
            <div class="col-md-4 align-self-center">
              <img
                src="../assets/img/placa petri 1.jpg"
                class="img-fluid"
                alt="Placa Petri"
              />
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <h5 class="card-title text-center">Placas Petri</h5>
                <p class="card-text">
                  Como una novedosa tecnica de aislamiento, depuración y
                  conservacion de cepas, tenemos disponibilidad de Placas petri
                  de 90 x 10 (vidrio de borosilicato o plastico) con base
                  gelificadas de PDA (Potatoe - Dextrose - Agar) con muchisimas
                  variedades. Las placas se entregan 100% colonizadas; es por
                  ello que los pedidos deben solicitarse con una anticipacion no
                  menor a 10 dias habiles. Todos nuestros elementos de
                  propagación cumplen con las mas estrictas normas de asepsia
                  para asegurar el exito en todos tus cultivos.
                </p>
                <div class="botonCompra">
                  <button>Agregar al carrito</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
 */
// row g-0 ----> nombre de las class de las cards
//col-md-8 ----> nombre de la clase del innertext de la descripcion (incluye el titulo)

//const cards = document.getElementsByClassName("row g-0");
//console.log(cards);

//const innerTextCard = document.getElementsByClassName("col-md-8");
//console.log(innerTextCard);

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
