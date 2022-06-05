# App Pedidos
## Como foi Feito:

- O projeto foi inciado com `npm init -y`.
- Depois foi dado o `npm install express`.
 

### criando servidor:
Javascript~~~
const express = require('express')
const app = express()

app.listen(1010, function(req,res){
    console.log('O server subiu!!')
})
~~~
