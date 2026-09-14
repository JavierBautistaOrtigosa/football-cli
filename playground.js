const http = require('http')

// Routing manual

/*
const server = http.createServer(
      (request, response) => {
            if (request.url === '/') { response.end('Home') }
            else if (request.url === '/teams') { response.end('Teams') }
            else if (request.url === '/players') { response.end('Players') }
            else { response.end('Not found') }
      }
)

server.listen(3000)
*/

// request.method

/*
const server = http.createServer(
      (request, response) => {
            if (request.url === '/') { response.end('Home') }
            else if (request.url === '/teams') { response.end('Teams') }
            else if (request.url === '/players') { response.end('Players') }
            else { response.end('Not found') }
            console.log(
                  request.method,
                  request.url
            )
      }
)

server.listen(3000)
*/

// Consumo de API

/*
async function getPokemon() {

      let response = await fetch('https://pokeapi.co/api/v2/pokemon/pikachu') // Sends an HTTP request to the specified URL
      let data = await response.json() // Parses the response body as JavaScript object
      console.log(data.name)
      console.log(data.height)
      console.log(data.weight)
      console.log(Object.keys(data)) // Muestra que propiedades existen
}
getPokemon()
*/