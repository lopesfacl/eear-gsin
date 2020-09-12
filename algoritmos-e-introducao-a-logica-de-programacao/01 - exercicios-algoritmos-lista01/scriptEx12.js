function valorCombustivel(litros, tipo) {
	var taxa_desconto = null;
	var preco_sem_desconto = litros * 2.99;
	var valor_desconto = null;
	switch (tipo) {
	case 'A':
		if (litros <= 20) {
			taxa_desconto = 3 / 100;
			valor_desconto = litros * taxa_desconto;
			preco_com_desconto = preco_sem_desconto - valor_desconto;
			return preco_com_desconto;
		}
		taxa_desconto = 5 / 100;
		valor_desconto = litros * taxa_desconto;
		preco_com_desconto = preco_sem_desconto - valor_desconto;
		return preco_com_desconto;
	case 'G':
		if (litros <= 20) {
			taxa_desconto = 4 / 100;
			valor_desconto = litros * taxa_desconto;
			preco_com_desconto = preco_sem_desconto - valor_desconto;
			return preco_com_desconto;
		}
		taxa_desconto = 6 / 100;
		valor_desconto = litros * taxa_desconto;
		preco_com_desconto = preco_sem_desconto - valor_desconto;
		return preco_com_desconto;

	default:
		return 'Verifique se vc realizou as entradas corretamente';
	}
}

console.log('12) O preço é: ' + valorCombustivel(5, 'A'));
