import './style.css'
//Importando Materialize CSS
import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize.min.js'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
<nav>
  <div class="nav-wrapper blue-grey darken-3">
    <ul id="nav-mobile" class="left hide-on-med-and-down">
      <li class="active"><a href="../index.html">Inicio</a></li>
      <li><a href="../ejercicio_uno/index.html">Ejercicio 1</a></li>
      <li><a href="../ejercicio_dos/index.html">Ejercicio 2</a></li>
      <li><a href="../ejercicio_tres/index.html">Ejercicio 3</a></li>
      <li><a href="../ejercicio_cuatro/index.html">Ejercicio 4</a></li>
      <li><a href="../ejercicio_cinco/index.html">Ejercicio 5</a></li>
    </ul>
  </div>
</nav>

<h1 class="center-align">Guía de programación orientada a objetos con TypeScript!</h1>
<h2 class="center-align">Por favor utilizar el menú para navegar entre los distintos ejercicios</h2>
`

