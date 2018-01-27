const knex = require('./config').knex

const jogador = {
    nomejogador: 'Tirulipa',
    idjogador: 9
}

const numerojogador = 10
const idjogador = 8
const nomejogador = 'Tiririca'

knex('jogador')
.update(jogador)
.where('idjogador',jogador.idjogador)
.then(j => {
    console.log(j)
})

