function somaParesN(n){
	var par = 0;
	var somaPares = 0
	for(var i=0; i<n; i++){
		par+=2;
		somaPares+=par;  
		n-- 
	}
	return somaPares;
} 
console.log("7.2) Soma dos N primeiros valores pares: " + somaParesN(4));