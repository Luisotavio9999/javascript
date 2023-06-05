var num = parseInt(Math.random() * 100) + 1
var tentativas = 0

alert(num)

function chutar() {

    var chute = Number(prompt("tente adivinhar o numero que pensei"))

    tentativas++

    if (chute < num) {
        document.getElementById("senha").innerHTML +=
            `<br>Você chutou ${chute}, e eu pensei um numero MAIOR </br>`
    }
    else if (chute > num) {
        document.getElementById("senha").innerHTML +=
            ` <br>Você chutou ${chute}, e eu pensei em um numero MENOR </br>`
    }
    else if (chute == num) {
        document.getElementById("senha").innerHTML =
            ` <br> PARABENS, VOCÊ ACERTOU O NUMERO ${num} EM ${tentativas} TENTATIVA </br>`
    }
}

function novo() {
    tentativas = 0
    num = Number(parseInt(Math.random() * 100) + 1)
    document.getElementById("senha").innerHTML =
        ``
    alert(num)
}