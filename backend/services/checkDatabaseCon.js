const db = require('../models')

const checkConnection = async () => {
  try {
    await db.sequelize.authenticate()
    console.log('Connectin is established')
  } catch (e) {
    console.log('Connetion failed ', e)
  }
}

checkConnection()