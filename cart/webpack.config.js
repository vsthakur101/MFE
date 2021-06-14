const HtmlWebPackPlugin = require('html-webpack-plugin');
const ModuleFedration = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
    mode : 'development',
    devServer:{
        port: 8082,
    },
    plugins:[
        new HtmlWebPackPlugin({
            template: './public/index.html',
        }),
        new ModuleFedration({
            name: 'cart',
            filename: 'remoteEntry.js',
            exposes: {
                './CartShow': './src/bootstrap.js',
            },
            shared: {
                faker:{
                    singleton: true
                }
            },
        })
    ]
};