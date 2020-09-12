function imparesN(n){
	var impar = 1;
	var imparesN = []
		for(var i=0; i<n; i++){
			imparesN[i] = impar;
			impar+=2;
			n--  
		}
	return imparesN;
} 

console.log("7.1) N primeiros valores ímpares: " + imparesN(5));