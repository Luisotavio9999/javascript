function maioridade(){
    var nome = (document.getElementById("nome").value)
    var idade = Number(document.getElementById("idade").value)
    
    if (idade >= 18) {      
            document.getElementById("mais").innerHTML = 
            `<br> o aluno ${nome} tem ${idade} e você 
            <br> <b class="apro">PODE TIRAR A CARTEIRA</b>
            <br> <img src="https://www.portaldotransito.com.br/wp-content/uploads/2022/11/CNH_menor.jpg">`
        }
         else {  
            document.getElementById("mais").innerHTML = 
            `<br> O aluno ${nome} tem ${idade} e você 
            <br> <b class="repro">NÂO PODE TIRAR A CARTEIRA</b>
            <br> <img src="https://www.portaldotransito.com.br/wp-content/uploads/2022/11/CNH_menor.jpg">` 
    }
    }