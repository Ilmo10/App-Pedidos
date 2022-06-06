
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

  function subtrai(id){
    const elQuantidade = document.getElementById('quantidade' + id)
    const type = elQuantidade.dataset.type
    let quant = type == '1' ? 25 : 1
    let menos = parseInt(elQuantidade.innerText) - quant
    if(parseInt(elQuantidade.innerText)<= 0){
      menos = 0
    }
    elQuantidade.innerHTML = menos
    total()
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
  

