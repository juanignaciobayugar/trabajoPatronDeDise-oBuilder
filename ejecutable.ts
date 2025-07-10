// Ejercicios de tarea (entrega obligatoria)
//***********************************************
// *Ejercicio 1: Construcción de Computadoras
// Consigna:
// -Crea una clase Computadora que tenga los siguientes atributos opcionales:
//  Procesador
//  RAM
//  Almacenamiento
//  Tarjeta gráfica
//  Sistema operativo
// -Implementa un patrón Builder que permita a los usuarios construir una computadora personalizada paso a paso.
//***********************************************
// *Ejercicio 2: Fábrica de Animales
// Consigna:
// -Crea una interfaz Animal con métodos hacerSonido() y mover(). Implementa clases como Perro, Gato y Pajaro que utilizen esa interfaz. Luego, crea una fábrica que devuelva instancias de estos animales.


//EJERCICIO 1
//importo las clases
import { Computadora } from "./computadora";
import { ComputadoraBuilder } from "./patronBuilder";
//creo nuevo objeto computadora
let miComputadora= new Computadora ("PENTIUM 2",256,1000,"NVIDIA 940MX","WINDOWS 10");
//creo nuevo objeto dinamicamente aplicando patron Builder
let computadoraPersonalizada= new ComputadoraBuilder().setAlmacenamiento(20000).setProcesador ("intel core i5 7th Gen").setRam (6000).setSistemaOperativo("WINDOWS10").setTarjetaGrafica ("GEFORCE3000");
//Verifico
console.log(computadoraPersonalizada.toString());
