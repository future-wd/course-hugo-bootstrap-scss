const autoprefixer = require('autoprefixer');

module.exports = {
  plugins: [
    // these plugins below are only being run during production
    !process.env.HUGO_ENVIRONMENT === 'development'
    ? autoprefixer()
    : null
  ]
}