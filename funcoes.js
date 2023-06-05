//declaramdo uma funçao sem parametro e sem retorno
function exibirInformacao(){
    console.log ('Executei = funcao exibir info')
}
//chamando a minha funcao
exibirInformacao()

//funcao com entrada de parametro e sem retorno (sem saida)
//criando e funcao para gerar no console e tabuada do nr
function ricardoCalculeTabuada(nr){
    for (var i=0; i<= 30; i++){
        console.log (`${nr} x ${i} = ${nr * i}`)
    }
}

//chamando funcao para calcualr o dobro receber o resultado na variavel
var resultado
resultado = calcularDobro(6233)//douglas
console.log(resultado)
//declarando a funcao recebendo o parametro e retornado um valor
function calcularDobro(nr){//ricardo
    var dobro = nr * 2
    return dobro//com o comando return "devolve" o valor calculado para a chamada

}5