import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize.min.js'
import Calculadora from './utils/calculadora.utils'

document.querySelector<HTMLDivElement>('#ejercicioDos')!.innerHTML = `
<nav>
  <div class="nav-wrapper teal">
    <ul id="nav-mobile" class="left hide-on-med-and-down">
      <li><a href="../index.html">Inicio</a></li>
      <li><a href="../ejercicio_uno/index.html">Ejercicio 1</a></li>
      <li class="active"><a href="../ejercicio_dos/index.html">Ejercicio 2</a></li>
      <li><a href="../ejercicio_tres/index.html">Ejercicio 3</a></li>
      <li><a href="../ejercicio_cuatro/index.html">Ejercicio 4</a></li>
      <li><a href="../ejercicio_cinco/index.html">Ejercicio 5</a></li>
    </ul>
  </div>
</nav>

<main class="container">
  <h3 class="teal-text center">Calculadora</h3>
  <div class="row">
    <div class="input-field col s12 m6 push-l3">
      <input id="numeroUno" type="number" class="validate" step="any">
      <label for="numeroUno">Primer Número:</label>
    </div>
  </div>
  <div class="row">
    <div class="input-field col s12 m6 push-l3">
      <input id="numeroDos" type="number" class="validate" step="any">
      <label for="numeroDos">Segundo Numero:</label>
    </div>
  </div>
  <div class="row">
    <div class="col s12 m3 l4 push-l3">
      <button class="btn waves-effect waves-light btn-large" type="submit" id="sumar">Sumar</button>
    </div>
    <div class="col s12 m3 l4 push-l1">
      <button class="btn waves-effect waves-light btn-large" type="submit" id="restar">Restar</button>
    </div>
    <div class="col s12 m3 l4 pull-l1">
      <button class="btn waves-effect waves-light btn-large" type="submit" id="multiplicar">Multiplicar</button>
    </div>
    </div>
  <div class="row">
    <div class="col s12 m3 l4 push-l3">
      <button class="btn waves-effect waves-light btn-large" type="submit" id="dividir">Dividir</button>
    </div>
    <div class="col s12 m3 l4 push-l1">
      <button class="btn waves-effect waves-light btn-large" type="submit" id="potencia">Potencia</button>
    </div>
    <div class="col s12 m3 l4 pull-l1">
      <button class="btn waves-effect waves-light btn-large" type="submit" id="factorial">Factorial</button>
    </div>
  </div>
  <div class="row">
    <div class="col s12 m3 l4 pull-l1">
      <button class="btn waves-effect waves-light btn-large" type="submit" id="limpiar">Limpiar</button>
    </div>
  </div>

  <section class="container">
    <div class="row">
      <div class="col s12 m6 push-m3">
        <div class="card teal darken-1">
          <div class="card-content white-text">
            <span class="card-title">Respuesta: </span> 
            <div id="resultado"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</main>
`
const numUno = document.querySelector('#numeroUno') as HTMLInputElement
const numDos = document.querySelector('#numeroDos') as HTMLInputElement

const sumar = document.querySelector('#sumar') as HTMLButtonElement
const restar = document.querySelector('#restar') as HTMLButtonElement
const multiplicar = document.querySelector('#multiplicar') as HTMLButtonElement
const dividir = document.querySelector('#dividir') as HTMLButtonElement
const potencia = document.querySelector('#potencia') as HTMLButtonElement
const factorial = document.querySelector('#factorial') as HTMLButtonElement
const limpieza = document.querySelector('#limpiar') as HTMLButtonElement



sumar.addEventListener('click', () => {
  const calculadora = new Calculadora(numUno.value, numDos.value)
  calculadora.getSuma()
})

restar.addEventListener('click', () => {
  const calculadora = new Calculadora(numUno.value, numDos.value)
  calculadora.getResta()
})

multiplicar.addEventListener('click', () => {
  const calculadora = new Calculadora(numUno.value, numDos.value)
  calculadora.getMultiplicar()
})

dividir.addEventListener('click', () => {
  const calculadora = new Calculadora(numUno.value, numDos.value)
  calculadora.getDividir()
})

potencia.addEventListener('click', () => {
  const calculadora = new Calculadora(numUno.value, numDos.value)
  calculadora.getPotencia()
})

factorial.addEventListener('click', () => {
  const calculadora = new Calculadora(numUno.value, numDos.value)
  calculadora.getFactorial()
})

limpieza.addEventListener('click', () =>{
  document.querySelector<HTMLInputElement>('#numeroUno')!.value = ""
  document.querySelector<HTMLInputElement>('#numeroDos')!.value = ""
  document.querySelector<HTMLInputElement>('#resultado')!.innerHTML = ""
})