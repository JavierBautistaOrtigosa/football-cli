const readline = require('readline')
const { getStandings } = require('./football-api')


const rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout
})



function showMenu() {
      console.log('1 - Show standings')
      console.log('2 - Show matches')
      console.log('3 - Search team')
      console.log('4 - Exit')
}

function selectOptionMenu() {
      rl.question('Select option: ',
            async (userChoice) => {
                  let option = Number(userChoice)
                  if (option === 1) {

                        const standings = await getStandings()

                        standings.forEach((team) => {
                              console.log(`${team.position}. ${team.team.name} - ${team.points} pts`)
                        })
                  }
            }
      )
}

module.exports = { showMenu, selectOptionMenu }