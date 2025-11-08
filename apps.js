// Definiciones de categorías
const tipos = {
  restaurante_familiar: "La Casa de",
  restaurante_cena: "Bistró",
  restaurante_comida: "Fondita",
};

const tematicas = {
  tematica_mexicana: "Pico de Gallo",
  tematica_buffet: "Sabores del Mundo",
  tematica_rapida: "Express",
};

const colores = {
  verde: "Orgánico",
  rojo: "Colorado",
  azul: "Del Mar",
};

// Función principal
function generarNombre() {
  const resultado = document.getElementById("resultado");

  // Array para guardar todas las combinaciones
  let combinaciones = [];

  // ✅ BUCLES ANIDADOS - Esto es lo que pide el ejercicio
  for (let tipo in tipos) {
    for (let tema in tematicas) {
      for (let color in colores) {
        const nombreCompleto =
          tipos[tipo] + " " + tematicas[tema] + " " + colores[color];
        combinaciones.push(nombreCompleto);
      }
    }
  }

  const indiceAleatorio = Math.floor(Math.random() * combinaciones.length);
  const nombreAleatorio = combinaciones[indiceAleatorio];

  // Convertir a formato de dominio (sin espacios, minúsculas, sin acentos)
  const nombreDominio = nombreAleatorio
    .toLowerCase()
    .replace(/\s+/g, "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");

  resultado.innerHTML = `
    <div class="mb-2"><strong>Tu nombre de restaurante:</strong> ${nombreAleatorio}</div>
    <hr>
    <div class="mb-1">🌐 ${nombreDominio}.com</div>
    <div class="mb-1">🌐 ${nombreDominio}.mx</div>
    <div>🌐 ${nombreDominio}.com.mx</div>
  `;

  resultado.classList.remove("alert-warning");
  resultado.classList.add("alert-success");
}
