function verificaTriangulo(a,b,c){
	if(!(a<b+c && b<a+c && c<a+b)){
		return "Não é um triângulo";
	}
	if(a===b && a===c){
		return "equilátero";
	}
	if(a===b || b===c  || a===c){
		return "isósceles";
	}
	return "escaleno";
}

console.log("4) O triangulo é: " + verificaTriangulo(2,5,6));