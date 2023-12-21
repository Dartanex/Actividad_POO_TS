class Calculadora {
    numeroUno: string
    numeroDos: string
  
    constructor(numeroUno: string, numeroDos: string){
      this.numeroUno = numeroUno
      this.numeroDos = numeroDos
    }
    getSuma(){
      const pirntResult= document.createElement('p')
      let result: number = 0
      if(this.numeroUno == ""){
        this.numeroUno = "0"
      }
      if(this.numeroDos == ""){
        this.numeroDos = "0"
      }
      let nUno = parseFloat(this.numeroUno)
      let nDos = parseFloat(this.numeroDos)
      console.log(this.numeroUno,this.numeroDos);
      if(!(nUno == 0) && nDos == 0){
        result = nUno
        pirntResult.innerHTML = `La suma de ${this.numeroUno} + 0 es = ${result.toString()}`
        return document.querySelector<HTMLDivElement>('#resultado')?.appendChild(pirntResult)
      }else if(nUno == 0 && !(nDos == 0)){
        result = nDos
        pirntResult.innerHTML = `La suma de 0 + ${this.numeroDos} es = ${result.toString()}`
        return document.querySelector<HTMLDivElement>('#resultado')?.appendChild(pirntResult)
      }else if(!(nUno == 0) && !(nDos == 0)){
        result = nUno + nDos
        pirntResult.innerHTML = `La suma de ${this.numeroUno} + ${this.numeroDos} es = ${result.toString()}`
        return document.querySelector<HTMLDivElement>('#resultado')?.appendChild(pirntResult)
      }else {
        pirntResult.innerHTML = `Por favor ingrese números para realizar calculo`
        return document.querySelector<HTMLDivElement>('#resultado')?.appendChild(pirntResult)
      }
    }
    getResta(){
      const pirntResult= document.createElement('p')
      let result = 0
      if(this.numeroUno == ""){
        this.numeroUno = "0"
      }
      if(this.numeroDos == ""){
        this.numeroDos = "0"
      }
      let nUno = parseFloat(this.numeroUno)
      let nDos = parseFloat(this.numeroDos)
      if(!(nUno == 0) && nDos == 0){
        result = nUno
        pirntResult.innerHTML = `La resta de ${nUno} - 0 es = ${result.toString()}`
        return document.querySelector<HTMLDivElement>('#resultado')?.appendChild(pirntResult)
      }else if(nUno == 0 && !(nDos == 0)){
        result = nDos
        pirntResult.innerHTML = `La resta de 0 - ${nDos} es = -${result.toString()}`
        return document.querySelector<HTMLDivElement>('#resultado')?.appendChild(pirntResult)
      }else if(!(nUno ==0) && !(nDos == 0)){
        result = nUno - nDos
        pirntResult.innerHTML = `La resta de ${nUno} - ${nDos} es = ${result.toString()}`
        return document.querySelector<HTMLDivElement>('#resultado')?.appendChild(pirntResult)
      }else {
        pirntResult.innerHTML = `Por favor ingrese números para realizar calculo`
        return document.querySelector<HTMLDivElement>('#resultado')?.appendChild(pirntResult)
      }
    }
    getMultiplicar(){
      const pirntResult= document.createElement('p')
      let result = 0
      if(this.numeroUno == ""){
        this.numeroUno = "0"
      }
      if(this.numeroDos == ""){
        this.numeroDos = "0"
      }
      let nUno = parseFloat(this.numeroUno)
      let nDos = parseFloat(this.numeroDos)
      if(!(nUno == 0) && nDos == 0){
        result = nUno
        pirntResult.innerHTML = `La multiplicación de ${nUno} x 0 es = ${result.toString()}`
        return document.querySelector<HTMLDivElement>('#resultado')?.appendChild(pirntResult)
      }else if(nUno == 0 && !(nDos == 0)){
        result = nDos
        pirntResult.innerHTML = `La multiplicación de 0 x ${nDos} es = ${result.toString()}`
        return document.querySelector<HTMLDivElement>('#resultado')?.appendChild(pirntResult)
      }else if(!(nUno ==0) && !(nDos == 0)){
        result = nUno * nDos
        pirntResult.innerHTML = `La multiplicación de ${nUno} x ${nDos} es = ${result.toString()}`
        return document.querySelector<HTMLDivElement>('#resultado')?.appendChild(pirntResult)
      }else {
        pirntResult.innerHTML = `Por favor ingrese números para realizar calculo`
        return document.querySelector<HTMLDivElement>('#resultado')?.appendChild(pirntResult)
      }
    }
    getDividir(){
      const pirntResult= document.createElement('p')
      let result = 0
      if(this.numeroUno == ""){
        this.numeroUno = "0"
      }
      if(this.numeroDos == ""){
        this.numeroDos = "0"
      }
      let nUno = parseFloat(this.numeroUno)
      let nDos = parseFloat(this.numeroDos)
      if(!(nUno == 0) && nDos == 0){
        pirntResult.innerHTML = `No se puede dividir entre 0`
        return document.querySelector<HTMLDivElement>('#resultado')?.appendChild(pirntResult)
      }else if(nUno == 0 && !(nDos == 0)){
        result = nDos
        pirntResult.innerHTML = `La división de 0 / ${nDos} es = ${result.toString()}`
        return document.querySelector<HTMLDivElement>('#resultado')?.appendChild(pirntResult)
      }else if(!(nUno ==0) && !(nDos == 0)){
        result = nUno / nDos
        pirntResult.innerHTML = `La división de ${nUno} / ${nDos} es = ${result.toString()}`
        return document.querySelector<HTMLDivElement>('#resultado')?.appendChild(pirntResult)
      }else {
        pirntResult.innerHTML = `Por favor ingrese números para realizar calculo`
        return document.querySelector<HTMLDivElement>('#resultado')?.appendChild(pirntResult)
      }
    }
    getPotencia(){
        const pirntResult= document.createElement('p')
        let result = 0
        if(this.numeroUno == ""){
          this.numeroUno = "0"
        }
        if(this.numeroDos == ""){
          this.numeroDos = "0"
        }
        let nUno = parseFloat(this.numeroUno)
        let nDos = parseFloat(this.numeroDos)
        if(!(nUno == 0) && nDos == 0){
            result = Math.pow(nUno, nDos)
          pirntResult.innerHTML = `Si un número está elevado a 0 el valor de la potencia siempre será ${result}`
          return document.querySelector<HTMLDivElement>('#resultado')?.appendChild(pirntResult)
        }else if(nUno == 0 && !(nDos == 0)){
          result = Math.pow(nUno, nDos)
          pirntResult.innerHTML = `0 elevado a un potencia n sigue sienso ${result}`
          return document.querySelector<HTMLDivElement>('#resultado')?.appendChild(pirntResult)
        }else if(!(nUno ==0) && !(nDos == 0)){
          result = Math.pow(nUno,nDos)
          pirntResult.innerHTML = `${nUno} elevado a ${nDos} es = ${result.toString()}`
          return document.querySelector<HTMLDivElement>('#resultado')?.appendChild(pirntResult)
        }else {
          pirntResult.innerHTML = `Por favor ingrese números para realizar calculo`
          return document.querySelector<HTMLDivElement>('#resultado')?.appendChild(pirntResult)
        }        
    }
    getFactorial(){
        const pirntResult= document.createElement('p')
        let result = 0
        let resultDos = 0
        if(this.numeroUno == ""){
          this.numeroUno = "0"
        }
        if(this.numeroDos == ""){
          this.numeroDos = "0"
        }
        let nUno = parseFloat(this.numeroUno)
        let nDos = parseFloat(this.numeroDos)
        if(!(nUno == 0) && nDos == 0){
            result = 1
            for (let i = 1; i <= nUno; i++) {
                result += result * i  
            }
          pirntResult.innerHTML = `${nUno}! es = ${result}`
          return document.querySelector<HTMLDivElement>('#resultado')?.appendChild(pirntResult)
        }else if(nUno == 0 && !(nDos == 0)){
            result = 1
            for (let i = 1; i <= nDos; i++) {
                result += result * i  
            }
          pirntResult.innerHTML = `${nDos}! es = ${result}`
          return document.querySelector<HTMLDivElement>('#resultado')?.appendChild(pirntResult)
        }else if(!(nUno ==0) && !(nDos == 0)){
            result = 1
            resultDos = 1
            for (let i = 1; i <= nUno; i++) {
                result = result * i  
            }
            for (let i = 1; i <= nDos; i++) {
                resultDos = resultDos * i  
            }
          pirntResult.innerHTML = `${nUno}! es = ${result.toString()} y ${nDos}! es = ${resultDos.toString()}`
          return document.querySelector<HTMLDivElement>('#resultado')?.appendChild(pirntResult)
        }else {
          pirntResult.innerHTML = `Por favor ingrese números para realizar calculo`
          return document.querySelector<HTMLDivElement>('#resultado')?.appendChild(pirntResult)
        }        
    }
  }

  export default Calculadora