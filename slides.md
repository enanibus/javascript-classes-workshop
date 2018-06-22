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
### Instancias y envio de mensajes

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
Sin embargo hemos visto que "this" es un enlace.
### CALL-SITE
La posición donde la función es llamada (no declarada).
Muchas veces encontrar el sitio de la llamada es tedioso (patrones lo ocultan).
Por lo que nos interesa el call-stack. (sitio previo a la invocación).
--
### Nada más que reglas
Al inspeccionar el sitio de las llamadas(call-stack) debemos debemos determinar cual de las 4 reglas se aplica, para saber el sitio de la llamada. 1.8 debug
Verermos cada regla.
--
### DEFAULT BINDING
* Más común.
* Invocación de función independiente.
* Si ninguna está presente esta se aplica.
* Ejemplo: 1.9.js
* Modo stricto "use strict"
--
### IMPLICIT BINDING
* El sitio de llamada tiene contexto?
* aka objeto propietario, o que contiene
* Ejemplo: 1.10.js
* Solo el nivel superior/último de una cadena de referencia de propiedad del objeto es importante para el sitio de llamada. Ejemplo: 1.11.js
--
### IMPLICITLY LOST
* Una de las frustraciones más comunes que crea "this" enlace es cuando una función implícitamente unida pierde ese enlace.
* Lo que normalmente significa que vuelve a la vinculación predeterminada.
* Ya sea del objeto global o indefinido, dependiendo del modo estricto.
* Xj 1.12.js
* otro ejemplo más común es pasando un cb 1.13.js


--
### Explicit Binding
* Como forzar el enlace?
* Js disponde de call y apply
* Ambas funciones reciben como primer parámetro el obj a usar como this
* Por ello lo llamamos enlace explícito.
* xj 1.13.js
* Si se pasa un String, o un number, se transforma en obj ("boxig")
--
### HARD BINDING
* Una variante del enlace explícito. 1.15.js
* Como puedo hacer un wraper de un enlace duro? 1.16.js
* Como esté patrón es el más común es5 proporciona el bind 1.17.js

--
### new Binding
* Última regla 
* Reconsideraremos un idea erronea de Js
```
something = new MyClass(..);
```
* No es exactamente igual (Constructores)
* Veremos más adelante.
--
### Conclusiones
* Hemos visto las 4 reglas.
* Ver el sitio de llamadas, pero si es ilegible?
* Reglas de precedencia.
* Debe quedar claro que el enlace predeterminado es la regla de menor prioridad de 4. Así que simplemente dejaremos de lado ese enlace.
* Que es más precedente, implicito o explícito? 1.18.js
* Ahora, solo tenemos que averiguar dónde encaja new en la precedencia 1.19.js
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
### Constructores
* Son funciones que se llaman con el operador new en frente de ellas.
* No vinculan a la clase, ni crean una clase.
* Más bien se puede decir que se hace una llamada a un función de construcción.
* Qué ocurre cuando se llama a new: 
* un objeto nuevo se crea (aka, construido) de la nada.
* El objeto recién construido es [[Prototype]] - vinculado.
* El objeto recién construido se establece como el enlace para esa llamada de función
* Si la función no devuelve otro objeto se devuelve el objeto deseado.


--
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
    * El resultado obtenido puede variar. Si el constructor no devuelve un obj entonces será el creado en el paso 1 el que se pase.
    
* Por que las arrow function no sirven como constructores?
--
## Constructores

#### New

* Se puede agregrar más propiedades dinamicamente, pero solo al objecto creado, no se puede agregar a todos, para hacer eso hay que cambiar la definición. 
* Se puede añadir objectos como propiedades. 
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
* Destrucción de objetos { vars } = config; (3)
    * Problema: si tenemos que extraer varios elementos del objeto entonces tendremos un path muy extenso. 
    * Dieta: Ir definiendo uno a uno los valores necesarios
* Resto del objeto { a,b,...rest} = config. 
    * Problema:  en el rest tengo todo el resto, pero solo quiero un par o uno. 
    * Dieta: Usar Object.assing() y luego borrar los que no necesito.
--
### Clases
* Las clases son algo así como otro azúcar sintáctico sobre el patrón OO basado en prototipos.
* Ahora tenemos una forma concisa de hacer que los patrones de clase sean más fáciles de usar.
* Sobre el patrón de OO basado en prototipos para garantizar la compatibilidad con versiones anteriores.



--
## Método

* Métodos estáticos. Se usan como utilidades. (7)
* Getters and Setters. (8)
* Propiedades de objetos mejorados. (9)
* Nombres computados. (11)
* Propiedades como métodos. (11)

