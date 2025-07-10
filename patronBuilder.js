"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ComputadoraBuilder = void 0;
const computadora_1 = require("./computadora");
class ComputadoraBuilder {
    constructor() {
        this.procesador = "";
        this.ram = 0;
        this.almacenamiento = 0;
        this.tarjetaGrafica = "";
        this.sistemaOperativo = "";
    }
    setProcesador(pProcesador) {
        this.procesador = pProcesador;
        return this;
    }
    setRam(pRam) {
        this.ram = pRam;
        return this;
    }
    setAlmacenamiento(pAlmacenamiento) {
        this.almacenamiento = pAlmacenamiento;
        return this;
    }
    setTarjetaGrafica(pTarjetaGrafica) {
        this.tarjetaGrafica = pTarjetaGrafica;
        return this;
    }
    setSistemaOperativo(pSistemaOperativo) {
        this.sistemaOperativo = pSistemaOperativo;
        return this;
    }
    toString() {
        return `La computadora personalida quedo de la siguiente manera: cuenta con un procesador ${this.procesador}, mas ${this.ram} MB de RAM, cuenta con un almacenamiento de ${this.almacenamiento} MB, y ha agregado un tarjeta grafica ${this.tarjetaGrafica} y el sistema operativa elejido es ${this.sistemaOperativo}`;
    }
    build() {
        return new computadora_1.Computadora(this.procesador, this.ram, this.almacenamiento, this.tarjetaGrafica, this.sistemaOperativo);
    }
}
exports.ComputadoraBuilder = ComputadoraBuilder;
