function inverterVetor(lista){
	var listaInv = []
	var j= lista.length
	for(var i=0; i<lista.length; i++){
		listaInv[i] = lista[j-1] 
		j--;
	}
	return listaInv;
}
  
console.log("5) Vetor invertido: " + inverterVetor(['a','b']))