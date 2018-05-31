## Clases de Javascript ##

* Duplicar código
* El código siempre cambia
* Reusar código
* Modularidad para resolver problemas


---
<center> CONCEPTOS </center>

### Clase: ###
	Define las características del Objeto.
### Objeto: ###
	Una instancia de una clase.
## Propiedad: ###
	Una característica de objeto, como el color.
## Método: ###
	Una capacidad de Objeto, como caminar.
---
## Constructor: ###
	Un método llamado en el momento de la instanciación.
## Herencia: ###
	Una clase puede heredar características de otra clase.
## Encapsulación: ###
	Una Clase solo define las características del Objeto, un método solo define cómo se ejecuta el método.
---
<center>Instancias y envio de mensajes</center>

* JavaScript es un lenguaje OOP con una implementación basada en prototipos.
* Molde objetos.
* Bici-Persona.
* Composición de mensajes.
    * Objeto destino
    * Método donde llamar
    * Parámetros solicitados por el método.

---
### THIS

* La palabra "this" es un mecanismo confuso, incluso para desarrolladores experimentados.
* Antes de explicar el como, vamos a examinar el por qué? 1.1
* Luego haremos la función más elegante. 1.2
* Sin embargo, los desarrolladores pensamos en el "this" demásiado literalmente.
* Vamos a explicar dos conceptos que a menudo son asumidos pero son incorrectos.
  * Itself (sí mismo)
  * Its Scope (su alcance)
--
### THIS CONFUSIONS (itself)
* El primer error es asumir que el "this" se refiere a la función en si. Por que?
    * Recusión.
    * Podemos pensar en guardar estados (+ adelante).
    * Vamos a ver un ejemplo de dicha confusión. (1.3.js)
    * Como resolvemos el problema. 1.3.hack.js
    * Y dentro de una función anónima 1.4.js
    * Otra manera de resolver el problema, con en lexico del "this" es 1.5.js
    * Por último podemos forzar "this", para que apunte a foo 1.6.js
--
### THIS CONFUSIONS (Its Scope)
* Una idea equivocada sobre el significado del this, es que de alguna manera se refiere al alcance de la función.
* Para ser claros no se refiere al alcance léxico de la función.
* Internamente si que se refiere en algo, pero ya eso es parte de la implementación.
* 1.7.js // repl
* Conclusión: Cada vez que intentemos mezclar búsquedas de ámbito léxico con "this", recuerde: NO ES POSIBLE
--
### ENTONCES QUE ES THIS?
Hasta ahora hemos visto varios conceptos de lo que no es el "this".
--
### THIS

* Como vemos el valor de this cambia según sobre que objeto lo llamemos.
* Regla de oro:
    el objeto this pasado a una función es el objeto que está antes del punto que precede los paréntesis que invocan a la función.
* Divivimos objectA.miMetodo() en 4 partes
    * objectA: El objeto que contiene la función
    * .(punto): Separa el objeto de su propiedad (la función)
    * miMetodo: Nombre de la función
    * (): Ejecutan la función

--
### CALL

* Recibe los mismos argumentos que la función mas uno, el valor que tendrá this que se pasa antes que los demás argumentos.

### APPLY

* Parecido al call
* Recibe 2 argumentos solo.
    * Contexto
    * Array con los argumentos

 
--
### BIND
* Recibe un argumento, el contexto que se pone a la función.
* Devuelve una funcion.
* El valor de this es ignorado cuando la función es llamada con el operador new.

---
## Constructores

#### New

* Crea una instancia de un objeto creado por el usuario.
* 2 pasos:
    * Definir objecto con una función.
    * Crear una instancia con new



--
## Constructores

#### New

* Qué ocurre cuando hacemos new?
    * el nuevo objecto hereda de MiObjeto.prototype.
    * Se llama al constructor, con “la regla de oro” (this).
    * El resultado obtenido puede variar (2). Si el constructor no devuelve un obj entonces será el creado en el paso 1 el que se pase.
    
* Por que las arrow function no sirven como constructores?
--
## Constructores

#### New

* Se puede agregrar más propiedades dinamicamente, pero solo al objecto creado, no se puede agregar a todos, para hacer eso hay que cambiar la definición. 3
* Se puede añadir objectos como propiedades. 4
--
## Constructores

#### Prototype (Funcition.prototype)
* Un valor desde cuyas instancias de una clase particular son creados. 
* Cada objeto que puede ser creado por la invocación a la función constructora posee una propiedad prototype asociada
--
## Constructores

#### Prototype (Object.prototype)
* Representa al objeto prototipo de Object. 
* No se puede sobrescribir.
* No es enumerable. 
* No es configurable.



