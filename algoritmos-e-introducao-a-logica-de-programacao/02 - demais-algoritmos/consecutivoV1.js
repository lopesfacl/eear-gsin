function consecutivo(lista){
    var aux=null;
    var quantidadeQueFaltam = 0;
    var elementosQueFaltam = [];
    var n = 0;
    for(var i = 0; i<lista.length; i++ ){
        for(var j = 0; j<lista.length; j++){
            if(lista[j] > lista[j+1]){
                aux = lista[j];
                lista[j] = lista[j+1];
                lista[j+1]=aux;
            }
        }
    }    
    for(var k = 0; k<lista.length-1; k++){
        if(lista[k+1]-lista[k]!==1){ 
            quantidadeQueFaltam+=(lista[k+1]-lista[k])-1; 
            for(var m = lista[k]+1; m<lista[k+1]; m++){
                elementosQueFaltam[n] = m;
                n++;
            }
        }
    }
    //console.log(lista);
    //console.log(quantidadeQueFaltam);
    return elementosQueFaltam;
}



console.log("Os elementos que faltam para ficar consecutivo são: " + consecutivo( [3,2,20,1,7]))