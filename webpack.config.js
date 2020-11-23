const path = require('path')
const webpack = require('webpack')


module.exports = {
   
    mode: "development", // "production" | "development" | "none"
    // Chosen mode tells webpack to use its built-in optimizations accordingly.
    entry: "./src/index.js", 
     // string | object | array
    // defaults to ./src
    // Here the application starts executing
    // and webpack starts bundling
    output: {
      // options related to how webpack emits results
      path: __dirname + '/public', // the absolute path for the directory where we want the output to be placed
      filename: 'bundle.js'
  
        /* Advanced output.library configuration (click to show) */
      }
    }
