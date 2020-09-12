function converterTempo(segundos){
	var hora = (segundos-segundos%3600)/3600<1?0:(segundos - segundos%3600)/3600  
	var minuto = (segundos%3600)/60<1?0:segundos%3600/60
	var seg = (segundos%3600)<60?segundos%3600:0
	return hora + ":" + minuto + ":" + seg
}

console.log("9) O tempo em segundos foi convertido para HORA:MINUTO:SEGUNDO = " + converterTempo(50));