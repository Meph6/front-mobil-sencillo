// Función que selecciona la clase del elemento
const seleccionarElemento = (s) => document.querySelector(s);
// Abrir el menú
seleccionarElemento('.abrir').addEventListener('click', () => {
    seleccionarElemento('.menu-iconos.abrir').classList.add('quitar');
    seleccionarElemento('.nav-lista').classList.add('activar');
});

// Cerrar el menú
seleccionarElemento('.cerrar').addEventListener('click', () => {
    seleccionarElemento('.menu-iconos.abrir').classList.remove('quitar');
    seleccionarElemento('.nav-lista').classList.remove('activar');
}); 