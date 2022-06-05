# App Pedidos
## Como foi Feito:

- O projeto foi inciado com `npm init -y`.
- Depois foi dado o `npm install express`.
 

### criando servidor:
~~~javascript
const express = require('express')
const app = express()

app.listen(1010, function(req,res){
    console.log('O server subiu!!')
})
~~~
### Subindo API.

~~~Javascript
const express = require('express')
const app = express()

app.get('/:nome/:idade',function(recebendo, respondendo){

    const nome = recebendo.params.nome
    const idade = recebendo.params.idade
    console.log(nome)
    respondendo.json({
        Nome: nome,
        idade: idade
    })
})

app.listen(1010, function(req,res){
    console.log('O server subiu!!')
})
~~~

## Criando rota produto
~~~Javascript
const {produto} = require('./produtos')

const express = require('express')
const app = express()

app.get('/produto',function(recebendo, respondendo){
    respondendo.json(produto)
})
app.listen(1010, function(req,res){
    console.log('O server subiu!!')
})
~~~

### conectando Front-End na APi
~~~Javascript
fetch('http://localhost:1010/produto')
  .then( function(response){
    return response.json()
  })
  .then(function(data){
   listaProdutos(data)
  })
  .catch(function(){
    console.log('Api não foi localizada')
  })
  function listaProdutos(data){
    console.log(data)
  }
~~~
