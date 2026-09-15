// Responsabilidad:
// Arrancar aplicacion -> mostrar menu

// #region - dependencies

require('dotenv').config()

// #endregion

const { showMenu, selectOptionMenu } = require('./menu')


function runApp() {
      showMenu()
      selectOptionMenu()
}

runApp()