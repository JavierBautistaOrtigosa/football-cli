// Responsabilidad:
// Arrancar aplicacion -> mostrar menu

// #region - dependencies

require('dotenv').config({ quiet: true })

// #endregion

const { showMenu, selectOptionMenu } = require('./menu')


function runApp() {
      showMenu()
      selectOptionMenu()
}

runApp()