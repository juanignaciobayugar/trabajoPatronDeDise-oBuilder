import { Computadora } from "./computadora"

export class ComputadoraBuilder{
    private procesador:string = ""
    private ram:number = 0
    private almacenamiento:number = 0
    private tarjetaGrafica:string = ""
    private sistemaOperativo:string = ""

    setProcesador(pProcesador:string):ComputadoraBuilder{
        this.procesador= pProcesador
        return this
    }

    setRam(pRam:number): ComputadoraBuilder {
        this.ram=pRam
        return this
    }

    setAlmacenamiento(pAlmacenamiento:number): ComputadoraBuilder{
        this.almacenamiento=pAlmacenamiento
        return this
    }

    setTarjetaGrafica(pTarjetaGrafica:string):ComputadoraBuilder {
        this.tarjetaGrafica= pTarjetaGrafica
        return this
    }

    setSistemaOperativo(pSistemaOperativo:string): ComputadoraBuilder{
        this.sistemaOperativo=pSistemaOperativo
        return this
    }

    toString():string{

    return `La computadora personalida quedo de la siguiente manera: cuenta con un procesador ${this.procesador}, mas ${this.ram} MB de RAM, cuenta con un almacenamiento de ${this.almacenamiento} MB, y ha agregado un tarjeta grafica ${this.tarjetaGrafica} y el sistema operativa elejido es ${this.sistemaOperativo}`
    }

    build(): Computadora {
        return new Computadora (this.procesador, this.ram, this.almacenamiento,this.tarjetaGrafica,this.sistemaOperativo);
    }

}