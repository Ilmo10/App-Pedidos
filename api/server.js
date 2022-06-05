const {produto} = require('./produtos')

const express = require('express')
const app = express()

app.get('/produto',function(recebendo, respondendo){
    respondendo.json(produto)
})

app.listen(1010, function(req,res){
    console.log('O server subiu!!')
})