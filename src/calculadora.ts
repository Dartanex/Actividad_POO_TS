import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/js/materialize.min.js'

class Calculadora {
  numeroUno: number
  numeroDos: number

  constructor(numeroUno: number, numeroDos: number){
    this.numeroUno = numeroUno
    this.numeroDos = numeroDos
  }

  getSuma(){
    const pirntResult= document.createElement('p')
    if(this.numeroUno == 0 && this.numeroDos == 0){
      pirntResult.innerHTML = `Por favor ingrese números para realizar calculo`
    }
    if(!(this.numeroUno == 0) && this.numeroDos == 0){
      return pirntResult.innerHTML = `La suma de ${this.numeroUno} + ${this.numeroDos} es = ${this.numeroUno} + ${this.numeroDos}`
    }
  }
}

document.querySelector<HTMLDivElement>('#ejercicioDos')!.innerHTML = `
<nav>
  <div class="nav-wrapper green darken-3">
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
  <h3 class="green-text center">Calculadora</h3>
  <div class="row">
    <form class="col s12 m10 l6 push-l3 push-m1" name="encabezado">
      <div class="row">
        <div class="input-field col s12">
          <input id="numeroUno" type="number" class="validate">
          <label for="numeroUno">Número uno:</label>
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12">
          <input id="color" type="number" class="validate">
          <label for="numeroDos">Número uno:</label>
        </div>
      </div>

      <div class="row">
        <div class="col s12 m4">
        <button class="btn waves-effect waves-light" type="submit" name="action">Sumar</button>
        </div>
        <div class="col s12 m4">
        <button class="btn waves-effect waves-light" type="submit" name="action">Restar</button>
        </div>
        <div class="col s12 m4">
        <button class="btn waves-effect waves-light" type="submit" name="action">Multiplicar</button>
        </div>
      </div>
      <div class="row"></div>
        <div class="col s12 m4">
        <button class="btn waves-effect waves-light" type="submit" name="action">Dividir</button>
        </div>
        <div class="col s12 m4">
        <button class="btn waves-effect waves-light" type="submit" name="action">Potencia</button>
        </div>
        <div class="col s12 m4">
        <button class="btn waves-effect waves-light" type="submit" name="action">Factorial</button>
        </div>

    </form>
  </div>

  <section class="container" id="resultado">

  </section>
</main>
`