const HtmlWebPackPlugin = require('html-webpack-plugin');
const ModuleFedration = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
    mode : 'development',
    devServer:{
        port: 8080,
    },
    plugins:[
        new HtmlWebPackPlugin({
            template: './public/index.html',
        }),
        new ModuleFedration({
            name: 'products',
            filename: 'remoteEntry.js',
            exposes: {
                './ProductsIndex': './src/bootstrap.js'
            },
            shared: {
                faker:{
                    singleton: true
                }
            },
        })
    ]
};