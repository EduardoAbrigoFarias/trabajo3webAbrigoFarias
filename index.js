

  //  Para Toast del menu contacto
  //  Luego deberia cambiar a toast de Bootstrap
  function toastFunction() {
    var x = document.getElementById("snackbar");  
    // Sumo clase "show" class a DIV
    x.className = "show";  
    // Después de 3 segundos, elimina la clase "show"
    setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
  }

  // Menu hamburguesa
const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
})

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
})
