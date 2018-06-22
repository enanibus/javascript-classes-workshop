class FormateadorDeDatos {
  formatearDatos (datos) {
    console.log('Formateando datos...');
    return '******************************'+
            '\n' + datos + '\n'+
            '******************************';
  }
}

class ImpresoraDeDatos {
  imprimirDatos (datos) {
    console.log('Imprimiendo datos...');
    console.log(datos);
  }
}

class ProcesadorDeDatos {
  procesaDatos (datos) {
    var formateador = new FormateadorDeDatos();
    var datosFormateados = formateador.formatearDatos(datos);

    var impresora = new ImpresoraDeDatos();
    impresora.imprimirDatos(datosFormateados);
  }
}

var p = new ProcesadorDeDatos();
p.procesaDatos('Principios SOLID con JavaScipt');

/*
De un objeto que lo hacía todo, hemos pasado a 3: 
uno que se dedica a formatear los datos, 
otro clase que se dedica a imprimirlos por pantalla, 
y otro que lo orquesta todo.

¿Podíamos haber dejado el objeto "ProcesadorDeDatos" cuyo responsabilidad sería procesar datos?
 Sí, por qué no. Lo único que su responsabilidad sería más genérica.

Entonces,
¿cómo saber como de específico o 
de genérico tenemos que crear nuestros objetos para cumplir con el principio de responsabilidad única? 
Creo que sólo la experiencia da respuesta a esta pregunta.
*/