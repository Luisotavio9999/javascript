function login(){
    var nome = (document.getElementById("nome").value)
    var idade =(document.getElementById("idade").value)
    
    if (idade >= 18 && idade <=65) 
    {      
            document.getElementById("senha").innerHTML = 
            `<br> <b class="sim"> ${nome}, Você é obrigado a votar. </b>
            <br>`
        }
         else if (idade >= 16 || idade > 65) {  
            document.getElementById("senha").innerHTML = 
            `<br>  <b class="nao">${nome}, você não é obrigado a votar </b>
            <br>` 
    }
         else if (idade < 16) {  
            document.getElementById("senha").innerHTML = 
            `<br>  <b class="meio">${nome}, você não pode votar </b>
            <br>` 
    }
    }