// definición de la clase Producto

const IVA = 1.21;

class Producto {
  constructor(
    id,
    nombre,
    tipoDeProducto,
    familiaDeProducto,
    presentacion,
    importe,
    img,
    descripcion
  ) {
    this.identificador = id;
    this.nombre = nombre;
    this.tipoDeProducto = tipoDeProducto;
    this.familiaDeProducto = familiaDeProducto;
    this.presentacion = presentacion;
    this.importe = importe;
    this.imagen = img;
    this.descripcion = descripcion;
  }
  precioFinal() {
    return parseFloat((this.importe * IVA).toFixed(2));
  }
}

// creación de un identificador aleatorio automático
const creoID = () => parseInt(Math.random() * 10000);

// datos del producto

const tinturaGanoderma = new Producto(
  creoID(),
  "Ganoderma Lucidum",
  "tintura",
  "alcoholaturas",
  "50Ml",
  1000,
  "../assets/img/goteros.jpg",
  "Otra manera de incoporar la nutrición del reino fungi es a través de nuestras extracciones alcoholicas que permiten concentrar la mayor parte de los componentes medicinales sin necesidad de consumir cuerpos fructiferos de la variedad deseada. Cada alcoholatura se trabaja en un proceso de extracción a alta presión, dando como resultado un suplemento de alta calidad y de prolongada durabilidad. Nuestras destilaciones se realizan integramente en alcohol de cereal apto para consumo humano y se entregan en presentacion es de 30ml, 50ML y 100ML."
);
const tinturaHericium = new Producto(
  creoID(),
  "Hericium Erinaceum",
  "tintura",
  "alcoholaturas",
  "50Ml",
  1000,
  "../assets/img/goteros.jpg",
  "Otra manera de incoporar la nutrición del reino fungi es a través de nuestras extracciones alcoholicas que permiten concentrar la mayor parte de los componentes medicinales sin necesidad de consumir cuerpos fructiferos de la variedad deseada. Cada alcoholatura se trabaja en un proceso de extracción a alta presión, dando como resultado un suplemento de alta calidad y de prolongada durabilidad. Nuestras destilaciones se realizan integramente en alcohol de cereal apto para consumo humano y se entregan en presentacion es de 30ml, 50ML y 100ML."
);
const tinturaCordiceps = new Producto(
  creoID(),
  "Cordiceps Militaris",
  "tintura",
  "alcoholaturas",
  "50Ml",
  1000,
  "../assets/img/goteros.jpg",
  "Otra manera de incoporar la nutrición del reino fungi es a través de nuestras extracciones alcoholicas que permiten concentrar la mayor parte de los componentes medicinales sin necesidad de consumir cuerpos fructiferos de la variedad deseada. Cada alcoholatura se trabaja en un proceso de extracción a alta presión, dando como resultado un suplemento de alta calidad y de prolongada durabilidad. Nuestras destilaciones se realizan integramente en alcohol de cereal apto para consumo humano y se entregan en presentacion es de 30ml, 50ML y 100ML."
);

const setaGanoderma = new Producto(
  creoID(),
  "Ganoderma Lucidum",
  "seta",
  "comestibles",
  "1 Kg.",
  1000,
  "../assets/img/goteros.jpg",
  "Parte de el aporte medicinal de este maravilloso reino fungi puede ser incorporado a través de las deliciosas setas gourmet. Cada cosecha es realizada bajo los mas altos estandares de asepsia, asegurando una correcta recolección y guardado para su posterior consumo. Las setas pueden consumirse frescas o deshidratadas en una incontable variedad de recetas y formatos. Mediante un cuidado proceso de secado a baja temperatura y escasa exposición a la luz solar, nuestras setas se destacan por mantener buena textura y conservar los aromas propios de cada variedad."
);

const setaHericium = new Producto(
  creoID(),
  "Hericium Erinaceum",
  "seta",
  "comestibles",
  "1 kg.",
  1000,
  "../assets/img/goteros.jpg",
  "Parte de el aporte medicinal de este maravilloso reino fungi puede ser incorporado a través de las deliciosas setas gourmet. Cada cosecha es realizada bajo los mas altos estandares de asepsia, asegurando una correcta recolección y guardado para su posterior consumo. Las setas pueden consumirse frescas o deshidratadas en una incontable variedad de recetas y formatos. Mediante un cuidado proceso de secado a baja temperatura y escasa exposición a la luz solar, nuestras setas se destacan por mantener buena textura y conservar los aromas propios de cada variedad."
);
const setaCordiceps = new Producto(
  creoID(),
  "Cordiceps Militaris",
  "seta",
  "comestibles",
  "1 kg.",
  1000,
  "../assets/img/goteros.jpg",
  "Parte de el aporte medicinal de este maravilloso reino fungi puede ser incorporado a través de las deliciosas setas gourmet. Cada cosecha es realizada bajo los mas altos estandares de asepsia, asegurando una correcta recolección y guardado para su posterior consumo. Las setas pueden consumirse frescas o deshidratadas en una incontable variedad de recetas y formatos. Mediante un cuidado proceso de secado a baja temperatura y escasa exposición a la luz solar, nuestras setas se destacan por mantener buena textura y conservar los aromas propios de cada variedad."
);

