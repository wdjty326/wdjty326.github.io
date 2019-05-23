var path = require('path');
const webpack = require('webpack');
const htmlWebpackPlugin = require('html-webpack-plugin');
const cleanWebpackPlugin = require('clean-webpack-plugin');
const miniCssExtractPlugin = require('mini-css-extract-plugin');
const uglifyJSWebpackPlugin = require('uglifyjs-webpack-plugin');
const lodashWebpackPlugin = require('lodash-webpack-plugin');

module.exports = (env, options) => {
    const config = {
        entry: ['@babel/polyfill', './src/index.jsx'],
        output: {
            path: path.resolve(__dirname, 'public'),
            filename: '[name].bundle.js',
            chunkFilename: '[name].[id].bundle.js'
        },
        optimization: {
            splitChunks: {
                cacheGroups: {
                    vendors: {
                        name: 'vendors',
                        test: /[\\/]node_modules[\\/]/,
                        minSize: 50000,
                        maxSize: 100000,
                        chunks: 'all',
                    },
                    styles: {
                        name: 'styles',
                        test: /\.(css)$/,
                        chunks: 'all',
                    }
                },
            },
        },
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    use: 'babel-loader'
                }, 
                {
                    test: /\.(css|scss)$/,
                    // exclude: /node_modules/,
                    use: [ miniCssExtractPlugin.loader, 'css-loader', 'sass-loader' ]
                },
                {
                    test: /\.(ico)$/,
                    exclude: /node_modules/,
                    use: {
                        loader: 'file-loader',
                        options: {
                            name: '[name].[ext]',
                            publicPath: './'
                        }
                    }
                },
                {
                    test: /\.(png|jpg|svg)$/,
                    exclude: /node_modules/,
                    use: {
                      loader: 'url-loader',
                      options: {
                        mimetype: 'image/png',
                        name: '[name].[ext]',
                        publicPath: './',
                        limit: 10000
                      }
                    }
                }
            ]
        },
        plugins: [
            new cleanWebpackPlugin(),
            new htmlWebpackPlugin({
                title: 'JeongTaekYu Portfolio',
                meta: {
                    viewport: 'width=device-width, minimum-scale=1.0, maximum-scale=2.0'
                },
                favicon: './src/favicon.ico',
                template: './src/index.html'
            }),
            new miniCssExtractPlugin({
                filename: '[name].bundle.css',
                chunkFilename: '[name].[id].bundle.css'
            })
        ],
        resolve: {
            extensions: ['.js', '.jsx']
        }
    };

    if (options.mode === 'development') {
        config.mode = 'development';
        config.plugins = [
            ...config.plugins,
            ...[
                new webpack.EnvironmentPlugin({
                    PUBLIC_URL: 'http://localhost:3000/',
                    NODE_ENV: 'production',
                }),
            ]
        ];
        config.devServer = {
            port: 3003,
            contentBase: path.resolve(__dirname, 'public'),
            compress: true,
            watchContentBase: true,
            historyApiFallback: true
        };
    } else {
        config.mode = 'production';
        config.plugins = [
            ...config.plugins,
            ...[
                new uglifyJSWebpackPlugin({
                    cache: true,
                    parallel: true,
                    sourceMap: true
                }),
                new webpack.EnvironmentPlugin({
                    PUBLIC_URL: 'https://wdjty326.gibhub.com/',
                    NODE_ENV: 'production',
                }),
                new lodashWebpackPlugin(),
            ]
        ];
    }


    return config;
};