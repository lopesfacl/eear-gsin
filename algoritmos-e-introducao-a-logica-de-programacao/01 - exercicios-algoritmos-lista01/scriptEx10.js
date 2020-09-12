function classificaNadador(idade){
	if(idade >= 5 && idade <=7){
		return "Infantil A"
	}
	if(idade >= 8 && idade <=10){
		return "Infantil B"
	}
	if(idade >= 11 && idade <=13){
		return "Juvenil A"
	}
	if(idade >= 14 && idade <=17){
		return "Juvenil B"
	}
	if(idade > 18){
		return "Adulto"
	}
	return "digite uma idade válida para nadador"
}

console.log("10) O nadador foi classificado como: " + classificaNadador(18));