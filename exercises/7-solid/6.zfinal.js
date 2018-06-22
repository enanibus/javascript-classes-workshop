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
  procesaDatos (datos, tipoDeFormateo, tipoDeImpresora) {
    var formateador = this.dameFormateador(tipoDeFormateo);
    var datosFormateados = formateador.formatearDatos(datos);
    var impresora = this.dameImpresora(tipoDeImpresora);
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

  dameImpresora (tipoDeImpresora) {
    switch (tipoDeImpresora) {
      case 'C':
        return new ImpresoraDeDatosPorConsola();
      case 'c':
        return new ImpresoraDeDatosEnCapa();
      default:
        return new ImpresoraDeDatos();
    }
  }
}

var p = new ProcesadorDeDatos();
p.procesaDatos('Principios SOLID con JavaScipt', 'M', 'C');
