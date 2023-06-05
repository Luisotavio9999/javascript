function calcular(){

var nome = (document.getElementById("nome").value)
var numero = Number(document.getElementById("numero").value)
var numero2 = Number(document.getElementById("numero2").value)

if (Number(numero) > 10) {
        alert("a Nota 1 não pode ser maios que 10")
        exit
}
if (Number(numero2) > 10) {
        alert("a Nota 2 não pode ser maios que 10")
        exit
}

var opDivisao = (numero + numero2) / 2

if (opDivisao >= 7) {      
        document.getElementById("media").innerHTML = 
        `<br> o aluno ${nome} tirou nota ${numero} e ${numero2} sua média foi = ${opDivisao}
        <br> <b class="apro">PASSOU DE ANO</b>
        <img src= "aprovado.svg" >`
    } else {  
        document.getElementById("media").innerHTML = 
        `<br> O aluno ${nome} tirou nota ${numero} e ${numero2} sua média foi = ${opDivisao}
        <br> <b class="repro"> NÃO PASSOU DE ANO</b>
        <img src= aprovado.svg >` 
}
}