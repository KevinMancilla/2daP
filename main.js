import FechaNacimiento from "./fecha-nacimiento.js"
import Nombre from "./nombre.js"
import Persona from "./persona.js"
import Estudiante from "./estudiante.js"
import Maestro from "./maestro.js"
import Grupo from "./grupo.js"

class Main{
    constructor() {
        this.fecha = new FechaNacimiento(3, 3, 2005)
    }

    FechaNacimiento(){
        // lectura de atributo fecha
        console.log(this.fecha.getFecha())

        // escritura del atributo fecha

        console.log(this.fecha.setFecha(new Date(2207, 5, 2)))
        console.log(this.fecha.getFormatoExtendido())


        console.log(this.fecha.setFecha(new Date(2007, 5, 2)))
        console.log(this.fecha.getFormatoExtendido())

        // Acceso a los metodos
        console.log(this.fecha.getFormatoCorto())
        console.log(this.fecha.getFormatoExtendido())
        console.log(this.fecha.getEdad())
    }

    Nombre(){
        this._nombre = new Nombre("Kevin Rene", "Mancilla", "Marquez")
        console.log(this._nombre.getNombre())
        console.log(this._nombre.getApellidoMaterno())
        console.log(this._nombre.getIniciales())
    
    }

    Persona(){
        this._nombre = new Nombre("Kevin Rene", "Mancilla", "Marquez")
        this._persona = new Persona(this._nombre , this.fecha, "Masculino")
        console.log(this._persona.getPerfil())
    }

    Estudiante(){
        let e = new Estudiante(
            new Nombre("Kevin", "Mancilla", "Marquezs"),
            new FechaNacimiento(3, 3, 2005),
            "Masculino",
            20167574, 
            "kmancilla1@ucol.mx", 
            "Facultad de Telematica")
        e.print()
    }

    Maestro(){
        let m = new Maestro(
            new Nombre("Julio", "Alcaraz", "Montelon"),
            new FechaNacimiento(5,2,1994),
            "Masculino",
            "$20,000",
            2002394,
            "Director")
            m.print()
    }

    Grupo(){

  
        let e1 = new Estudiante(
            new Nombre("Kevin", "Mancilla", "Marquezs"),
            new FechaNacimiento(3, 3, 2005),
            "Masculino",
            20167574, 
            "kmancilla1@ucol.mx", 
            "Facultad de Telematica"
            )

        let e2 = new Estudiante(
            new Nombre("Ana", "Landin", "Lopez"),
            new FechaNacimiento(26, 4, 2000),
            "Femenino",
            20164214, 
            "alandin1@ucol.mx", 
            "Facultad de Telematica"
            )
        

        let e3 = new Estudiante(
            new Nombre("Martin", "Mojica", "Torres"),
            new FechaNacimiento(15, 12, 2001),
            "Masculino",
            20164564, 
            "mmojica1@ucol.mx", 
            "Facultad de Telematica"
            )

        let e4 = new Estudiante(
            new Nombre("Osiel", "Martinez", "Gonzales"),
            new FechaNacimiento(15, 12, 2001),
            "Femenino",
            12421412, 
            "mmojica1@ucol.mx", 
            "Facultad de Telematica"
            )    

        let grupo = new Grupo(1, "G")
            console.log(grupo.registrar(e1))
            console.log(grupo.registrar(e1))
            console.log(grupo.registrar(e1))
            console.log(grupo.registrar(e2))
            console.log(grupo.registrar(e3))
            console.log(grupo.registrar(e4))


            grupo.listarEstudiantes()

        console.log(grupo._encontrarEstudiante(e1))
        console.log(grupo._encontrarEstudiante(e2))
        console.log(grupo._encontrarEstudiante(e3))
        console.log(grupo._encontrarEstudianteV2(e1))

        console.log(grupo._encontrarIndiceEstudiante(e1))
        console.log(grupo._encontrarIndiceEstudiante(e2))
        console.log(grupo._encontrarIndiceEstudiante(e3))
        console.log(grupo._encontrarIndiceEstudianteV2(e4))

        console.log(grupo._eliminarEstudiante(e1))
        console.log(grupo._eliminarEstudiante(e4))

        console.log(grupo.actualizarEstudiante(e1, e4))
        grupo.listarEstudiantes()





    }
}

let app = new Main()

app.Grupo()

