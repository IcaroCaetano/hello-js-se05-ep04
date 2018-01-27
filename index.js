const knex = require("knex")({
    client: 'sqlite3',
    connection: {
      filename: './escalacao.db'
    }
   // useNullAsDefault:true
  })
  
  //knex('jogador').select().then(ret => {
 //   console.log(ret)
 //   process.exit(0) // finalizar execução do script
 // })

 //SELECT * FROM jogador WHERE numerojogador=11
 //knex('jogador')
// .select()
 //.where('numerojogador',11)
 //.then (ret => {
 //   console.log(ret)
 //   process.exit(0) // finalizar execução do script
 //})


