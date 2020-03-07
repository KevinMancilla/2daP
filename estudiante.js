import Persona from "./persona.js"

export default class Estudiante extends Persona{
    constructor(nombre, FechaNacimiento , genero, numeroCuenta, correo, escuela){
        super(nombre, FechaNacimiento , genero)
        this._numeroCuenta = numeroCuenta
        this._correo = correo
        this._escuela = escuela
    }

    getPerfil(){
        return `${this._numeroCuenta} ${this._nombre.getCompleto()}`
    }
    print() {
        console.log(this.getPerfil())
        console.log(this._numeroCuenta)
        console.log(this._correo)
        console.log(this._escuela)
    }
}