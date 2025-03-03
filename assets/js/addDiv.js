function agregarElemento(color) {
  contenedor = document.getElementById("contenedor");
  nuevoElemento = document.createElement("div");
  nuevoElemento.style.backgroundColor = color;
  nuevoElemento.textContent = "Elemento agregado";
  contenedor.appendChild(nuevoElemento);
}

document.addEventListener("keydown", function (event) {
  if (event.key === "q" || event.key === "Q") {
    agregarElemento("Purple");
  } else if (event.key === "w" || event.key === "W") {
    agregarElemento("Grey");
  } else if (event.key === "e" || event.key === "E") {
    agregarElemento("Brown");
  }
});
