function impares(listaValores){
	var listaImpares = []
	var k=0;
	for(var i=0; i<listaValores.length; i++){
		if(listaValores[i]%2===1){
			listaImpares[k] = listaValores[i]
			k++;
			}
	}
	return listaImpares;
}
console.log("6.4) Valores ímpares: " + impares([32,45,89,66,12,35,10,96,38,15,13,11,65,81,35,64,16,89,54,19]));
