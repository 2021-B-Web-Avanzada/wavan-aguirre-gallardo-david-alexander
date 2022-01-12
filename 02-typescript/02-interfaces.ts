//02interfaces.ts
interface Usuario {
    nombre: string;
    apellido: string;
    edad?: number;
    sueldo?: number;
    casado:boolean;
    estado: 'AC' | 'IN' |'BN';
    imprimirUsuario: (mensaje: string) => string | 'BN';
    calcularImpuesto: (impuesto:number) => number;
    estadoActual: ()=> 'AP' | 'AF' | 'AT';
    //CALCUlarImpuesto parametro numero impuesto , sueldo + sueldo = impuesto
    //estadoActual no recibe parametro , 'AP', 'AF', 'AT'
}
let user: Usuario = {
    nombre:'David',
    apellido: "Aguirre",
    casado: false,
    edad: 0,
    estado: 'AC',
    sueldo: 11.2,
    imprimirUsuario(mensaje: string): string | "BN" {
        return "El mensaje es: "+ mensaje;
    },
    calcularImpuesto(impuesto: number): number {
       return this.sueldo+this.sueldo*impuesto;
    },
    estadoActual: ()=>{
        switch(this.estado){
            case 'AC':
                return 'AP';
            case 'IN':
                return 'AF';
            case 'BN':
                return 'AT';
        }
    }
}