const path = require('path')
const htmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'production',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'index.js'
    },
    devServer: {
        port: 8000,
        contentBase: path.join(__dirname, 'public'),
        open: false,
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
                use: [{
                    loader: 'babel-loader',
                    options: {
                        plugins: [
                            [
                                "react-css-modules",
                                {
                                    "generateScopedName": "[path][name]__[local]--[hash:base64:5]",
                                    "filetypes": {
                                        ".less": {
                                            "syntax": "postcss-less"
                                        }
                                    }
                                }
                            ]
                        ]
                    }
                }, {
                    loader: 'eslint-loader',
                    options: {
                        fix: true
                    }
                }],
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                localIdentName: '[path][name]__[local]--[hash:base64:5]'
                            }
                        }
                    }
                ]
              },
            {
                test: /.less/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: {
                                localIdentName: '[path][name]__[local]--[hash:base64:5]'
                            }
                        }
                    },
                    'less-loader'
                ]
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