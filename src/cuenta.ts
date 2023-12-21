import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize.min.js'


document.querySelector<HTMLDivElement>('#ejercicioCuatro')!.innerHTML = `
<nav>
  <div class="nav-wrapper green darken-3">
    <ul id="nav-mobile" class="left hide-on-med-and-down">
      <li><a href="../index.html">Inicio</a></li>
      <li><a href="../ejercicio_uno/index.html">Ejercicio 1</a></li>
      <li><a href="../ejercicio_dos/index.html">Ejercicio 2</a></li>
      <li><a href="../ejercicio_tres/index.html">Ejercicio 3</a></li>
      <li class="active"><a href="../ejercicio_cuatro/index.html">Ejercicio 4</a></li>
      <li><a href="../ejercicio_cinco/index.html">Ejercicio 5</a></li>
    </ul>
  </div>
</nav>

<h1 class="blue-text">Hola mundillo1!</h1>
`