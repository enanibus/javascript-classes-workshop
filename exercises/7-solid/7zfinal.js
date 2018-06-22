class ImpresoraDeDatos {
  imprimirDatos (datos) {
    throw new Error('Método no implementado');
  }
}

class ImpresoraDeDatosPorConsola extends ImpresoraDeDatos {
  imprimirDatos (datos) {
    console.log('Imprimiendo datos...');
    console.log(datos);
  }
}

class ImpresoraDeDatosEnCapa extends ImpresoraDeDatos {
  imprimirDatos (datos) {
    console.log('Imprimiendo datos...');
    var capa = this.dameCapa();
    capa.innerHTML += '<br />' + datos;
  }

  dameCapa () {
    return document.getElementById('imprimir');
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
  constructor (_formateador, _impresora) {
    this.formateador = _formateador;
    this.impresora = _impresora;
  }

  procesaDatos (datos) {
    var datosFormateados = this.formateador.formatearDatos(datos);
    this.impresora.imprimirDatos(datosFormateados);
  }
}

var p = new ProcesadorDeDatos(new FormateadorDeDatosMayusculas(),
  new ImpresoraDeDatosPorConsola());
p.procesaDatos('Principios SOLID con JavaScipt');

var q = new ProcesadorDeDatos(new FormateadorDeDatosMinusculas(),
  new ImpresoraDeDatosPorConsola());
q.procesaDatos('Principios SOLID con JavaScipt');
