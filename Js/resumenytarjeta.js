// Variable de validacion;
let totalAPagar = JSON.parse(localStorage.getItem("totalAPagar")) || [];

// Display None - Pago Online
const pagoOnline = document.querySelector("#pagoOnline");
const visualizaPagoOnline = document.querySelector(
  ".main-container-displayNone"
);

//Pago en destino
const pagoEnDestino = document.querySelector("#pagoEnDestino");
const visualizaPagoEnDestino = document.querySelector(
  ".formularioEnvio-displayNone"
);
const visualizaPagoEnDestinoContainer = document.querySelector(
  ".formularioEnvio-displayNone__container"
);

// Switch entre las 2 clases de pago
const mainContainer = document.querySelector(".main-container");
const mainCointainerDispNone = document.querySelector(
  ".main-container-displayNone"
);

// Confirmar datos de envio y fin de compra
const confirmaYFinaliza = document.querySelector("#confirmaYFinalizanBtn");

// Verifica datos de envio completos
let envioNombreyApellido = document.querySelector("#NombreYApellido");
let enviotelefono = document.querySelector("#telefono");
let envioemail = document.querySelector("#email");
let enviodireccion = document.querySelector("#direccion");

// Titular de la Tarjeta
let nameCard = document.querySelector(".card__details-name");
let nameInput = document.querySelector("#cardholder");
let nameErrorDiv = document.querySelector(".form__cardholder--error");

// Numero de la Tarjeta
let numberCard = document.querySelector(".card__number");
let numberInput = document.querySelector("#cardNumber");
let numberErrorDiv = document.querySelector(".form__inputnumber--error");

// MM
let monthCard = document.querySelector(".card__month");
let monthInput = document.querySelector("#cardMonth");
let monthErrorDiv = document.querySelector(".form__input-mm--error");

// AA
let yearCard = document.querySelector(".card__year");
let yearInput = document.querySelector("#cardYear");
let yearErrorDiv = document.querySelector(".form__input-yy--error");

// COD.
let cvcCard = document.querySelector(".card-back__cvc");
let cvcInput = document.querySelector("#cardCvc");
let cvcErrorDiv = document.querySelector(".form__input-cvc--error");

//Resumen a pagar
const resumenAPagar = document.querySelector("#main-pantallaPago");

const divResumenAPagar = document.createElement("div");
divResumenAPagar.classList.add("divResumenAPagar");
divResumenAPagar.innerHTML = `
  <div class="resumenProductos">
  <p>Total a pagar</p>
  <p>$ ${totalAPagar}<p>
  </div>`;
resumenAPagar.append(divResumenAPagar);

// Renderizado Elegir medio de pago

// Pago Online (Habilita tarjeta de credito y Envio)

const habilitaPagoOnline = () => {
  visualizaPagoOnline.classList.add("main-container");
  visualizaPagoOnline.classList.remove("main-container-displayNone");
  visualizaPagoEnDestino.classList.add("formularioEnvio");
  visualizaPagoEnDestino.classList.remove("formularioEnvio-displayNone");
  visualizaPagoEnDestinoContainer.classList.add("formularioEnvio__container");
  visualizaPagoEnDestinoContainer.classList.remove(
    "formularioEnvio-displayNone__container"
  );
};

// Pago al recibir el producto (Habilita solo Envio)
const formularioEnvio = () => {
  visualizaPagoEnDestino.classList.add("formularioEnvio");
  visualizaPagoEnDestino.classList.remove("formularioEnvio-displayNone");
  visualizaPagoEnDestinoContainer.classList.add("formularioEnvio__container");
  visualizaPagoEnDestinoContainer.classList.remove(
    "formularioEnvio-displayNone__container"
  );
  visualizaPagoOnline.classList.add("main-container-displayNone");
  visualizaPagoOnline.classList.remove("main-container");
};

pagoOnline.addEventListener("click", habilitaPagoOnline);
pagoEnDestino.addEventListener("click", formularioEnvio);

// Finalizar Compra y confirmar datos (No permite avanzar si no hay datos de envio)

confirmaYFinaliza.addEventListener("click", (event) => {
  event.preventDefault();
  if (
    envioNombreyApellido.value == "" ||
    enviotelefono.value == "" ||
    envioemail.value == "" ||
    enviodireccion.value == ""
  ) {
    Swal.fire({
      background: "hsl(270deg, 3%, 87%)",
      confirmButtonColor: "hsl(278deg, 68%, 11%)",
      icon: "error",
      title: "??Faltan datos!",
      text: "Complet?? todos los datos del envio para que te lleguen tus productos",
      toast: true,
    });
  } else {
    Swal.fire({
      icon: "success",
      title:
        "??Gracias por tu compra!, te enviaremos un mail a tu casilla en unos minutos",
      showConfirmButton: true,
      timer: 2500,
    });
  }
});

// Ingreso dinamico del nombre

