import Persona from "./persona.js"

export default class Maestro extends Persona{
    constructor(nombre, FechaNacimiento , genero, sueldo, numeroTrabajador, tipoTrabajador){
        super(nombre, FechaNacimiento, genero)
    this._sueldo = sueldo
    this._numeroTrabajador = numeroTrabajador
    this._tipoTrabajador = tipoTrabajador
    }
    print() {
        console.log(this.getPerfil())
        console.log(this._sueldo)
        console.log(this._numeroTrabajador)
        console.log(this._tipoTrabajador)
    }
}