const lcGanoderma = new Producto(
  creoID(),
  "Ganoderma Lucidum",
  "Cultura Liquida",
  "propagacion",
  "10 ml.",
  1000,
  "../assets/img/goteros.jpg",
  "La Liquid Culture (Cultura Liquida) es uno de los medios de reproducción miceliar de mayor popularidad por la baja dificultad tanto en la forma de trabajo como en su forma de almacenaje y guardado. Consiste en una solucion nutritiva que permite generar una 'nube de micelio' totalmente funcional, apto para su inoculacion a grano o su depuración o conservacion en placa petri. Con una vida util superior a los 3 meses (en condiciones optimas) este metodo de propagación es sumamente rendidor si se lo trabaja de manera adecuada y permite almacenar en poco espacio muchas variedades de hongos. Nuestra cultura liquida se entrega en jeringas plasticas esterilizadas de 10 ml c/u. cerradas en bolsas esterilizadas los luz UV."
);

const lcHericium = new Producto(
  creoID(),
  "Hericium Erinaceum",
  "Cultura Liquida",
  "propagacion",
  "10 ml.",
  1000,
  "../assets/img/goteros.jpg",
  "La Liquid Culture (Cultura Liquida) es uno de los medios de reproducción miceliar de mayor popularidad por la baja dificultad tanto en la forma de trabajo como en su forma de almacenaje y guardado. Consiste en una solucion nutritiva que permite generar una 'nube de micelio' totalmente funcional, apto para su inoculacion a grano o su depuración o conservacion en placa petri. Con una vida util superior a los 3 meses (en condiciones optimas) este metodo de propagación es sumamente rendidor si se lo trabaja de manera adecuada y permite almacenar en poco espacio muchas variedades de hongos. Nuestra cultura liquida se entrega en jeringas plasticas esterilizadas de 10 ml c/u. cerradas en bolsas esterilizadas los luz UV."
);
const lcCordiceps = new Producto(
  creoID(),
  "Cordiceps Militaris",
  "Cultura Liquida",
  "propagacion",
  "10 ml.",
  1000,
  "../assets/img/goteros.jpg",
  "La Liquid Culture (Cultura Liquida) es uno de los medios de reproducción miceliar de mayor popularidad por la baja dificultad tanto en la forma de trabajo como en su forma de almacenaje y guardado. Consiste en una solucion nutritiva que permite generar una 'nube de micelio' totalmente funcional, apto para su inoculacion a grano o su depuración o conservacion en placa petri. Con una vida util superior a los 3 meses (en condiciones optimas) este metodo de propagación es sumamente rendidor si se lo trabaja de manera adecuada y permite almacenar en poco espacio muchas variedades de hongos. Nuestra cultura liquida se entrega en jeringas plasticas esterilizadas de 10 ml c/u. cerradas en bolsas esterilizadas los luz UV."
);

const petriGanoderma = new Producto(
  creoID(),
  "Ganoderma Lucidum",
  "Placas Petri",
  "propagacion",
  "90x90",
  1000,
  "../assets/img/goteros.jpg",
  "Como una novedosa tecnica de aislamiento, depuración y conservacion de cepas, tenemos disponibilidad de Placas petri de 90 x 10 (vidrio de borosilicato o plastico) con base gelificadas de PDA (Potatoe - Dextrose - Agar) con muchisimas variedades. Las placas se entregan 100% colonizadas; es por ello que los pedidos deben solicitarse con una anticipacion no menor a 10 dias habiles. Todos nuestros elementos de propagación cumplen con las mas estrictas normas de asepsia para asegurar el exito en todos tus cultivos."
);

