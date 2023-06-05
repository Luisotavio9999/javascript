var listaCarros = []

//declarando um objeto o informe os atributos
//todo objeto declaro com { }

var carro = {
    ano: '2020',
    modelo: 'Gol',
    marca: 'VW'
}
//para exibiro atributo do objeto faça da seguinte forma objeto.atributo
console.log (carro.ano +  ' - ' + carro.modelo)

//FORMA ALTERNATIVA E MAIS FACIL
console.log (`${carro.ano} - ${carro.modelo}`)

//adicionando o objeto carro ao vetor listaCarros
listaCarros.push(carro)
console.log(listaCarros.length)// 1 - só existe 1 item

//novo objeto - novo carro
carro = {
    ano: '2022',
    modelo: 'onix',
    maeca: 'GM'
}
listaCarros.push(carro)
console.log (listaCarros)

for (var andar in listaCarros){
    console.log ( carro.modelo )
}