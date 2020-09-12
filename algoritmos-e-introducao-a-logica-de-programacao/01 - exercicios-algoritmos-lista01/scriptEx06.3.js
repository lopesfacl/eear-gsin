function pares(listaValores){
	var listaPares = []
	var k=0;
	for(var i=0; i<listaValores.length; i++){
		if(listaValores[i]%2===0){
			listaPares[k] = listaValores[i]
			k++;
		}
	}
	return listaPares;
}
console.log("6.3) Valores pares: " + pares([32,45,89,66,12,35,10,96,38,15,13,11,65,81,35,64,16,89,54,19]));
