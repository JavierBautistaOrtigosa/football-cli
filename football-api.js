require('dotenv').config()

async function getStandings() {
      let response = await fetch('https://api.football-data.org/v4/competitions/PL/standings', {
            headers: { 'X-Auth-Token': process.env.FOOTBALL_API_TOKEN }
      })
      let data = await response.json()

      return data.standings[0].table

}



module.exports = {
      getStandings,
}