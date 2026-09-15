// Responsabilidad:
// Hablar con la API -> fetch, procesar respuesta, return

// #region - dependencies

require('dotenv').config()

// #endregion

async function getLeagues() {

      try {
            // 1. Fetch

            const response = await fetch('https://api.football-data.org/v4/competitions',
                  { headers: { 'X-Auth-Token': process.env.FOOTBALL_API_TOKEN } }
            )

            // 2. Comprobar response.ok

            if (!response.ok) {
                  throw new Error(`HTTP Error: ${response.status}`)
            }

            // 3. Convertir a JSON

            const data = await response.json()

            // 4. Return

            return data.competitions


      } catch (error) {
            throw error
      }
}


module.exports = {
      getLeagues
}

