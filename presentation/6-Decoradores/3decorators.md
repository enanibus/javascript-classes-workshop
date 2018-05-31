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