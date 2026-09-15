// Responsabilidad:
// Interaccion con el usuario -> mostrar datos, pedir opciones, gestionar flujos.


// #region - dependencies

const readline = require('readline')
const { getLeagues } = require('./football-api')


const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
})

// #endregion

function showMenu() {
      console.log('1 - Leagues')
      console.log('2 - Teams')
      console.log('3 - Upcoming matches')
      console.log('4 - Exit')
}



function selectOptionMenu() {
      rl.question('Select option: ',
            async (userChoice) => {
                  let option = Number(userChoice)
                  if (option === 1) {
                        getLeagues()
                  }
            }
      )
}


// data.competitions.forEach(competition => console.log(`${competition.id}: ${competition.name} - ${competition.code} - ${competition.type}`))


module.exports = { showMenu, selectOptionMenu }