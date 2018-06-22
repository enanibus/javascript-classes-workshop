class ProcesadorDeDatos {
  constructor (tipoDeFormateo, tipoDeImpresora) {
    switch (tipoDeFormateo) {
      case 'M':
        this.formateador = new FormateadorDeDatosMayusculas();
        break;
      case 'm':
        this.formateador = new FormateadorDeDatosMinusculas();
        break;
      default:
        this.formateador = new FormateadorDeDatos();
    }

    switch (tipoDeImpresora) {
      case 'C':
        this.impresora = new ImpresoraDeDatosPorConsola();
        break;
      case 'c':
        this.impresora = new ImpresoraDeDatosEnCapa();
        break;
      default:
        this.impresora = new ImpresoraDeDatos();
    }
  }

  procesaDatos (datos) {
    var datosFormateados = this.formateador.formatearDatos(datos);
    this.impresora.imprimirDatos(datosFormateados);
  }
}

var p = new ProcesadorDeDatos('M', 'c');
p.procesaDatos('Principios SOLID con JavaScipt');
/*
Con esto hemos identificado las dependencias y 
las hemos puesto como atributos de clase, 
pero la elección de los subtipos la sigue haciendo la propia clase en vez del cliente.
Para cumplir con este último principio deberíamos tener algo así:
*/