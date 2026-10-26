/* ============================================================
   🔍 BUSCADOR DE TRUCOS
   Función: filtra las tablas de la página según lo que el
   usuario escribe en el cuadro de búsqueda.
   Se conecta con un solo <input id="buscador"> en el HTML.
   ============================================================ */

// 1. Tomamos el cuadro de búsqueda del HTML
const buscador = document.getElementById("buscador");

// 2. Escuchamos cada tecla que se suelta dentro del cuadro
buscador.addEventListener("keyup", function () {

    // 3. Leemos lo escrito y lo pasamos a minúsculas
    //    (así "RHINO", "Rhino" y "rhino" dan el mismo resultado)
    const texto = buscador.value.toLowerCase();

    // 4. Recorremos TODAS las tablas de la página
    document.querySelectorAll("table").forEach(function (tabla) {
        let visibles = 0; // contador de filas que siguen apareciendo

        // 5. Dentro de cada tabla, revisamos fila por fila
        tabla.querySelectorAll("tr").forEach(function (fila) {

            // 5a. Las filas de encabezado (th) nunca se ocultan
            if (fila.querySelector("th")) return;

            // 5b. ¿El texto de la fila contiene lo que buscamos?
            const coincide = fila.textContent.toLowerCase().includes(texto);

            // 5c. La mostramos o la escondemos
            fila.style.display = coincide ? "" : "none";
            if (coincide) visibles++;
        });

        // 6. Si una tabla quedó sin ninguna fila visible,
        //    escondemos la tabla completa (y su encabezado)
        tabla.style.display = visibles === 0 ? "none" : "";
    });
});
