const withSass = require('@zeit/next-sass')
const withImages = require('next-images')
// module.exports = withSass({
//   /* config options here */
// })

module.exports = withSass(withImages({
  webpack(config, options) {
    return config
  }
}))