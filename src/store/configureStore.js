const storeProd = require('./configureStore.prod')
const storeDev = require('./configureStore.dev')

if (process.env.NODE_ENV === 'production') {
  module.exports = storeProd
} else {
  module.exports = storeDev
}
