'use strict'

class UserController {
  foo( { response }) {
    response.sendStatus(200)
  }
}

module.exports = UserController
