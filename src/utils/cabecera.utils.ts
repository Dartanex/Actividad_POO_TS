class CabeceraPagina {
    titulo: string
    color: string
    fuente: string
    alineado: string
    
    constructor(titulo: string, color: string, fuente: string, alineado: string){
     this.titulo = titulo
     this.color = color
     this.fuente = fuente
     this.alineado = alineado
    }
    setTittleColorFont(titulo: string, color: string,fuente: string){
       this.titulo = titulo
       this.color = color
       this.fuente = "." + fuente
    }
    setAlineado(alineado: string){
     this.alineado = alineado
    }
   
    getCabecera(){
        const print = document.createElement("header")
        if(this.alineado == "izquierda"){
            print.innerHTML = `<h1 class="${this.fuente} left-align" style="color:${this.color}; margin-left: 10px;">${this.titulo}</h1>` 
            return document.querySelector<HTMLDivElement>('#encabezado')?.appendChild(print)
        } else if(this.alineado == "centro"){
            print.innerHTML = `<h1 class="${this.fuente} center-align" style="color:${this.color};">${this.titulo}</h1>`
            return document.querySelector<HTMLDivElement>('#encabezado')?.appendChild(print)
        } else if(this.alineado == "derecha"){
            print.innerHTML = `<h1 class="${this.fuente} right-align" style="color:${this.color}; margin-right: 10px;">${this.titulo}</h1>`
            return document.querySelector<HTMLDivElement>('#encabezado')?.appendChild(print)
        }
    }
  }

   export default CabeceraPagina