const path = require('path')
const { override, addWebpackAlias } = require('customize-cra')

function resolve(dir) {
  return path.join(__dirname, '.', dir)
}

module.exports = override(
  addWebpackAlias({
    '@': resolve(__dirname, 'src'),
    '@assets': resolve(__dirname, 'src/assets'),
    '@components': resolve(__dirname, 'src/components'),
    '@views': resolve(__dirname, 'src/views'),
  })
)