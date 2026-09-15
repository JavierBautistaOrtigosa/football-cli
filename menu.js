// Responsabilidad:
// Interaccion con el usuario -> mostrar datos, pedir opciones, gestionar flujos.


// #region - dependencies

const readline = require('readline')
const { getLeagues, getTeams } = require('./football-api')


const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
})

// #endregion

function showMenu() {
      console.log('1 - Competitions available')
      console.log('2 - Teams')
      console.log('3 - Upcoming matches')
      console.log('4 - Exit')
}

function showLeagues() {
      console.log('1 - La Liga')
      console.log('2 - Premier League')
      console.log('3 - Champions League')
}

function selectOptionMenu() {
      rl.question('Select option: ',
            async (userChoice) => {
                  let option = Number(userChoice)
                  if (option === 1) {
                        await showCompetitions()
                  } else if (option === 2) {
                        showLeagues()
                        rl.question('Choose league: ',
                              async (userChoice) => {
                                    let option = Number(userChoice)
                                    if (option === 1) {
                                          await showTeams('PD')
                                    } else if (option === 2) {
                                          await showTeams('PL')
                                    } else if (option === 3) {
                                          await showTeams('CL')
                                    }
                              })
                  }
            }
      )
}

async function showTeams(competitionCode) {
      const teams = await getTeams(competitionCode)
      console.table(
            teams.map(team => ({
                  name: team.name,
                  shortname: team.shortName
            }))
      )
}

async function showCompetitions() {
      const competitions = await getLeagues()

      const availableCodes = ['PD', 'PL', 'CL']

      const competitionsAvailable = competitions.filter(
            competition => availableCodes.includes(competition.code)
      )

      console.table(
            competitionsAvailable.map(
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

module.exports = { showMenu, selectOptionMenu }