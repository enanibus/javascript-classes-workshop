class ImpresoraDeDatos {
  imprimirDatos (datos) {
    console.log(datos);
  }
}
class FormateadorDeDatos {
  formatearDatos (datos) {
    console.log('Formateando datos...');
    return '******************************' +
                '\n' + datos + '\n' +
                '******************************';
  }
}

class FormateadorDeDatosMayusculas extends FormateadorDeDatos {
  formatearDatos (datos) {
    var datosFormateados = super.formatearDatos(datos);
    return datosFormateados.toUpperCase();
  }
}

class FormateadorDeDatosMinusculas extends FormateadorDeDatos {
  formatearDatos (datos) {
    var datosFormateados = super.formatearDatos(datos);
    return datosFormateados.toLowerCase();
  }
}
class ProcesadorDeDatos {
  procesaDatos (datos, tipoDeFormateo) {
    var formateador = this.dameFormateador(tipoDeFormateo);
    var datosFormateados = formateador.formatearDatos(datos);
    var impresora = new ImpresoraDeDatos();
    impresora.imprimirDatos(datosFormateados);
  }

  dameFormateador (tipoDeFormateo) {
    switch (tipoDeFormateo) {
      case 'M':
        return new FormateadorDeDatosMayusculas();
      case 'm':
        return new FormateadorDeDatosMinusculas();
      default:
        return new FormateadorDeDatos();
    }
  }
}

var p = new ProcesadorDeDatos();
p.procesaDatos('Principios SOLID con JavaScipt');
p.procesaDatos('Principios SOLID con JavaScipt', 'M');
p.procesaDatos('Principios SOLID con JavaScipt', 'm');

/*
Como vemos, hemos creado la función "dameFormateador" 
que retorna el tipo "FormateadorDeDatos", o cualquiera de sus subtipos. 
Y ahora desde la función "procesaDatos" 
se trabaja indistintamente con una instancia del tipo "FormateadorDeDatos" 
o con una instancia de cualquiera de sus subtipos.
*/