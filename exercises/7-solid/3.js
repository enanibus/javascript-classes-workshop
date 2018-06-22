class FormateadorDeDatos {
  formatearDatos (datos, tipoDeFormateo) {
    console.log('Formateando datos...');
    var datosFormateados = '******************************'+
                            '\n' + datos + '\n'+
                            '******************************';
    switch (tipoDeFormateo) {
      case 'M':
        return datosFormateados.toUpperCase();
      case 'm':
        return datosFormateados.toLowerCase();
      default:
        return datosFormateados;
    }
  }
}
/*
"Qué feo es ese código ¿no?" 
"¿Y qué pasa si queremos añadir otro tipo de formateo, hay que volver a tocar el switch?".
*/