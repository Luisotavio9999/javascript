var filmes= []
var imagens= []

function botaoFilmes() {
    var filmes = document.getElementById("nome").value
    filmes.push(filmes)
    var foto = document.getElementById("imagem").value
    imagens.push(foto)
    document.getElementById('resultado').innerHTML = ''

    for (var i in filmes) {
    //for (var i = 0; i < filmes.length ; i++) {
        document.getElementById('resultado').innerHTML +=
            `<div><img src='${listaFilmes[i].link}' class='img'> <p>${filmes[i]}<p><div>`
    }
    document.getElementById("nome").value = ''
    document.getElementById("imagem").value = ''
    document.getElementById("nome").focus()
}

function botaoIndicado(){
    var nrSorteado = parseInt(Math.random() * listaFilmes.length)
    document.getElementById('indicado').innerHTML = 
        `<div>
            <img src='${listaFilmes[nrSorteado].link}' class='img'> 
            <p>${listaFilmes[nrSorteado].nome}<p>
        </div>`
}