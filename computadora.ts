export class Computadora {
private procesador:string
private ram:number
private almacenamiento:number
private tarjetaGrafica:string
private sistemaOperativo:string

constructor (pProcesador:string, pRam:number, pAlmacenamiento:number, pTarjetaGrafica:string,pSistemaOperativo:string){
    this.procesador= pProcesador
    this.ram=pRam
    this.almacenamiento=pAlmacenamiento
    this.tarjetaGrafica=pTarjetaGrafica
    this.sistemaOperativo=pSistemaOperativo
}

}