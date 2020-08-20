/*
2)De una compra debes ingresar una cantidad indeterminada de productos,
 validando los siguientes datos:
marca, precio, peso en kilogramos, tipo(sólido o líquido)
a)informar el peso total de la compra.
b)la marca del más caro de los líquidos
c)la marca del más barato de los sólidos
*/function mostrar()
{
  
  
 	let marca;
 	let precio = 0;
 	let pesoEnKilos = 0;
 	let tipo;
 	let flagPeso = 1;
 	let flagTipoliquido = 1;
 	let flagTipoSolido = 1;
 	let pesoTotal = 0;
 	let precioMasCaroLiquidos = 0; 
 	let marcaDelMasCaroDeLosLiquidos;
 	let marcaMasBaratoDeLosSolidos;
  let precioMasBaratoSolidos = 0;
  let seguir = "s";

 	do
 	{
 		//validando la marca
 		marca = prompt("Ingrese la marca del producto:");
 		while(!isNaN(marca))
 		{
 			marca = prompt("Error!!! re-ingrese la marca del producto:");
 		}

 		//validando el precio
 		precio = parseInt(prompt("Ingrese el precio del producto:"));
 		while(isNaN(precio) || precio < 0)
 		{
 			precio = parseInt(prompt("Error!!! re-ingrese el precio del producto:")); 
 		}

 		//validando el peso en kilos
 		pesoEnKilos = parseFloat(prompt("Ingrese el peso en kilos del producto:"));
 		while(isNaN(pesoEnKilos) || pesoEnKilos < 0)
 		{
 			pesoEnKilos = parseFloat(prompt("Error!!! re-ingrese el peso en kilos del producto:"));
 		}

 		//validando el tipo (solido o liquido)
 		tipo = prompt("Ingrese el tipo del producto: (solido o liquido)");
 		while(tipo != "solido" &&  tipo != "liquido")
 		{
 			tipo = prompt("Error!!! re-ingrese el tipo del producto: (solido o liquido)");
 		}	

 		//Peso total de la compra!!!
 		if(flagPeso == 1)
 		{
 			pesoTotal = pesoTotal + pesoEnKilos;
 		}

 		//La marca del mas caro de los liquidos
 		switch(tipo)
 		{
 			case "liquido":                  
 				if(flagTipoliquido == 1 || precio > precioMasCaroLiquidos)
 				{		
 					precioMasCaroLiquidos = precio;
 					marcaDelMasCaroDeLosLiquidos = marca;
 					flagTipo = 0;
 				}
 				break;
 			case "solido":
 				if(flagTipoSolido == 1 || precio < precioMasBaratoSolidos)
 				{
 					precioMasBaratoSolidos = precio;
 					marcaMasBaratoDeLosSolidos = marca;
 					flagTipoSolido = 0;
 				}
 				break;	
 		}

 		//Si el usuario desea seguir validando;
 		seguir = prompt("Desea seguir ingresando productos? (s/n)")
 		while(seguir != "s" && seguir != "n")
 		{	
 			seguir = prompt("Error!!! desea seguir ingresando productos? (s/n)");
 		} 

 	}while(seguir == "s") 

 	//Por si no se ingresaron productos liquidos o solidos
 	if(precioMasCaroLiquidos == 0)
 	{
 		marcaDelMasCaroDeLosLiquidos = "No se ingresaron productos liquidos";
 	}
 	if(precioMasBaratoSolidos == 0)
 	{
 		marcaMasBaratoDeLosSolidos = "No se ingresaron productos solidos";
 	}


 	//Asignando valores finales
 	console.log("El peso total de la compra es: " + pesoTotal);
 	console.log("La marca del mas caro de los liquidos es: " + marcaDelMasCaroDeLosLiquidos);
 	console.log("La marca del mas barato de los solidos es: " + marcaMasBaratoDeLosSolidos);
  

}
