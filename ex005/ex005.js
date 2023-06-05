function calcular(){
    //Entrada
    var numero = document.getElementById("nr").value
    //Processamento
    var dobro = numero * 2
    var metade = numero / 2
    //Saída
    document.getElementById("resultado").innerHTML += 
        `<br>o dobro de ${numero} é ${dobro} e a metade é ${metade} 
         <a href"#"`
}

function limpar(){
    document.getElementById("limpar").innerHTML = ""
}