const ebpack = require('webpack');
const path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'build/');
var APP_DIR = path.resolve(__dirname, 'src/js');

const config = {
  entry: './src/js/index.jsx',
  output: {
    path: './build/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        loader : 'babel-loader'
      },
	  {                                                                      
		test: /\.scss$/,                                                   
		use: [                                                             
			'style-loader',                                                
			'css-loader',                                                  
			'sass-loader',                                                 
		],                                                                 
	  }, 
    ]
  },
  resolve: {
    modules: [
        path.resolve('./src/js'),
        'node_modules',
    ],
    extensions: ['.js', '.jsx'], 
  },
};

module.exports = config;
