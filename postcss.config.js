const autoprefixer = require('autoprefixer');

module.exports = {
  plugins: [
    // these plugins below will not be run during development
    !process.env.HUGO_ENVIRONMENT === 'development'
    ? autoprefixer()
    : null
  ]
}