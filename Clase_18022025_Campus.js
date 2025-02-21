// Construcimos la función libro considerando que el estado solo puede ser disponible o prestado
function Libro(titulo, autor, anio, estado) {
    const estadosValidos = ["disponible", "prestado"]; // Lista de estados permitidos

    // Validamos el estado
    if (!estadosValidos.includes(estado)) {
        throw new Error(`⚠️ Estado inválido. Solo se permite "disponible" o "prestado". Recibido: "${estado}"`);
    }

    this.titulo = titulo;
    this.autor = autor;
    this.anio = anio;
    this.estado = estado;
    this.capitulos = [];

    // Método para describir el libro
    this.describirLibro = function() {
        console.log(`Título del libro: "${this.titulo}", escrito por: ${this.autor} en el año ${this.anio}; el estado es: ${this.estado}.`);
    };

    // Método para cambiar el estado del libro (solo "disponible" o "prestado")
    this.cambiarEstado = function(nuevoEstado) {
        if (!estadosValidos.includes(nuevoEstado)) {
            console.log(`⚠️ Estado inválido. Solo se permite "disponible" o "prestado". Recibido: "${nuevoEstado}"`);
            return;
        }
        this.estado = nuevoEstado;
        console.log(`Estado actualizado: El libro ahora está "${this.estado}".`);
    };

    // Método para agregar capítulos
    this.agregarCapitulo = function(capitulo) {
        this.capitulos.push(capitulo);
        console.log(`✅ El capítulo: "${capitulo}" fue agregado al libro: "${this.titulo}".`);
    };

    // Método para eliminar capítulos
    this.eliminarCapitulo = function(capitulo) {
        const index = this.capitulos.indexOf(capitulo);
        if (index !== -1) {
            this.capitulos.splice(index, 1);
            console.log(`❌ El capítulo: "${capitulo}" fue eliminado del libro "${this.titulo}".`);
        } else {
            console.log(`⚠️ El capítulo "${capitulo}" no existe en el libro "${this.titulo}".`);
        }
    };

    // Método para mostrar los capítulos
    this.mostrarCapitulos = function() {
        if (this.capitulos.length === 0) {
            console.log(`El libro "${this.titulo}" no tiene capítulos agregados aún.`);
        } else {
            console.log(`Capítulos del libro "${this.titulo}":`);
            this.capitulos.forEach((cap, index) => {
                console.log(`${index + 1}. ${cap}`);
            });
        }
    };
}

// 🔹 Hacemos una validación del estado
try {
    const miLibro = new Libro("La canción de Aquiles", "Madeline Miller", 2011, "disponible");
    // 🔹 Probamos todos los métodos:
    miLibro.describirLibro();
    miLibro.agregarCapitulo("Capítulo 1: La Isla");
    miLibro.agregarCapitulo("Capítulo 2: El hijo de Peleo");
    miLibro.mostrarCapitulos();
    miLibro.eliminarCapitulo("Capítulo 2: El hijo de Peleo");
    miLibro.eliminarCapitulo("Capítulo 1: La Isl");
    miLibro.mostrarCapitulos();
    // 🔹 Cambiar estado a "prestado" y probar error con estado inválido
    miLibro.cambiarEstado("prestado");  // ✅ Correcto
    miLibro.cambiarEstado("vendido");   // ❌ Error: Estado inválido

    const miLibro2 = new Libro("Normal People", "Sally Rooney", 2017, "prestado");
    miLibro2.describirLibro();
    miLibro2.mostrarCapitulos();

} catch (error) {
    console.error(error.message);
}

// 🔹 Intentamos crear un libro con un estado inválido (esto lanzará un error)
try {
    const libroErroneo = new Libro("Normal People", "Sally Rooney", 2017, "roto");
} catch (error) {
    console.error(error.message);  // ⚠️ Estado inválido.
}