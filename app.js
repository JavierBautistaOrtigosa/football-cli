
require('dotenv').config()
const { showMenu, selectOptionMenu } = require('./menu')


function runApp() {
      console.log('Football CLI')
      showMenu()
      selectOptionMenu()

}

runApp()






