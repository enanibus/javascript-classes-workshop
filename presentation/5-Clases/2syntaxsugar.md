## Syntax Sugar
* Destrucción de objetos { vars } = config; (4)
    * Problema: si tenemos que extraer varios elementos del objeto entonces tendremos un path muy extenso. 
    * Dieta: Ir definiendo uno a uno los valores necesarios
* Resto del objeto { a,b,...rest} = config. 
    * Problema:  en el rest tengo todo el resto, pero solo quiero un par o uno. 
    * Dieta: Usar Object.assing() y luego borrar los que no necesito.