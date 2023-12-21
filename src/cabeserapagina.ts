import '../src/cabecera.css'
import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize.min.js'
import CabeceraPagina from './utils/cabecera.utils'



document.querySelector<HTMLDivElement>('#ejercicioUno')!.innerHTML = `
<nav>
  <div class="nav-wrapper blue-grey darken-3">
    <ul id="nav-mobile" class="left hide-on-med-and-down">
      <li><a href="../index.html">Inicio</a></li>
      <li class="active"><a href="../index.html">Ejercicio 1</a></li>
      <li><a href="../ejercicio_dos/index.html">Ejercicio 2</a></li>
      <li><a href="../ejercicio_tres/index.html">Ejercicio 3</a></li>
      <li><a href="../ejercicio_cuatro/index.html">Ejercicio 4</a></li>
      <li><a href="../ejercicio_cinco/index.html">Ejercicio 5</a></li>
    </ul>
  </div>
</nav>

<div id="encabezado"></div>

<main class="container">
  <h3 class="green-text center">Crea tu propia cabesera</h3>
  <div class="row">
    <form class="col s12 m10 l6 push-l3 push-m1" name="encabezado">
      <div class="row">
        <div class="input-field col s12">
          <input id="titulo" type="text" class="validate">
          <label for="titulo">Titulo de Cabecera</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input id="color" type="color" class="validate">
          <span>Selecciona el color que deseas aplicar</span>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12 green-text">
          <select id="fontType">
            <option value="" disabled selected>Seleccionar tipo de letra</option>
            <option class="silkscreen" value="silkscreen">Silkscreen</option>
            <option class="roboto" value="roboto">Roboto</option>
            <option class="ubuntu" value="ubuntu">Ubuntu</option>
            <option class="pacifico" value="pacifico">Pacifico</option>
            <option class="permanent-market" value="permanent-market">Permanent Market</option>
          </select>
          <label>Selecciona el tipo de letra que deseas para tu cabesera</label>
        </div>
      </div>

      <div class="row">
      <span>Escoge donde quieres que se vea el encabezado</span>
        <p>
          <label>
            <input class="with-gap" name="alineado" value="izquierda" type="radio"/>
            <span>Izquierda</span>
          </label>
        </p>
        <p>
          <label>
            <input class="with-gap" name="alineado" value="centro" type="radio"/>
            <span>Centrado</span>
          </label>
        </p>
        <p>
          <label>
            <input class="with-gap" name="alineado" value="derecha" type="radio"/>
            <span>Derecha</span>
          </label>
        </p>
      </div>
      <div class="row">
        <button class="btn waves-effect waves-light" type="submit" name="action">Crear encabezado</button>
      </div>
    </form>
  </div>
</main>
`

document.querySelector<HTMLFormElement>('form')!.addEventListener('submit', (event) => {
  event.preventDefault()

  const titulo = document.querySelector<HTMLInputElement>('#titulo')!.value
  const color = document.querySelector<HTMLInputElement>('#color')!.value
  const fuente = document.querySelector<HTMLSelectElement>('#fontType')!.value
  const alineado = (<HTMLInputElement>document.querySelector('input[name="alineado"]:checked')).value
  console.log(fuente,alineado);
  document.querySelector<HTMLDivElement>('#encabezado')!.innerHTML = ""
  const cabeceraUno = new CabeceraPagina(titulo,color,fuente,alineado)
  cabeceraUno.getCabecera()
})