nameInput.addEventListener("input", () => {
  if (nameInput.value == "") {
    nameCard.innerText = "JOSE P. PEREZ";
  } else {
    nameCard.innerText = nameInput.value;
  }
});

//Ingreso dinamico del numero
numberInput.addEventListener("input", () => {
  // Validando que haya una letra,
  let regExp = /[A-z]/g;
  if (regExp.test(numberInput.value)) {
    mostrarError(
      numberInput,
      numberErrorDiv,
      "formato erroneo, incluir numeros unicamente"
    );
  } else {
    // borrando espacios ingresados por el usuario, agregando espacios cada 4 digitos, y borrando el espacio final
    numberInput.value = numberInput.value
      .replace(/\s/g, "")
      .replace(/([0-9]{4})/g, "$1 ")
      .trim();
    mostrarError(numberInput, numberErrorDiv, "", false);
  }

  // Actualizacion de la tarjeta con los datos:
  numberCard.innerText = numberInput.value;

  // Mostrando los 0s por defecto cuando no se ha ingresado nada
  if (numberInput.value == "") {
    numberCard.innerText = "0000 0000 0000 0000";
  }
});

// Ingreso dinamico del mes
monthInput.addEventListener("input", () => {
  monthCard.innerText = monthInput.value;
  validarLetras(monthInput, monthErrorDiv);
});

// Ingreso dinamico del a??o
yearInput.addEventListener("input", () => {
  yearCard.innerText = yearInput.value;
  validarLetras(yearInput, yearErrorDiv);
});

// Ingreso dinamico de cvc
cvcInput.addEventListener("input", () => {
  cvcCard.innerText = cvcInput.value;
  validarLetras(cvcInput, cvcErrorDiv);
});

// Boton Confirm

let confirmBtn = document.querySelector(".form__submit");

let nameValidation = false;
let numberValidation = false;
let monthValidation = false;
let yearValidation = false;
let cvcValidation = false;

// Secciones Formulario y Gracias
let formSection = document.querySelector(".form");
let thanksSection = document.querySelector(".thanks-section");

confirmBtn.addEventListener("click", (event) => {
  event.preventDefault();

  // Validar Nombre
  if (verificarLlenado(nameInput, nameErrorDiv)) {
    nameValidation = true;
  } else {
    nameValidation = false;
  }

  // Validad Numero
  if (verificarLlenado(numberInput, numberErrorDiv) == true) {
    if (numberInput.value.length == 19) {
      mostrarError(numberInput, numberErrorDiv, "", false);
      numberValidation = true;
    } else {
      mostrarError(numberInput, numberErrorDiv, "numero erroneo");
      numberValidation = false;
    }
  }

  // Validar Mes
  if (verificarLlenado(monthInput, monthErrorDiv)) {
    if (parseInt(monthInput.value) > 0 && parseInt(monthInput.value) <= 12) {
      mostrarError(monthInput, monthErrorDiv, "", false);
      monthValidation = true;
    } else {
      mostrarError(monthInput, monthErrorDiv, "Mes erroneo");
      monthValidation = false;
    }
  }

  // Validar a??o
  if (verificarLlenado(yearInput, yearErrorDiv)) {
    if (parseInt(yearInput.value) > 22 && parseInt(yearInput.value) <= 27) {
      mostrarError(yearInput, yearErrorDiv, "", false);
      yearValidation = true;
    } else {
      mostrarError(yearInput, yearErrorDiv, "A??o erroneo");
      yearValidation = false;
    }
  }

  // Validad cvc
  if (verificarLlenado(cvcInput, cvcErrorDiv)) {
    if (cvcInput.value.length == 3) {
      mostrarError(cvcInput, cvcErrorDiv, "", false);
      cvcValidation = true;
    } else {
      mostrarError(cvcInput, cvcErrorDiv, "codigo erroneo");
      cvcValidation = false;
    }
  }

  //SI LOS DATOS SE COMPLETAN, SE MUESTRA LA SECCION DE GRACIAS
  if (
    nameValidation == true &&
    numberValidation == true &&
    monthValidation == true &&
    yearValidation == true &&
    cvcValidation == true
  ) {
    formSection.style.display = "none";
    thanksSection.style.display = "block";
  }
});

// FUNCIONES

function mostrarError(divInput, divError, msgError, show = true) {
  if (show) {
    divError.innerText = msgError;
    divInput.style.borderColor = "#FF0000";
  } else {
    divError.innerText = msgError;
    divInput.style.borderColor = "hsl(270, 3%, 87%)";
  }
}

function verificarLlenado(divInput, divError) {
  if (divInput.value.length > 0) {
    mostrarError(divInput, divError, "", false);
    return true;
  } else {
    mostrarError(divInput, divError, "Campo obligatorio");
    return false;
  }
}

function validarLetras(input, divError) {
  // Validando que haya una letra,
  let regExp = /[A-z]/g;
  if (regExp.test(input.value)) {
    mostrarError(input, divError, "Formato erroneo, acepta solo numeros");
  } else {
    mostrarError(input, divError, "", false);
  }
}
