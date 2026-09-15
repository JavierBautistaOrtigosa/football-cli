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
      console.log('1 - Competitions')
      console.log('2 - Teams')
      console.log('3 - Upcoming matches')
      console.log('4 - Exit')
}

async function showCompetitions() {
      const competitions = await getLeagues()
      console.table(
            competitions.map(
                  competition => ({
                        code: competition.code,
                        country: competition.area.name,
                        name: competition.name,
                        type: competition.type,
                        id: competition.id
                  })
            )
      )
}

function selectOptionMenu() {
      rl.question('Select option: ',
            async (userChoice) => {
                  let option = Number(userChoice)
                  if (option === 1) {
                        await showCompetitions()
                  }
            }
      )
}


module.exports = { showMenu, selectOptionMenu }