class ImpresoraDeDatos {
  imprimirDatos (datos) {
    throw new Error('Método no implementado');
  }

  dameCapa () {
    throw new Error('Método no implementado');
  }
}

class ImpresoraDeDatosPorConsola extends ImpresoraDeDatos {
  imprimirDatos (datos) {
    console.log('Imprimiendo datos...');
    console.log(datos);
  }

  dameCapa () {
    console.log('La impresora por pantalla no necesita capa');
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
/*
De nuevo, tu instinto de programador te estará alertando, y estarás pensando: 
"¿por qué en el subtipo que imprime por consola necesito implementar 
el método que retorna la capa en donde se concatena el texto si no lo necesito?"

Efectivamente, 
el problema viene porque desde el tipo base se obliga a implementar un método 
que en realidad no siempre es necesario.
*/