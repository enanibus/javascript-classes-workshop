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
    let datosFormateados = '';
    let formateador;
    switch (tipoDeFormateo) {
      case 'M':
        formateador = new FormateadorDeDatosMayusculas();
        datosFormateados = formateador.formatearDatos(datos, tipoDeFormateo);
        break;
      case 'm':
        formateador = new FormateadorDeDatosMinusculas();
        datosFormateados = formateador.formatearDatos(datos, tipoDeFormateo);
        break;
      default:
        formateador = new FormateadorDeDatos();
        datosFormateados = formateador.formatearDatos(datos, tipoDeFormateo);
    }

    var impresora = new ImpresoraDeDatos();
    impresora.imprimirDatos(datosFormateados);
  }
}

var p = new ProcesadorDeDatos();
p.procesaDatos('Principios SOLID con JavaScipt');
p.procesaDatos('Principios SOLID con JavaScipt', 'M');
p.procesaDatos('Principios SOLID con JavaScipt', 'm');


/*
"¿Por qué tenemos que repetir el código donde se formatean los datos?".
Efectivamente hay una mejor forma de hacerlo, 
y es aplicando el principio de sustitución de Liskov: */