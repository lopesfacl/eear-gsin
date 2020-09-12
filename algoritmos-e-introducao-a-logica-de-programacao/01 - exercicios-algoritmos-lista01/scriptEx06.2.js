function maior(listaValores){
	var maior = listaValores[0]
		for(var i=0; i<listaValores.length; i++){
		var valorAtual = listaValores[i];
		maior = valorAtual>maior?valorAtual:maior
	}
	return maior;
}

console.log("6.2) O maior valor é: " + maior([32,45,89,66,12,35,10,96,38,15,13,11,65,81,35,64,16,89,54,19]));
