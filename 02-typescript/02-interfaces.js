var _this = this;
var user = {
    nombre: 'David',
    apellido: "Aguirre",
    casado: false,
    edad: 0,
    estado: 'AC',
    sueldo: 11.2,
    imprimirUsuario: function (mensaje) {
        return "El mensaje es: " + mensaje;
    },
    calcularImpuesto: function (impuesto) {
        return this.sueldo + this.sueldo * impuesto;
    },
    estadoActual: function () {
        switch (_this.estado) {
            case 'AC':
                return 'AP';
            case 'IN':
                return 'AF';
            case 'BN':
                return 'AT';
        }
    }
};
