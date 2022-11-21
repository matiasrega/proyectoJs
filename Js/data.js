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

// datos del producto
/* const creoID = () => {
  for (i = 1000; i < Producto.length; i++) {
    Producto.identificador = [i];
  }
};  */

const tinturaGanoderma = new Producto(
  "000001",
  "Ganoderma Lucidum",
  "Tintura",
  "alcoholaturas",
  "50Ml",
  1000,
  "../assets/img/goteros.jpg",
  "Otra manera de incoporar la nutrición del reino fungi es a través de nuestras extracciones alcoholicas que permiten concentrar la mayor parte de los componentes medicinales sin necesidad de consumir cuerpos fructiferos de la variedad deseada. Cada alcoholatura se trabaja en un proceso de extracción a alta presión, dando como resultado un suplemento de alta calidad y de prolongada durabilidad. Nuestras destilaciones se realizan integramente en alcohol de cereal apto para consumo humano y se entregan en presentacion es de 30ml, 50ML y 100ML."
);

const tinturaHericium = new Producto(
  "000002",
  "Hericium Erinaceum",
  "Tintura",
  "alcoholaturas",
  "50Ml",
  1000,
  "../assets/img/goteros.jpg",
  "Otra manera de incoporar la nutrición del reino fungi es a través de nuestras extracciones alcoholicas que permiten concentrar la mayor parte de los componentes medicinales sin necesidad de consumir cuerpos fructiferos de la variedad deseada. Cada alcoholatura se trabaja en un proceso de extracción a alta presión, dando como resultado un suplemento de alta calidad y de prolongada durabilidad. Nuestras destilaciones se realizan integramente en alcohol de cereal apto para consumo humano y se entregan en presentacion es de 30ml, 50ML y 100ML."
);
const tinturaCordiceps = new Producto(
  "000003",
  "Cordiceps Militaris",
  "Tintura",
  "alcoholaturas",
  "50Ml",
  1000,
  "../assets/img/goteros.jpg",
  "Otra manera de incoporar la nutrición del reino fungi es a través de nuestras extracciones alcoholicas que permiten concentrar la mayor parte de los componentes medicinales sin necesidad de consumir cuerpos fructiferos de la variedad deseada. Cada alcoholatura se trabaja en un proceso de extracción a alta presión, dando como resultado un suplemento de alta calidad y de prolongada durabilidad. Nuestras destilaciones se realizan integramente en alcohol de cereal apto para consumo humano y se entregan en presentacion es de 30ml, 50ML y 100ML."
);

const setaGanoderma = new Producto(
  "000004",
  "Ganoderma Lucidum",
  "Setas",
  "comestibles",
  "1 Kg.",
  1000,
  "../assets/img/setas disecadas.jpg",
  "Parte de el aporte medicinal de este maravilloso reino fungi puede ser incorporado a través de las deliciosas setas gourmet. Cada cosecha es realizada bajo los mas altos estandares de asepsia, asegurando una correcta recolección y guardado para su posterior consumo. Las setas pueden consumirse frescas o deshidratadas en una incontable variedad de recetas y formatos. Mediante un cuidado proceso de secado a baja temperatura y escasa exposición a la luz solar, nuestras setas se destacan por mantener buena textura y conservar los aromas propios de cada variedad."
);

const setaHericium = new Producto(
  "000005",
  "Hericium Erinaceum",
  "Setas",
  "comestibles",
  "1 kg.",
  1000,
  "../assets/img/setas disecadas.jpg",
  "Parte de el aporte medicinal de este maravilloso reino fungi puede ser incorporado a través de las deliciosas setas gourmet. Cada cosecha es realizada bajo los mas altos estandares de asepsia, asegurando una correcta recolección y guardado para su posterior consumo. Las setas pueden consumirse frescas o deshidratadas en una incontable variedad de recetas y formatos. Mediante un cuidado proceso de secado a baja temperatura y escasa exposición a la luz solar, nuestras setas se destacan por mantener buena textura y conservar los aromas propios de cada variedad."
);
const setaCordiceps = new Producto(
  "000006",
  "Cordiceps Militaris",
  "Setas",
  "comestibles",
  "1 kg.",
  1000,
  "../assets/img/setas disecadas.jpg",
  "Parte de el aporte medicinal de este maravilloso reino fungi puede ser incorporado a través de las deliciosas setas gourmet. Cada cosecha es realizada bajo los mas altos estandares de asepsia, asegurando una correcta recolección y guardado para su posterior consumo. Las setas pueden consumirse frescas o deshidratadas en una incontable variedad de recetas y formatos. Mediante un cuidado proceso de secado a baja temperatura y escasa exposición a la luz solar, nuestras setas se destacan por mantener buena textura y conservar los aromas propios de cada variedad."
);

