class ProcesadorDeDatos {
  procesaDatos (datos) {
    var datosFormateados = this.formatearDatos(datos);
    this.imprimirDatos(datosFormateados);
  }

  formatearDatos (datos) {
    console.log('Formateando datos...');
    return '******************************'+
            '\n' + datos + '\n'+
            '******************************';
  }

  imprimirDatos (datos) {
    console.log('Imprimiendo datos...');
    console.log(datos);
  }
}

var p = new ProcesadorDeDatos();
p.procesaDatos('Principios SOLID con JavaScipt');

/* 
Vamos a crear un procesador de datos
 tendrá 3 métodos
 procesaDatos
 formateaDatos
 imprimeDatos
*/