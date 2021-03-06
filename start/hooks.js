'use strict'
const { hooks } = require('@adonisjs/ignitor')

hooks.after.httpServer(() => {
  const Response = use('Adonis/Src/Response')
  Response.macro('sendStatus', (status) => {
      this.status(status).send(status)
  })
})

module.exports = { hooks }
