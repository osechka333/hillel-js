module.exports.path = {
  srcHtml: './src/index.html',
  dist: './dist',
  srcJsVendors: [
    './node_modules/@babel/polyfill/dist/polyfill.min.js',
    './node_modules/jquery/dist/jquery.min.js',
  ],
  srcJs: [
    './src/view/**/*.js',
    './src/model/**/*.js',
    './src/Controller.js',
    './src/index.js',
  ],
}