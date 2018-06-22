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

class ImpresoraDeDatos {
  imprimirDatos (datos) {
    console.log(datos);
  }
}
