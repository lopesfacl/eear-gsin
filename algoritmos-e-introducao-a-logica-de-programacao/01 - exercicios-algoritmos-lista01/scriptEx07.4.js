function intervaloImparesN(a,b){
	var impar = a%2===1?a:a+1
	var imparesN = []
	var k=0
	for(var i=impar; i<b; i++){
		imparesN[k] = impar
		impar+=2
		k++
		b--
	}
	return imparesN
} 