const lcGanoderma = new Producto(
  "000007",
  "Ganoderma Lucidum",
  "Cultura Liquida",
  "propagacion",
  "10 ml.",
  1000,
  "../assets/img/Liquid culture.jpg",
  "La Liquid Culture (Cultura Liquida) es uno de los medios de reproducción miceliar de mayor popularidad por la baja dificultad tanto en la forma de trabajo como en su forma de almacenaje y guardado. Consiste en una solucion nutritiva que permite generar una 'nube de micelio' totalmente funcional, apto para su inoculacion a grano o su depuración o conservacion en placa petri. Con una vida util superior a los 3 meses (en condiciones optimas) este metodo de propagación es sumamente rendidor si se lo trabaja de manera adecuada y permite almacenar en poco espacio muchas variedades de hongos. Nuestra cultura liquida se entrega en jeringas plasticas esterilizadas de 10 ml c/u. cerradas en bolsas esterilizadas los luz UV."
);

const lcHericium = new Producto(
  "000008",
  "Hericium Erinaceum",
  "Cultura Liquida",
  "propagacion",
  "10 ml.",
  1000,
  "../assets/img/Liquid culture.jpg",
  "La Liquid Culture (Cultura Liquida) es uno de los medios de reproducción miceliar de mayor popularidad por la baja dificultad tanto en la forma de trabajo como en su forma de almacenaje y guardado. Consiste en una solucion nutritiva que permite generar una 'nube de micelio' totalmente funcional, apto para su inoculacion a grano o su depuración o conservacion en placa petri. Con una vida util superior a los 3 meses (en condiciones optimas) este metodo de propagación es sumamente rendidor si se lo trabaja de manera adecuada y permite almacenar en poco espacio muchas variedades de hongos. Nuestra cultura liquida se entrega en jeringas plasticas esterilizadas de 10 ml c/u. cerradas en bolsas esterilizadas los luz UV."
);
const lcCordiceps = new Producto(
  "000009",
  "Cordiceps Militaris",
  "Cultura Liquida",
  "propagacion",
  "10 ml.",
  1000,
  "../assets/img/Liquid culture.jpg",
  "La Liquid Culture (Cultura Liquida) es uno de los medios de reproducción miceliar de mayor popularidad por la baja dificultad tanto en la forma de trabajo como en su forma de almacenaje y guardado. Consiste en una solucion nutritiva que permite generar una 'nube de micelio' totalmente funcional, apto para su inoculacion a grano o su depuración o conservacion en placa petri. Con una vida util superior a los 3 meses (en condiciones optimas) este metodo de propagación es sumamente rendidor si se lo trabaja de manera adecuada y permite almacenar en poco espacio muchas variedades de hongos. Nuestra cultura liquida se entrega en jeringas plasticas esterilizadas de 10 ml c/u. cerradas en bolsas esterilizadas los luz UV."
);

const petriGanoderma = new Producto(
  "000010",
  "Ganoderma Lucidum",
  "Placas Petri",
  "propagacion",
  "90x90",
  1000,
  "../assets/img/placa petri 1.jpg",
  "Como una novedosa tecnica de aislamiento, depuración y conservacion de cepas, tenemos disponibilidad de Placas petri de 90 x 10 (vidrio de borosilicato o plastico) con base gelificadas de PDA (Potatoe - Dextrose - Agar) con muchisimas variedades. Las placas se entregan 100% colonizadas; es por ello que los pedidos deben solicitarse con una anticipacion no menor a 10 dias habiles. Todos nuestros elementos de propagación cumplen con las mas estrictas normas de asepsia para asegurar el exito en todos tus cultivos."
);

