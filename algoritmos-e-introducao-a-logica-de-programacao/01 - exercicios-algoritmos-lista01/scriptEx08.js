function inverterPalavra(palavra){
	var j= palavra.length
	var palavraInv = ""
	for(var i=0; i<palavra.length; i++){
		palavraInv += palavra[j-1] 
		j--
	}
	return palavra===palavraInv?true:false
}


console.log("8) É um palíndromo? " + inverterPalavra("abc"));