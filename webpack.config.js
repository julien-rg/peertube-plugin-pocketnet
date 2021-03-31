const path = require("path")

const EsmWebpackPlugin = require("@purtuga/esm-webpack-plugin")

const clientFiles = [
  'common-client-plugin.js',
  'embed-client-plugin.js',
  'video-watch-client-plugin.js'
]

let config = clientFiles.map(f => ({
  entry: "./client/" + f,
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "./" + f,
    library: "script",
    libraryTarget: "var"
  },
  plugins: [ new EsmWebpackPlugin() ],
  externals: {
    'video.js': 'window.videojs'
  }
}))

module.exports = config
