// entry point - for us that is app.js in src

// then tell it where the output is -- i think that is ublic app.js


const path = require('path');

module.exports = {
    entry: './src/app.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        }]

    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
       contentBase: path.join(__dirname, 'public')
    }
};




