// Arreglo con diferentes tipos de frutas
const frutas = ["manzana", "banana", "naranja", "manzana", "pera", "banana", "naranja", "manzana"];

// Objeto para almacenar la cantidad de cada fruta
const conteoFrutas = {};

// Recorrer el arreglo con un bucle for
for (let i = 0; i < frutas.length; i++) {
    let fruta = frutas[i];

    // Si la fruta ya está en el objeto, incrementar su contador
    if (conteoFrutas[fruta]) {
        conteoFrutas[fruta]++;
    } else {
        // Si la fruta no está en el objeto, inicializarla en 1
        conteoFrutas[fruta] = 1;
    }
}

// Imprimir el conteo de frutas
console.log("🍎 Conteo de frutas usando FOR:");
console.log(conteoFrutas);


// Reinicializar el objeto para probar con while
const conteoFrutasWhile = {};
let index = 0;

// Usar while para recorrer el arreglo
while (index < frutas.length) {
    let fruta = frutas[index];

    // Si la fruta ya está en el objeto, incrementar su contador
    if (conteoFrutasWhile[fruta]) {
        conteoFrutasWhile[fruta]++;
    } else {
        // Si la fruta no está en el objeto, inicializarla en 1
        conteoFrutasWhile[fruta] = 1;
    }

    index++; // Incrementar el índice
}

// Imprimir el conteo de frutas
console.log("🍊 Conteo de frutas usando WHILE:");
console.log(conteoFrutasWhile);
