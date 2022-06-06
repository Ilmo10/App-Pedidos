
fetch('http://192.168.100.178:1010/produto') // http://localhost:1010/produto
  .then( function(response){
    return response.json()
  })
  .then(function(data){
    listaProdutos(data)
  })
  .catch(function(){
    listaProdutos(produtoarr())
      console.log('deu ruim')
  })
  function listaProdutos(data){
    const elContent = document.getElementById('content')
    for(produto of data){
      insereProduto(elContent,produto)
    }
  }

  let totalItens = []
 
  function insereProduto(elContent,produto){
    let div = document.createElement('div');
      div.innerHTML = `
      <div class="produto" id="${produto.id}">
      <div class="description">
        <span>${produto.name}</span>
      </div>
      <div class="display">
        <div class="menos">
          <button onclick="subtrai(${produto.id})">-</button>
        </div>
        <div class="quantidade">
          <span class="quant" id="quantidade${produto.id}" data-type="${produto.type}" data-value="${produto.value}">0</span>
        </div>
        <div class="mais">
          <button onclick="soma(${produto.id})">+</button>
        </div>
      </div>
    </div>`
    elContent.appendChild(div)
  }
/*
- função subtrai recebe o ID do produto que é passado no html button.
- elQuantidade  recebe o elemento com base no ID, que é passado na function subtai(id)
-type recebe a propiedade dataset.type(data-type), que esta dentro elQuantidade.
-quant recebe 25 ou 1 com base no type(tipo) que recebe 1 ou 2 no OBJ produto.
- menos recebe o valor de dentro do elQuantidade(div) - quant ja estipulado pelo (if), se é 1 ou 25.
- o if abaixo verifica se o valor dentro elQUantidade e menor ou igual a 0, se for, recebe 0( para se o valor for zero não aplicar valor negativo ex: -25, -50)
-passado por esse processo elQuantidade recebe o resultSubtracao type 1=25 ou 2=1.
*/
  function subtrai(id){
    const elQuantidade = document.getElementById('quantidade' + id)// linha 34(html)pegando os id que tem a palavra quantidade e id do objeto do produto
    const type = elQuantidade.dataset.type//pegando o type do OBJ que esta sendo passando pelo atributo data-type linha 34(html)
    let quant = type == '1' ? 25 : 1// verificando se o type do OBJ é igual a 1, se for quant recebe 25 se nao quanto recebe 1
    let resultSubtracao = parseInt(elQuantidade.innerText) - quant
    if(parseInt(elQuantidade.innerText)<= 0){
      resultSubtracao = 0
    }
    elQuantidade.innerHTML = resultSubtracao
    total()// faz o calculo da soma
  }
  
  function soma(id){
    const elQuantidade = document.getElementById('quantidade' + id)
    const type = elQuantidade.dataset.type
    let quant = type == '1' ? 25 : 1
    let soma = parseInt(elQuantidade.innerText) + quant

    console.log(type)
    elQuantidade.innerHTML = soma

    
    
    total()
  }

  function total(){
    const elQuant = document.querySelectorAll('.quant')
    let totalItens = [...elQuant]
    let resultado = 0
    for(elemento of totalItens){
      resultado += parseFloat(elemento.dataset.value) * parseInt(elemento.innerText)
      
    }

    let totalValue = document.getElementById('value')
    totalValue.innerHTML = resultado.toLocaleString('pt-br', {minimumFractionDigits: 2})
 
  }

function produtoarr(){
  return [{
    id: 1,
    name: 'Pastel carne',
    description: 'salgado frito',
    type: 1,
    value: 0.5
  },
  {
    id: 2,
    name: 'Pastel queijo',
    description: 'salgado frito',
    type: 1,
    value: 0.5
  },
  {
    id: 3,
    name: 'coxinha',
    description: 'salgado frito',
    type: 1,
    value: 0.5
  },
  {
    id: 4,
    name: 'espetinho',
    description: 'salgado frito',
    type: 1,
    value: 0.5
  },
  {
    id: 5,
    name: 'Pastel queijo',
    description: 'salgado frito',
    type: 1,
    value: 0.5
  },
  {
    id: 6,
    name: 'bolinha de queijo',
    description: 'salgado frito',
    type: 1,
    value: 0.5
  },
  {
    id: 7,
    name: 'kibe',
    description: 'salgado frito',
    type: 1,
    value: 0.5
  },
  {
    id: 8,
    name: 'risole carne',
    description: 'salgado frito',
    type: 1,
    value: 0.5
  },
  {
    id: 9,
    name: 'risole pm',
    description: 'salgado frito',
    type: 1,
    value: 0.5
  },
  {
    id: 1.0,
    name: 'Coca Cola',
    description: 'Bebida ',
    type: 2,
    value: 4
  },
  {
    id: 1.1,
    name: 'Fanta',
    description: 'bebida',
    type: 2,
    value: 4
  },
  {
    id: 1.2,
    name: 'sprite',
    description: 'Bebida ',
    type: 2,
    value: 4
  },
  {
    id: 1.3,
    name: 'guarana',
    description: 'Bebida ',
    type: 2,
    value: 4
  },
  {
    id: 1.4,
    name: 'jesus',
    description: 'Bebida ',
    type: 2,
    value: 4
  },
  {
    id: 1.5,
    name: 'tampico',
    description: 'Bebida ',
    type: 2,
    value: 4
  },
  {
    id: 1.6,
    name: 'água',
    description: 'Bebida ',
    type: 2,
    value: 4
  },] 
}
  

