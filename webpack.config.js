var path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const cleanWebpackPlugin = require('clean-webpack-plugin');
const miniCssExtractPlugin = require('mini-css-extract-plugin');
const uglifyJSWebpackPlugin = require('uglifyjs-webpack-plugin');

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
                  chunks: 'all'
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
                    test: /\.(css)$/,
                    // exclude: /node_modules/,
                    use: [ miniCssExtractPlugin.loader, 'css-loader' ]
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
                    viewport: 'width=1920, user-scalable=no'
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
        config.devServer = {
            port: 3000,
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
                })
            ]
        ];
    }


    return config;
};