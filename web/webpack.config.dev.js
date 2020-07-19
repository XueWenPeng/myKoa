const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'index.js'
    },
    devServer: {
        port: 8000,
        contentBase: path.join(__dirname, 'public'),
        open: true,
        // proxy: {
        //     "/api": 'http://localhost:3000',
        // },
        hot: true,
        historyApiFallback: true
    },
    module: {
        rules: [
            {
                test: /\.js|jsx$/,
                use: 'babel-loader',
            },
            {
                test: /\.css/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /.less/,
                use: ['css-loader', 'less-loader']
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, './public/index.html'),
            minify: {
                removeComments: true,
                collapseWhitespace: true,
                minifyCSS: true
            },
            inject: true
        })
    ]
}