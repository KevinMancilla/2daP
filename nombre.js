export default class Nombre{
    constructor(nombre, apellidoPaterno, apellidoMaterno){
        this._nombre = nombre.toUpperCase()
        this._apellidoPaterno = apellidoPaterno.toUpperCase(
        this._apellidoMaterno = apellidoMaterno.toUpperCase())
    }



    
    getNombre() {
        return `${this._nombre}`
    }

    setApellidoPaterno(apellido){
        this._apellidoPaterno = apellido.toUpperCase()
    }

    getApellidoMaterno() {
        return this._apellidoMaterno
    }

    setApellidoMaterno(){
        this._apellidoMaterno = apellido.toUpperCase()
    }



    getCompleto(){
        return `${this._nombre} ${this._apellidoPaterno} ${this._apellidoMaterno}`
    }

    getInvertido(){
        return `${this._apellidoPaterno} ${this._apellidoMaterno} ${this._nombre}`
    }

    getIniciales(){
        return `${this._nombre[0]} ${this._apellidoPaterno[0]} ${this._apellidoMaterno[0]}`
    }
}