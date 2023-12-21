//Evento para inicializar select con materialize
document.addEventListener('DOMContentLoaded', () => {
    var elems = document.querySelectorAll('select');
    M.FormSelect.init(elems);
});