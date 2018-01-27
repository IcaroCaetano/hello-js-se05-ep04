const knex = require("knex")({
    client: 'sqlite3',
    connection: {
      filename: "./contatos.db"
    },
    useNullAsDefault:true
  })


  const operacao = process.argv[2]
  const argumento = process.argv[3]

  if (operacao == 'insert'){
  
    let nomecontato = "icaro"
    let datacriacaocontato = '2018-01-27 16:31:00'
    let telefonecontato = "23455677"
  
    let contato = {nomecontato, datacriacaocontato, telefonecontato}
  
     knex("contato").insert(contato,"idcontato").then(ret => {
      console.log(ret)
     process.exit(0) // finalizar execução do script
  })
} 

if (operacao == 'update'){

    const contato = {
        nomecontato: 'Roger',
        idcontato: argumento
    }
    
    //const numerojogador = 10
    //const idjogador = 8
    //const nomejogador = 'Tiririca'
    
    knex('contato')
    .update(contato)
    .where('idcontato',contato.idcontato)
    .then(j => {
        console.log(j)
    })
}