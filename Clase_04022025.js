// Ejemplo de Tipos de Datos en JavaScript - Módulo de Introducción
// 1. Tipos de Datos Primitivos

console.log(typeof false); // "boolean"

const nombre = "Alice"; // Cadena de texto (String)
const edad = 25; // Número (Number)
const esEstudiante = false; // Booleano (Boolean)
const valorNulo = null; // Nulo (Null)
let noAsignado; // Indefinido (Undefined)
const idUnico = Symbol("id"); // Símbolo (Symbol)
const numeroGrande = 9007199254740991n; // BigInt

console.log(`Nombre: ${nombre}, Edad: ${edad}, Estudiante: ${esEstudiante}`);
console.log(`Valor Nulo: ${valorNulo}, No Asignado: ${noAsignado}`);
console.log(`ID Único: ${idUnico.toString()}, Número Grande: ${numeroGrande}`);

// 2. Tipos de Datos de Referencia
const persona = {
  primerNombre: "John",
  apellido: "Doe",
  edad: 30,
  estaEmpleado: true,
};
console.log(`Persona: ${JSON.stringify(persona)}`);

const pasatiempos = ["Leer", "Ciclismo", "Videojuegos"];
console.log(`Pasatiempos: ${pasatiempos.join(", ")}`);

// 3. Funciones como Objetos de Primera Clase
function saludar(nombreUsuario) {
  return `¡Hola, ${nombreUsuario}!`;
}
console.log(saludar(persona.primerNombre));

// 4. Uso de Funciones Flecha
const sumarNumeros = (a, b) => a + b;
console.log(`Suma: ${sumarNumeros(10, 5)}`);

// 5. Demostración de Coerción de Tipos
console.log("5" + 5); // Concatenación de cadenas
console.log("5" - 5); // Sustracción numérica (conversión implícita)

// 6. Buenas Prácticas
// - Usar 'const' para constantes, 'let' para variables que cambian
// - Preferir plantillas de cadena sobre concatenación de cadenas
// - Usar JSON.stringify para objetos en registros
// - Preferir funciones flecha para funciones simples de una línea

console.log("¡Demostración de Tipos de Datos en JavaScript!");
