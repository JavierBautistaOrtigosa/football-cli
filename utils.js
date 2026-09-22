// Responsabilidad:
// Funciones reutilizables

// Mas adelante:
// formatTeam(), formatLeague(), printSeparator()

function clearScreen() {
      console.log('CLEAR')
      process.stdout.write('\x1Bc')
}

module.exports = { clearScreen }