//ORDENAR LISTA
function ordenarLista(lista){
    var aux=null;
    for(var i = 0; i<lista.length; i++ ){
        for(var j = 0; j<lista.length; j++){
            if(lista[j] > lista[j+1]){
                aux = lista[j];
                lista[j] = lista[j+1];
                lista[j+1]=aux;
            }
        }
    }  
    return lista;
}

//VERIFICAR DIFERENÇA ENTRE ELEMENTO POSTERIOR E ANTERIOR
function verificaDiferencaPosteriorAnterior(lista){
    for(var k = 0; k<lista.length-1; k++){
        if(lista[k+1]-lista[k]!==1){ 
            return true;
        }
    }
    return false;
}

//RETORNA A QUANTIDADE DE ELEMENTOS QUE FALTAM PARA TORNAR TODA A LISTA CONSECUTIVA
function quantidadeQueFaltaParaConsecutivo(listaOrdenada){
    var quantidadeQueFaltam=0;
    for(var k = 0; k<listaOrdenada.length-1; k++){
        if(verificaDiferencaPosteriorAnterior(listaOrdenada)){
            quantidadeQueFaltam+=(listaOrdenada[k+1]-listaOrdenada[k])-1; 
        }
    }
    return quantidadeQueFaltam;
}

//RETORNA A QUAIS OS ELEMENTOS QUE FALTAM PARA TORNAR TODA A LISTA CONSECUTIVA
function elementosQueFaltam(listaOrdenada){
    var elementosQueFaltam = []
    var n = 0
    for(var k = 0; k<listaOrdenada.length-1; k++){
        if(verificaDiferencaPosteriorAnterior(listaOrdenada)){ 
            for(var m = listaOrdenada[k]+1; m<listaOrdenada[k+1]; m++){
                elementosQueFaltam[n] = m;
                n++;
            }
        }
    }
    return elementosQueFaltam;
}

//FUNÇÃO PRINCIPAL CONSECUTIVO
function consecutivo(lista){
    var listaOrdenada = ordenarLista(lista)
    return "> Quantidade de elementos que faltam para ser consecutivo: " + quantidadeQueFaltaParaConsecutivo(listaOrdenada) +"\n" + "> Elementos que faltam para ser consecutivo: " + elementosQueFaltam(listaOrdenada)
}

console.log(consecutivo([3,2,1,7,5,4,9,10]));