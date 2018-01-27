//Insert

// index2.js
const knex = require("knex")({
  client: 'sqlite3',
  connection: {
    filename: "./escalacao.db"
  }
})

let nomejogador = "Marcos"
let numerojogador = 12

let jogador = {nomejogador, numerojogador}

knex("jogador").insert(jogador,"idjogador").then(ret => {
  console.log(ret)
  process.exit(0) // finalizar execução do script
})
