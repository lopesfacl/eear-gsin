function menorValor(a,b,c,d){
	var menor = null
	if(a<=b && a<=c && c<=d){
		menor=a;
		return menor
	}

	if(b<=a && b<=c && b<=d){
		menor=b
		return menor
	}

	if(c<=a && c<=b && c<=d){
		menor=c
		return menor
	}

	if(d<=a && d<=b && d<=c){
		menor=d
		return menor
	}
	return menor
}
console.log("2) O menor valor é: " + menorValor(1,1,2,5));