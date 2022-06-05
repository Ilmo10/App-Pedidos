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