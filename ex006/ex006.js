function calcular(){

    var numero = Number(document.getElementById("nr1").value)
    var numero2 = Number(document.getElementById("nr2").value)

    var opSoma = (numero + numero2)
    
    var opSubtracao = (numero - numero2)

    var opMultiplicacao = (numero * numero2)

    var opDivisao = (numero / numero2)

    var opExponenciacao = (numero ** numero2)

    var opResto = (numero % numero2)

    document.getElementById("resultado").innerHTML += 
        `<br> ${numero} + ${numero2} = ${opSoma} 
        <br> ${numero} - ${numero2} = ${opSubtracao} 
        <br> ${numero} * ${numero2} = ${opMultiplicacao}
        <br> ${numero} / ${numero2} = ${opDivisao} 
        <br> ${numero} ** ${numero2} = ${opExponenciacao} 
        <br> ${numero} % ${numero2} = ${opResto}
         <a href"#"`
}