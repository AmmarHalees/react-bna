var path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/SliderBnA.js',
    output: {
        path: path.resolve('lib'),
        filename: 'SliderBnA.js',
        libraryTarget: 'commonjs2'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                use: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: [
                  'style-loader',
                  'css-loader'
                ]
              }
        ]
    }
}