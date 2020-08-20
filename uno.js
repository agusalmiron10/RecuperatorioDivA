/*
1)De 5  personas que ingresan al hospital se deben tomar y 
validar los siguientes datos.
nombre ,peso, sexo y edad.
a)informar la cantidad de mujeres.
b)la edad promedio en total.
c)el hombre mas pesado.
pedir datos por prompt y mostrar por document.write o console.log
*/
function mostrar()
{
	//Variables
	let nombre;
	let peso;
	let sexo;
	let edad;
	let edadTotal = 0; 
	let flagEdad = 1;
	let flagPeso = 1;
	let pesoHombreMasPesado = 0;
	let nombreDelHombreMasPesado;
	let contadorMujeres = 0;
	let promedio;


	for(var i = 0; i < 5; i++)
	{

		//validando el nombre
		nombre = prompt("Ingrese el el nombre:");
		while(!isNaN(nombre))
		{
			nombre = prompt("Error!!! re-ingrese el el nombre:");
		}

		//validando el peso;
		peso = parseFloat(prompt("Ingrese el peso:"));
		while(isNaN(peso) || peso < 0)
		{
			peso = parseFloat(prompt("Error!!! re-ingrese el peso"));
		}

		//validando el sexo;
		sexo = prompt("Ingrese el sexo: (masculino o femenino)");
		while(sexo != "masculino" && sexo != "femenino")
		{
			sexo = prompt("Error!!! re.ingrese el sexo: (masculino o femenino)");
		}

		//validando el edad;
		edad = parseInt(prompt("Ingrese la edad:"));
		while(isNaN(edad) || edad < 0)
		{
			edad = parseInt(prompt("Error!!! re-ingrese la edad"))
		}	

		//Informando la cantidad de mujeres;
		switch(sexo)
		{
			case "femenino":
				contadorMujeres++;
				break;
			case "masculino":
			//El hombremas pesado
				if(flagPeso == 1 || peso > pesoHombreMasPesado )
				{
					pesoHombreMasPesado = peso;
					nombreDelHombreMasPesado = nombre;
					flagPeso = 0;
				}
				break;	
		}

		//La edad promedio total;
		if(flagEdad == 1)
		{
			edadTotal = edadTotal + edad;
		}

	}

	//Si no se ingresan mujeres o si no se ingresan hombres;
	if(contadorMujeres == 0)
	{
		contadorMujeres = "no se ingresaron mujeres";
	}
	if(pesoHombreMasPesado == 0)
	{
		nombreDelHombreMasPesado = "no se ingresaron hombre";
	}


	//sacando el promedio de las edades totales;
	promedio = edadTotal / 5;


	//Asignando los datos finales;
	console.log("La cantidad de mujeres es: " + contadorMujeres);
	console.log("El promedio de las edades es: " + promedio);
	console.log("El hombre mas pesado es: " + nombreDelHombreMasPesado);
}
