/*
3)Nos ingresan una cantidad indeterminada de estadías de  vacaciones, 
validando los datos ingresados. 
sexo del titular ,lugar ( “bariloche”, “cataratas” o “salta”),
temporada(“otoño”,”invierno, “verano,”primavera”),
cantidad de personas que viajan.
informar:
a)el lugar más elegido
b)el sexo de titular que lleva más pasajeros.
c)el promedio de personas por viaje,  que viajan en invierno
*/
function mostrar()
{
	//variables
	let sexo;
	let lugar;
	let temporada; 
	let cantidadDePersonas;
	let cantidadDePesonasAbariloche = 0;
	let cantidadDePesonasAcataratas = 0;
	let cantidadDePesonasAsalta = 0;
	let lugarMasElegido;
	let sexotitularConMasPasajeros;
	let cantidadPeronasViajanEnInvierno = 0;
	let contadorPeronasViajanEnInvierno = 0;
	let flagTemporada = 1;
	let promedio;
	let seguir = "s";

	
	//Comenzando el algoritmo
	do
	{
		//Validando el sexo!!!
		//sexo = prompt("Ingrese el nombre del titular:");
		sexo = prompt("Ingrese el sexo del titular: (masculino o femenino)");
		while(sexo != "masculino" && sexo != "femenino")
 		{
 			sexo = prompt("Error!!! re-ingrese el nombre del titular:");
 		}

 		//Validando el lugar
 		lugar = prompt("Ingrese el lugar a viajar: \n a-bariloche \n b-cataratas \n c-salta");
 		while(lugar != "bariloche" && lugar != "cataratas" && lugar != "salta")
 		{
 			lugar = prompt("Error!! re-ingrese el lugar a viajar: \n a-bariloche \n b-cataratas \n c-salta");
 		}	

 		//validando la temporada
 		temporada = prompt("Ingrese en la temporada que quiere viajar: \n a-otoño \n b-invierno \n c-primavera \n d-verano");
 		while(temporada!="otoño" && temporada!="invierno" && temporada!="primavera" && temporada!="verano")
 		{
 			temporada = prompt("Error!!!re-ingrese en la temporada que quiere viajar: \n a-otoño \n b-invierno \n c-primavera \n d-verano");
 		}

 		//validando la cantidad de personas;
 		cantidadDePersonas = parseInt(prompt("Ingrese la cantidad de personas que viajan:"));
 		while(isNaN(cantidadDePersonas) || cantidadDePersonas < 0)
 		{
 			cantidadDePersonas = parseInt(prompt("Ingrese la cantidad de personas que viajan:"));
 		}

 		switch(lugar)
 		{
 			case "bariloche":
 				cantidadDePesonasAbariloche = cantidadDePesonasAbariloche + cantidadDePersonas;

 				break;
 			case "cataratas":
 				cantidadDePesonasAcataratas = cantidadDePesonasAcataratas + cantidadDePersonas;
 				break;
 			case "salta":
 				cantidadDePesonasAsalta = cantidadDePesonasAsalta + cantidadDePersonas;
 				break;		
 		}


		//Lugar mas elegido y sexo del titular con mas pasajeros
		if(cantidadDePesonasAbariloche > cantidadDePesonasAcataratas && cantidadDePesonasAbariloche > cantidadDePesonasAsalta)
		{
			lugarMasElegido = "bariloche";
			sexotitularConMasPasajeros = sexo;
		}
		else if(cantidadDePesonasAcataratas > cantidadDePesonasAsalta)
		{
			lugarMasElegido = "cataratas";
			sexotitularConMasPasajeros = sexo;
		}
		else
		{
			lugarMasElegido = "salta";
			sexotitularConMasPasajeros = sexo;
		}	

		//cantidad de personas que viajan en invierno;
		switch(temporada)
		{
			case "invierno":
				if(flagTemporada == 1)
				{
					cantidadPeronasViajanEnInvierno = cantidadPeronasViajanEnInvierno + cantidadDePersonas;
					contadorPeronasViajanEnInvierno++;
				}
				break;
		}

		//Desea seguir ingresando viajes;
		seguir = prompt("¿Desea seguir ingresando viajes?: (s/n)"); 
		while(seguir != "s" && seguir != "n")
		{
			seguir = prompt("Error!!! ¿Desea seguir ingresando viajes?: (s/n)"); 
		}

	}while(seguir == "s")


	//Promedio de las personas por viaje
	if(cantidadPeronasViajanEnInvierno > 0)
	{
		promedio = cantidadPeronasViajanEnInvierno / contadorPeronasViajanEnInvierno;
	}
	else
	{
		promedio = "No se ingresaron personas que viajen en invierno;"
	}
	


	//asignando valores finales;
	console.log("El lugar mas elegido es : " + lugarMasElegido);
	console.log("El sexo del titular con mas pasajeros es: " + sexotitularConMasPasajeros);
	console.log("El promedio de las personas que viajan en invierno es: " + promedio);  
}