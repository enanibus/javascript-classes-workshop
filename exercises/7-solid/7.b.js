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
  new ImpresoraDeDatosEnCapa());
p.procesaDatos('Principios SOLID con JavaScipt');
