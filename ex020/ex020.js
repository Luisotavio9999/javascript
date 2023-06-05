
function botao(){

    var filmes = ['star wars','exterminador do futuro','anaconda','de volta para o futuro','vingadores']

        for (var i=0; i < filmes.length; i++) 
    document.getElementById("senha").innerHTML +=
        `posiçao no vetor ${i} - filme ${filmes[i]} <br>`
        
    }