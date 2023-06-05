var vetorFilmes = []
var i = 0

function botao(){
    vetorFilmes.push(document.getElementById("num").value)

    if (i < vetorFilmes.length) {
        document.getElementById("senha").innerHTML +=
        `<b><br>${vetorFilmes[i]}<br><b>`
        i++
    }
        
    }