--
### Herencia
* Lng orientados no solo hace falta la abstracta.
* La clase secundaria es una copia inicia, pero puede extender.
* Consideremos 7.js
--
### Polimorfismo
* Ejemplo método drive
* Aka polimorfismo, polimorfismo virtual o relativo.
*  la idea de que cualquier método puede hacer referencia a otro método (del mismo o diferente nombre) en un nivel superior de la jerarquía de herencia
* Decimos "relativo" porque no definimos absolutamente qué nivel de herencia (es decir, clase) queremos acceder, sino que lo referenciamos básicamente diciendo "mira un nivel arriba"
--
### Herencia mútiple
* A supre, B y C heredan de A y E hereda de B y C.
* Si B y C tiene metodo unidad? Problema Diamante
* Js no proporciona herencia múltiple.
* Pero podemos simularla lo veremos más adelante.
--
### Mixins
* El mecanismo de objeto de JavaScript no realiza automáticamente el comportamiento de copia cuando "hereda" o "instancia".
* Y los objetos no se copian a otros objetos, sino que se vinculan entre si.
* Veremos dos tipos de "mixin": explícitos e implícitos.
--
### Mixin Explicito
* Volvamos a revisar nuestro ejemplo de vehículo y automóvil de antes. 
* Como JavaScript no copiará automáticamente el comportamiento de Vehicle a Car
* Podemos crear una utilidad que se copie manualmente. 
* Tal utilidad a menudo se denomina extender (..) por muchas bibliotecas / marcos, pero la llamaremos mixin (..) aquí con fines ilustrativos.
--
### Mixins Implicito
* Viene relacionado con el implicito pero con ciertas advertencias.
* 9.js
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
* Empezamos con un ejemplo
* EL PRINCIPIO DE RESPONSABILIDAD ÚNICA
* EL PRINCIPIO ABIERTO/CERRADO
* EL PRINCIPIO DE SUSTITUCIÓN DE LISKOV
* EL PRINCIPIO DE SEGREGACIÓN DE LA INTERFAZ
* EL PRINCIPIO DE INVERSIÓN DE DEPENDENCIAS
--
### EL PRINCIPIO DE RESPONSABILIDAD ÚNICA
* Este principio no dice que un objeto solo pueda hacer una cosa.
* Lo que dice es que un objeto solo tiene que tener una única responsabilidad (2)
--
### EL PRINCIPIO ABIERTO/CERRADO
* Esto lo que viene a decir es que debemos pensar en ampliar funcionalidad, no modificando las entidades, sino extendiéndolas.
* Imaginemos en el ejemplo anterior que queremos a veces formatear en mayúsculas, otras veces en minúsculas, y otras veces simplemente añadir los asteriscos. Ejercicio
* sol 4.js



--
### EL PRINCIPIO DE SUSTITUCIÓN DE LISKOV
* En el caso anterior, hemos creado 2 clases subtipo: "FormateadorDeDatosMayusculas" y "FormateadorDeDatosMinusculas", y ambos heredan del tipo base "FormateadorDeDatos". 5.intro.js
* 5.zfinal.js
--
### EL PRINCIPIO DE SEGREGACIÓN DE LA INTERFAZ
* no crees interfaces demasiado genéricas pues puedes obligar a implementar métodos que los clientes no utilizan.
* ¿qué tiene que ver este principio con JavaScript, si JavaScript no tiene interfaces?
* Interfaces nos referimos a algún tipo abstracto proporcionado por el lenguaje para establecer contratos y permitir desacoplamiento, entonces, tal afirmación sería correcta.

--
### EL PRINCIPIO DE SEGREGACIÓN DE LA INTERFAZ

* Sin embargo, JavaScript tiene otro tipo de interfaces
* Ejercicio queramos tener un tipo base "ImpresoraDeDatos" que obligue a implementar sus métodos, y luego tener 2 subtipos: "ImpresoraDeDatosPorConsola" e "ImpresoraDeDatosEnCapa".
--
### EL PRINCIPIO DE INVERSIÓN DE DEPENDENCIAS
* consumidor y su proveedor
* Si el proveedor depende de otras empresas, y una de esas empresas falla, el proveedor falla, y el consumidor se molesta.
* Sin embargo, si el proveedor delega en el consumidor la responsabilidad de elegir las empresas, el proveedor sólo se preocupa de su labor.
--
### EL PRINCIPIO DE INVERSIÓN DE DEPENDENCIAS
* Ahora si una empresa falla, es el consumidor el que debe de corregir el problema, ya sea reclamando a la empresa o simplemente cambiando de empresa.
* Lo primero que hay que identificar son las dependencias que esta clase tiene, que son "FormateadorDeDatos" e "ImpresoraDeDatos".

---