const petriHericium = new Producto(
  "000011",
  "Hericium Erinaceum",
  "Placas Petri",
  "propagacion",
  "90x90",
  1000,
  "../assets/img/placa petri 1.jpg",
  "Como una novedosa tecnica de aislamiento, depuración y conservacion de cepas, tenemos disponibilidad de Placas petri de 90 x 10 (vidrio de borosilicato o plastico) con base gelificadas de PDA (Potatoe - Dextrose - Agar) con muchisimas variedades. Las placas se entregan 100% colonizadas; es por ello que los pedidos deben solicitarse con una anticipacion no menor a 10 dias habiles. Todos nuestros elementos de propagación cumplen con las mas estrictas normas de asepsia para asegurar el exito en todos tus cultivos."
);

const petriCordiceps = new Producto(
  "000012",
  "Cordiceps Militaris",
  "Placas Petri",
  "propagacion",
  "90x90",
  1000,
  "../assets/img/placa petri 1.jpg",
  "Como una novedosa tecnica de aislamiento, depuración y conservacion de cepas, tenemos disponibilidad de Placas petri de 90 x 10 (vidrio de borosilicato o plastico) con base gelificadas de PDA (Potatoe - Dextrose - Agar) con muchisimas variedades. Las placas se entregan 100% colonizadas; es por ello que los pedidos deben solicitarse con una anticipacion no menor a 10 dias habiles. Todos nuestros elementos de propagación cumplen con las mas estrictas normas de asepsia para asegurar el exito en todos tus cultivos."
);

const granoGanoderma = new Producto(
  "000013",
  "Ganoderma Lucidum",
  "Grain Spawn",
  "propagacion",
  "1 Kg.",
  1000,
  "../assets/img/grain spawn.jpg",
  "Conocida como una de las tecnicas mas antiguas en la reproduccion de micelio, presentamos el formato de propagación 'Grain Spawn' que consiste en bolsas de polipropileno con grano inoculado y colonizado (puede variar dependiendo la disponibilidad del stock al momento de la compra) listo para ser sometido a un proceso de frutificación o disponible para realizar una nueva propagacion sobre otro sustrato. Cada bolsa de sustrato esta realizado en base a un minucioso estudio y pruebas de adaptabilidad de cada cepa entregando, unicamente, un producto de calidad y alto valor nutricional teniendo en cuenta las caracteristicas de reproduccion medioambientales de cada hongo."
);

const granoHericium = new Producto(
  "000014",
  "Hericium Erinaceum",
  "Grain Spawn",
  "propagacion",
  "1 Kg.",
  1000,
  "../assets/img/grain spawn.jpg",
  "Conocida como una de las tecnicas mas antiguas en la reproduccion de micelio, presentamos el formato de propagación 'Grain Spawn' que consiste en bolsas de polipropileno con grano inoculado y colonizado (puede variar dependiendo la disponibilidad del stock al momento de la compra) listo para ser sometido a un proceso de frutificación o disponible para realizar una nueva propagacion sobre otro sustrato. Cada bolsa de sustrato esta realizado en base a un minucioso estudio y pruebas de adaptabilidad de cada cepa entregando, unicamente, un producto de calidad y alto valor nutricional teniendo en cuenta las caracteristicas de reproduccion medioambientales de cada hongo."
);
const granoCordiceps = new Producto(
  "000015",
  "Cordiceps Militaris",
  "Grain Spawn",
  "propagacion",
  "1 Kg.",
  1000,
  "../assets/img/grain spawn.jpg",
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

const placaPetri = [petriGanoderma, petriHericium, petriCordiceps];
const grainSpawn = [granoGanoderma, granoHericium, granoCordiceps];
const lc = [lcGanoderma, lcHericium, lcCordiceps];
const setas = [setaGanoderma, setaHericium, setaCordiceps];
const alcoholaturas = [tinturaGanoderma, tinturaHericium, tinturaCordiceps];