const petriHericium = new Producto(
  creoID(),
  "Hericium Erinaceum",
  "Placas Petri",
  "propagacion",
  "90x90",
  1000,
  "../assets/img/goteros.jpg",
  "Como una novedosa tecnica de aislamiento, depuración y conservacion de cepas, tenemos disponibilidad de Placas petri de 90 x 10 (vidrio de borosilicato o plastico) con base gelificadas de PDA (Potatoe - Dextrose - Agar) con muchisimas variedades. Las placas se entregan 100% colonizadas; es por ello que los pedidos deben solicitarse con una anticipacion no menor a 10 dias habiles. Todos nuestros elementos de propagación cumplen con las mas estrictas normas de asepsia para asegurar el exito en todos tus cultivos."
);

const petriCordiceps = new Producto(
  creoID(),
  "Cordiceps Militaris",
  "Placas Petri",
  "propagacion",
  "90x90",
  1000,
  "../assets/img/goteros.jpg",
  "Como una novedosa tecnica de aislamiento, depuración y conservacion de cepas, tenemos disponibilidad de Placas petri de 90 x 10 (vidrio de borosilicato o plastico) con base gelificadas de PDA (Potatoe - Dextrose - Agar) con muchisimas variedades. Las placas se entregan 100% colonizadas; es por ello que los pedidos deben solicitarse con una anticipacion no menor a 10 dias habiles. Todos nuestros elementos de propagación cumplen con las mas estrictas normas de asepsia para asegurar el exito en todos tus cultivos."
);

const granoGanoderma = new Producto(
  creoID(),
  "Ganoderma Lucidum",
  "Grano",
  "propagacion",
  "1 Kg.",
  1000,
  "../assets/img/goteros.jpg",
  "Conocida como una de las tecnicas mas antiguas en la reproduccion de micelio, presentamos el formato de propagación 'Grain Spawn' que consiste en bolsas de polipropileno con grano inoculado y colonizado (puede variar dependiendo la disponibilidad del stock al momento de la compra) listo para ser sometido a un proceso de frutificación o disponible para realizar una nueva propagacion sobre otro sustrato. Cada bolsa de sustrato esta realizado en base a un minucioso estudio y pruebas de adaptabilidad de cada cepa entregando, unicamente, un producto de calidad y alto valor nutricional teniendo en cuenta las caracteristicas de reproduccion medioambientales de cada hongo."
);

const granoHericium = new Producto(
  creoID(),
  "Hericium Erinaceum",
  "Grano",
  "propagacion",
  "1 Kg.",
  1000,
  "../assets/img/goteros.jpg",
  "Conocida como una de las tecnicas mas antiguas en la reproduccion de micelio, presentamos el formato de propagación 'Grain Spawn' que consiste en bolsas de polipropileno con grano inoculado y colonizado (puede variar dependiendo la disponibilidad del stock al momento de la compra) listo para ser sometido a un proceso de frutificación o disponible para realizar una nueva propagacion sobre otro sustrato. Cada bolsa de sustrato esta realizado en base a un minucioso estudio y pruebas de adaptabilidad de cada cepa entregando, unicamente, un producto de calidad y alto valor nutricional teniendo en cuenta las caracteristicas de reproduccion medioambientales de cada hongo."
);
const granoCordiceps = new Producto(
  creoID(),
  "Cordiceps Militaris",
  "Grano",
  "propagacion",
  "1 Kg.",
  1000,
  "../assets/img/goteros.jpg",
  "Conocida como una de las tecnicas mas antiguas en la reproduccion de micelio, presentamos el formato de propagación 'Grain Spawn' que consiste en bolsas de polipropileno con grano inoculado y colonizado (puede variar dependiendo la disponibilidad del stock al momento de la compra) listo para ser sometido a un proceso de frutificación o disponible para realizar una nueva propagacion sobre otro sustrato. Cada bolsa de sustrato esta realizado en base a un minucioso estudio y pruebas de adaptabilidad de cada cepa entregando, unicamente, un producto de calidad y alto valor nutricional teniendo en cuenta las caracteristicas de reproduccion medioambientales de cada hongo."
);

const todosProductos = [
  tinturaGanoderma,
  tinturaHericium,
  tinturaCordiceps,
  setaGanoderma,
  setaHericium,
  setaCordiceps,
  lcGanoderma,
  lcHericium,
  lcCordiceps,
  petriGanoderma,
  petriHericium,
  petriCordiceps,
  granoGanoderma,
  granoHericium,
  granoCordiceps,
];

let nombre = todosProductos[0].nombre;
console.log(nombre);

const placaPetri = todosProductos.filter((Producto) =>
  Producto.tipoDeProducto.includes("Placas Petri")
);
