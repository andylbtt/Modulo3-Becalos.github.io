// Función para evaluar la nota y mostrar el mensaje correspondiente
function evaluarNota(nota) {
    if (nota < 0 || nota > 100) {
        console.log("⚠️ Error: La nota debe estar entre 0 y 100.");
        return;
    }

    let mensaje;
    
    if (nota >= 90) {
        mensaje = "Excelente 🎉";
    } else if (nota >= 75) {
        mensaje = "Bien 😊";
    } else if (nota >= 60) {
        mensaje = "Suficiente 😐";
    } else {
        mensaje = "No aprobado ❌";
    }

    console.log(`Nota: ${nota} - Resultado: ${mensaje}`);
}

// Hacemos una prueba con diferentes valores
evaluarNota(45);  // Debería imprimir "No aprobado ❌"
evaluarNota(60);  // Debería imprimir "Suficiente 😐"
evaluarNota(75);  // Debería imprimir "Bien 😊"
evaluarNota(90);  // Debería imprimir "Excelente 🎉"
evaluarNota(105); // Debería imprimir "⚠️ Error: La nota debe estar entre 0 y 100."
