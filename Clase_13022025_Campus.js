// Array para almacenar los libros leídos
const librosLeidos = [];

// Función para agregar un libro a la lista
function agregarLibro(titulo) {
    if (titulo.trim() === "") {
        console.log("⚠️ Error: El título del libro no puede estar vacío.");
        return;
    }
    librosLeidos.push(titulo);
    console.log(`Libro agregado: "${titulo}"`);
}

// Función para mostrar todos los libros leídos
function mostrarLibrosLeidos() {
    if (librosLeidos.length === 0) {
        console.log("⚠️ No has leído ningún libro todavía.");
    } else {
        console.log("Libros leídos:");
        librosLeidos.forEach((libro, index) => {
            console.log(`${index + 1}. ${libro}`);
        });
    }
}

// 🔹 Pruebas: Agregando libros y mostrándolos
//agregarLibro("La canción de Aquiles");
//agregarLibro("Normal People");
//agregarLibro("Ready Player One");

// Hacemos pruebas agregando libros vacíos
agregarLibro("");

mostrarLibrosLeidos();