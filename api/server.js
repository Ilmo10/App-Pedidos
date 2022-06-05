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