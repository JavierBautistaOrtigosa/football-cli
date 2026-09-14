require('dotenv').config()

async function getStandings() {
      let response = await fetch('https://api.football-data.org/v4/competitions/PL/standings', {
            headers: { 'X-Auth-Token': process.env.FOOTBALL_API_TOKEN }
      })
      let data = await response.json()

      data.standings[0].table.forEach((team) => {
            console.log(`${team.position}. ${team.team.name} - ${team.points} pts`)
      })

}



module.exports = {
      getStandings,
}