module.exports = {
  entry: [
    './src/entry.jsx'
  ],
  output: {
    path: __dirname + '/build/',
    publicPath: "/assets/",
    filename: 'bundle.js'
  },
  resolve: {
		extensions: ['', '.js', '.jsx']
	},
  module: {
    loaders: [{
      test: /\.jsx$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['es2015', 'react']
      }
    }]
  }
}