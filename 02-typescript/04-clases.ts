class Persona{
    public nombre:string;
    public apellido:string
    static nombreReferencia:string = "Humano";
    protected nombreYApellido = ''; //Duck typing -> string
    constructor(
        nombreParametro:string,
        apellidoParametro:string
    ) {
        this.nombre=nombreParametro;
        this.apellido=apellidoParametro;
        this.nombreYApellido = nombreParametro + ' '+ apellidoParametro;
    }
    private mostrarNombreApellido():string{
        return this.nombreYApellido;
    }
}

class Usuario extends Persona{
    constructor(nombreParametro:string,apellidoParametro:string,public cedula:string, public estadoCivil:string) {
        super(nombreParametro,apellidoParametro);
    }
}
const david = new Usuario(
    'David',
    'Aguirre',
    '1751469972',
    'soltero'
);
david.nombre;
david.apellido;
david.cedula;
david.estadoCivil;