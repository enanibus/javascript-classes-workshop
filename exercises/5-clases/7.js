class Vehicle {
	engines = 1

	ignition() {
		output( "Turning on my engine." )
	}

	drive() {
		ignition()
		output( "Steering and moving forward!" )
	}
}

class Car inherits Vehicle {
	wheels = 4

	drive() {
		inherited:drive()
		output( "Rolling on all ", wheels, " wheels!" )
	}
}

class SpeedBoat inherits Vehicle {
	engines = 2

	ignition() {
		output( "Turning on my ", engines, " engines." )
	}

	pilot() {
		inherited:drive()
		output( "Speeding through the water with ease!" )
	}
}

/*
Nota: para mayor claridad y brevedad, 
los constructores de estas clases se han omitido.

Definimos la clase Vehículo para asumir un motor, 
una forma de encender el encendido y una forma de conducir.
 Pero nunca podrías fabricar solo un "vehículo" genérico, 
 por lo que en este momento es solo un concepto abstracto.

Entonces definimos dos tipos específicos de vehículos: Car y SpeedBoat. 
Cada uno de ellos hereda las características generales de Vehicle, 
pero luego se especializan en las características adecuadas para cada tipo. 
Un automóvil necesita 4 ruedas, y un bote de velocidad necesita 2 motores, 
lo que significa que necesita atención adicional para encender el encendido de ambos motores.
*/