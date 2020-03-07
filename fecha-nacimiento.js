const diaSemana = [
    "Domingo", 
    "Lunes", 
    "Martes", 
    "Miercoles", 
    "Jueves", 
    "Viernes", 
    "Sabado"]
const nombreMes = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Junio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre"
]

export default class FechaNacimiento{
/**
 * FechaNacimiento
 * @param {number} dia Valor entre 1 y 31
 * @param {number} mes Valor entre 1 y 12
 * @param {number} año Año de la fecha de nacimiento
 */
    constructor(dia, mes, año) {
        this._fecha = new Date(año, mes - 1, dia)
        
    }
//** Metodo de acceso de lectura para el atributo fecha

    getFecha(){
        return this._fecha
    }

    /** Metodo de acceso para escritura para el atributo fecha
* @param {Date} fecha
*/
    setFecha(fecha){
        if (fecha <= Date.now()){
            this._fecha = fecha
            return true
        }
        return false
    }


    getEdad(){
        let difMSeg = Date.now() - this._fecha
        let mSegAño = 1000 * 60 * 60 * 24 * 365
        let edad = Math.trunc(difMSeg / mSegAño)

        return edad;
    }
   
    getFormatoCorto(){
        return (`${this._fecha.getDate()}/${(this._fecha.getMonth()) + 1}/${this._fecha.getFullYear()}`)
    }

    getFormatoExtendido(){
        let dia = diaSemana[this._fecha.getDay()]
        let mes = nombreMes[this._fecha.getMonth()]
        return (`${dia} ${(this._fecha.getDate())} de ${mes} del ${this._fecha.getFullYear()}`)
    }
}




