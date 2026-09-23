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

function showLeagues() {
      clearScreen()
      console.log('1 - La Liga')
      console.log('2 - Premier League')
      console.log('3 - Champions League')
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
                        rl.question('Choose league: ',
                              async (userChoice) => {
                                    let option = Number(userChoice)

                                    // ⚡ REFACTOR -> VALIDATION

                                    if (Number.isNaN(option) || option < 1 || option > 3) {
                                          console.log(`Invalid option. Please try again\n`)
                                          return showLeagues()
                                    }


                                    if (option === 1) {
                                          await showTeams('PD')
                                    } else if (option === 2) {
                                          await showTeams('PL')
                                    } else if (option === 3) {
                                          await showTeams('CL')
                                    }
                              })
                  } else if (option === 3) {
                        showLeagues()
                        rl.question('Choose league: ',
                              async (userChoice) => {
                                    let option = Number(userChoice)
                                    if (option === 1) {
                                          await showMatches('PD', 'SCHEDULED')
                                    } else if (option === 2) {
                                          await showMatches('PL', 'SCHEDULED')
                                    } else if (option === 3) {
                                          await showMatches('CL', 'SCHEDULED')
                                    }
                              })
                  } else if (option === 4) {
                        console.log('Goodbye :)')
                        rl.close()
                  }

            }
      )
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


