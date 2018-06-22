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
