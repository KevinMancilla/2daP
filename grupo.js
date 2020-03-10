import estudiante from "./estudiante.js"
export default class Grupo{
    constructor(semestre, grupo){
        this._semestre = semestre
        this._grupo = grupo
        this._estudiantes = new Array()
    }
    registrar(estudiante){
        if(this._encontrarEstudiante(estudiante) !== null) {
            return false
        }
        this._estudiantes.push(estudiante)
        return true
    }


    _encontrarIndiceEstudianteV2(estudiante){
        let result = this._estudiantes.findIndex(e => e.esIgualA(estudiante))
        return result
    }

    _encontrarEstudiante(estudiante){
        let result = null

        this._estudiantes.forEach(e => {
            if(e.esIgualA(estudiante)){
                result = e
            }
        })
        return result
    }

    _encontrarEstudianteV2(estudiante){
        let result = this._estudiantes.find( e => e.esIgualA(estudiante))
        return result
    }

    _encontrarIndiceEstudiante(estudiante){
        let indice = -1
        this._estudiantes.forEach((e, i) =>{
            if(e.esIgualA(estudiante)) {
                indice = i
            }
        })
        return indice
    }

    _eliminarEstudiante(estudiante){
        let indice = this._encontrarIndiceEstudiante(estudiante)
        if(indice < 0){
            return false
        }
        this._estudiantes.splice(indice, 1)
        return true
    }

    actualizarEstudiante(estudiante, nuevoEstudiante){
        let indice = this._encontrarIndiceEstudiante(estudiante)
        if(indice < 0 ){
            return false
        }
        this._estudiantes.splice(indice, 1, nuevoEstudiante)
        return true
    }

    listarEstudiantes(){
        this._estudiantes.forEach((estudiante, i) => {
            console.log(`${i + 1} ${estudiante.getPerfil()}`)
        })
    }
}