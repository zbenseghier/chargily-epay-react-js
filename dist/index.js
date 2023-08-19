
'use strict'

if (process.env.APP_ENV === 'production'){
  module.exports = require('./chargily-epay-react-js.cjs.production.min.js')
} else {
  module.exports = require('./chargily-epay-react-js.cjs.development.js')
}
