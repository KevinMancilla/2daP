import FechaNacimiento from "./fecha-nacimiento.js"
import Nombre from "./nombre.js"

export default class Persona{
    /**
     * 
     * @param {Nombre} nombre 
     * @param {FechaNacimiento} FechaNacimiento 
     * @param {string} genero 
     */
    constructor(nombre, FechaNacimiento , genero){

    this._nombre = nombre
    this._FechaNacimiento = FechaNacimiento
    this._genero = genero
}

getPerfil() {
    return  `${this._nombre.getCompleto()}, ${this._FechaNacimiento.getFormatoExtendido().toUpperCase()}, ${this._genero.toUpperCase()}`
}
}