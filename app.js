
require('dotenv').config()
const { showMenu } = require('./menu')
const { selectOptionMenu } = require('./menu')

function runApp() {
      console.log('Football CLI')
      showMenu()
      selectOptionMenu()

}

runApp()






