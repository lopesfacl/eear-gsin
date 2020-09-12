function valorCombustivel(litros, tipo) {
	var taxa_desconto = null;
	var preco_por_litro = null;
	var preco_sem_desconto = null;
	var valor_desconto = null;
	switch (tipo) {
	case 'A':
		preco_por_litro = 2.19;
		preco_sem_desconto = litros * preco_por_litro;
		if (litros <= 20) {			
			taxa_desconto = 3 / 100;
			valor_desconto = preco_sem_desconto * taxa_desconto;
			preco_com_desconto = preco_sem_desconto - valor_desconto;
			return preco_com_desconto;
		}
		
		taxa_desconto = 5 / 100;
		valor_desconto = preco_sem_desconto * taxa_desconto;
		preco_com_desconto = preco_sem_desconto - valor_desconto;
		return preco_com_desconto;
	case 'G':
		preco_por_litro = 2.99;
		preco_sem_desconto = litros * preco_por_litro;
		if (litros <= 20) {
			taxa_desconto = 4 / 100;
			valor_desconto = preco_sem_desconto * taxa_desconto;
			preco_com_desconto = preco_sem_desconto - valor_desconto;
			return preco_com_desconto;
		}
		taxa_desconto = 6 / 100;
		valor_desconto = preco_sem_desconto * taxa_desconto;
		preco_com_desconto = preco_sem_desconto - valor_desconto;
		return preco_com_desconto;

	default:
		return 'Verifique se vc realizou as entradas corretamente';
	}
}

console.log('12) O preço é: ' + valorCombustivel(5, 'A'));
