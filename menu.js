// Responsabilidad:
// Interaccion con el usuario -> mostrar datos, pedir opciones, gestionar flujos.


// #region - dependencies

const readline = require('readline')
const { getLeagues, getTeams, getMatches } = require('./football-api')
const { clearScreen } = require('./utils')

const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
})

// #endregion

function showMenu() {
      clearScreen()
      console.log('1 - Competitions available')
      console.log('2 - Teams')
      console.log('3 - Upcoming matches')
      console.log('4 - Exit')
}

function showLeagues(errorMessage = '') {
      clearScreen()
      console.log('1 - La Liga')
      console.log('2 - Premier League')
      console.log('3 - Champions League')

      if (errorMessage) {
            console.log(`\n${errorMessage}\n`)
      }
}

function selectOptionMenu() {
      rl.question('Select option: ',
            async (userChoice) => {
                  let option = Number(userChoice)

                  // ⚡ REFACTOR -> VALIDATION

                  if (Number.isNaN(option) || option < 1 || option > 4) {
                        showMenu()
                        console.log(`\nInvalid option. Please try again\n`)
                        return selectOptionMenu()
                  }

                  if (option === 1) {
                        await showCompetitions()
                  } else if (option === 2) {
                        showLeagues()
                        selectLeague(async (competitionCode) => {
                              await showTeams(competitionCode)
                        })



                  } else if (option === 3) {
                        selectLeague(async (competitionCode) => {
                              await showMatches(competitionCode, 'SCHEDULED')
                        })

                  } else if (option === 4) {
                        console.log('Goodbye :)')
                        rl.close()
                  }

            }
      )
}

function selectLeague(callback) {
      rl.question('Choose league: ',
            async (userChoice) => {
                  const option = Number(userChoice)
                  if (Number.isNaN(option) || option < 1 || option > 3) {
                        showLeagues('Invalid option. Please try again.')
                        return selectLeague(callback)
                  }
                  if (option === 1) {
                        return callback('PD')
                  } else if (option === 2) {
                        return callback('PL')
                  } else if (option === 3) {
                        return callback('CL')
                  }
            })
}

async function showTeams(competitionCode) {
      const teams = await getTeams(competitionCode)
      clearScreen()
      console.table(
            teams.map(team => ({
                  name: team.name,
                  shortname: team.shortName
            }))
      )
      backToMenu()
}

async function showCompetitions() {
      clearScreen()
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
      backToMenu()
}

async function showMatches(competitionCode, matchStatus) {
      const matches = await getMatches(competitionCode, matchStatus)
      clearScreen()
      console.table(
            matches.map((match) => ({
                  time: match.utcDate,
                  homeTeam: match.homeTeam.name,
                  awayTeam: match.awayTeam.name,
                  status: match.status,
                  winner: match.score.winner,
                  homeTeamScore: match.score.fullTime.home,
                  awayTeamScore: match.score.fullTime.away
            }))
      )
      backToMenu()
}

function backToMenu() {
      rl.question('Press Enter to return to menu...',
            () => {
                  showMenu()
                  selectOptionMenu()
            }
      )
}

module.exports = { showMenu, selectOptionMenu }


