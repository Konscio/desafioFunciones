/* Respuesta ejerccio 4 colores */
function cambiarColor(elemento) {
  elemento.style.backgroundColor = "black";
}

const divAzul = document.getElementById("div1");
const divRojo = document.getElementById("div2");
const divVerde = document.getElementById("div3");
const divAmarillo = document.getElementById("div4");

divAzul.addEventListener("click", function () {
  cambiarColor(divAzul);
});
divRojo.addEventListener("click", function () {
  cambiarColor(divRojo);
});
divVerde.addEventListener("click", function () {
  cambiarColor(divVerde);
});
divAmarillo.addEventListener("click", function () {
  cambiarColor(divAmarillo);
});