--
## Constructores

#### Prototype (Object.prototype)
* Todos los objectos heredan las propiedades y métodos de Object.prototype, aunque pueden ser sobreescritos.
* Propiedades
    * Object.prototype.constructor -> al constructor que le ha creado
    * Object.prototype.__proto__ -> apunta al objecto que se uso como prototipo cuando fue instanciado
* Como JS no tiene objectos de tipo subclase, entonces prototype es util para crear una base (5)
--
## Limitaciones

* No hay una forma estandar de escribirlo, multiples formas.
* La clase no produce una interfaz, como en c++
* No existe forma estandar de hacer metodos o variables protegidas o privadas.
* No hay método de compilación que te indique los errores de tipo.
* No hay seguridad de tipo cuando lo quieres.
* En idiomas con un sistema de herencia que incluye conceptos como abstract o interface, podría, por ejemplo, declarar su interfaz en su capa de dominio pero colocar la implementación en su capa de infraestructura.

--
# Ejercicios

* Crear objetos usando la función Object
* Crear objetos usando notación literal
* Crear objetos usando el constructor de objetos y prototipos
* Agregar propiedades a cada tipo de objeto
* Agregar métodos a cada tipo de objeto
---
## Syntax Sugar

* GTFAMLH! (go too far and make life harder) Acrónimos
* Operadores ternarios (x ? a : b) Problema, una variable depende de x entonces uso if/else Dieta (1)
* Permite que una expresión sea expandida en situaciones donde se esperan múltiples argumentos (llamadas a funciones) o múltiples elementos (arrays literales). (2)
--
## Syntax Sugar
* Destrucción de objetos { vars } = config; (4)
    * Problema: si tenemos que extraer varios elementos del objeto entonces tendremos un path muy extenso. 
    * Dieta: Ir definiendo uno a uno los valores necesarios
* Resto del objeto { a,b,...rest} = config. 
    * Problema:  en el rest tengo todo el resto, pero solo quiero un par o uno. 
    * Dieta: Usar Object.assing() y luego borrar los que no necesito.
--
## Herencia

* Las clases son algo así como otro azúcar sintáctico sobre el patrón OO basado en prototipos.
* Ahora tenemos una forma concisa de hacer que los patrones de clase sean más fáciles de usar.
* Sobre el patrón de OO basado en prototipos para garantizar la compatibilidad con versiones anteriores. (6)
--
## Herencia

* Métodos estáticos. Se usan como utilidades. (7)
* Getters and Setters. (8)
* Propiedades de objetos mejorados. (9)
* Nombres computados. (11)
* Propiedades como métodos. (11)

---
### Decoradores

* Función que “envuelve” a otra para añadirle funcionalidad.
* Decorador ejemplo (1)
* Carácterísticas
    * llevan el prefijo @
    * Se incluyen antes del código que va a ser decorado.
--
### Decoradores

```js
@log()
@immutable()
class Example {
  @time('demo')
  doSomething() {
    //
  }
}
```
* Añadimos 3 decoradores
    * 2 a la clase
    * 1 a la propiedad
--
### Decoradores

* Función decoradora
```js
const decorator = (target, name, descriptor) => {
  ...
  return descriptor
}
```
* Target: Es una referencia al objeto que se va a modificar, y dependiendo del uso puede ser el constructor del objeto o el prototipo.
* Name: El nombre de la propiedad o método que se va a modificar.
* Descriptor: Se trata de un objeto que describe el objeto destino
--
### Decoradores

* Description:
```js
Object {
  configurable: true,
  enumerable: true,
  value: function functionName () { ... },
  writable: true
}
```
---
### SOLID ES6
* Explicamos con ejemplos
* EL PRINCIPIO DE RESPONSABILIDAD ÚNICA
    * Lo que dice es que un objeto solo tiene que tener una única responsabilidad. (2)
* EL PRINCIPIO ABIERTO/CERRADO (3)
    * Esto lo que viene a decir es que debemos pensar en ampliar funcionalidad, no modificando las entidades, sino extendiéndolas.
* EL PRINCIPIO DE SUSTITUCIÓN DE LISKOV
    * Las instancias de tipos base deberían poder ser reemplazados por instancias de sus subtipos sin alterar el correcto funcionamiento del programa.
* EL PRINCIPIO DE SEGREGACIÓN DE LA INTERFAZ
    *  Los clientes no deberían ser forzados a depender de los métodos que no utilizan.
* EL PRINCIPIO DE INVERSIÓN DE DEPENDENCIAS
    * No deberíamos depender de concreciones sino de abstracciones.
---
