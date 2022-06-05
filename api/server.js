const {produto} = require('./produtos')

const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors({
    origin: '*'
}))

app.get('/produto', function(recebendo, respondendo){

  respondendo.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
    respondendo.json(produto)
})

app.listen(1010, function(req,res){
    console.log('O server subiu!!')
})