
fetch('http://192.168.100.178:1010/produto') // http://localhost:1010/produto
  .then( function(response){
    return response.json()
  })
  .then(function(data){
    listaProdutos(data)
  })
  .catch(function(){
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
          <span id="quantidade${produto.id}" data-value="${produto.value}">0</span>
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
    let menos = parseInt(elQuantidade.innerText) - 25
    if(parseInt(elQuantidade.innerText)<= 0){
      menos = 0
    }
    elQuantidade.innerHTML = menos
    total(id)
  }
  
  function soma(id){
    const elQuantidade = document.getElementById('quantidade' + id)
    let soma = parseInt(elQuantidade.innerText) + 25
    
    elQuantidade.innerHTML = soma
    
    
    total(soma,elQuantidade.dataset.value.id)
  }

  function total(soma,value,id){
    value = parseFloat(value)
    const elValue = document.getElementById('value')
    let resultado = parseInt(elValue.innerText) + (soma * value)
    
    //elValue.innerHTML = resultado.toLocaleString('pt-br', {minimumFractionDigits: 2})
    
  }


  

