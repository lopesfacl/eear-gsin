function inverterPalavra(palavra){
	var tam= palavra.length
	var palavraInv = ""
	for(var i=0; i<palavra.length; i++){
		palavraInv += palavra[(tam-1)-i] 
	}
	return palavra===palavraInv?true:false
}


console.log("8) É um palíndromo? " + inverterPalavra("mussum"));