function pintar(colorFuncion) {
  elemento.style.backgroundColor = colorFuncion;
}

let elemento = document.getElementById("key");

var color = "black";

document.addEventListener("keydown", function (event) {
  if (event.key === "a") {
    color = "pink";
    pintar(color);
  } else if (event.key === "s") {
    color = "orange";
    pintar(color);
  } else if (event.key === "d") {
    color = "DodgerBlue";
    pintar(color);
  }
});
