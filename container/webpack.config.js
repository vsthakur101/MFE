const HtmlWebPackPlugin = require('html-webpack-plugin');
const ModuleFedration = require('webpack/lib/container/ModuleFederationPlugin');

module.exports = {
    mode : 'development',
    devServer:{
        port: 8081,
    },
    plugins:[
        new HtmlWebPackPlugin({
            template: './public/index.html',
        }),
        new ModuleFedration({
            name: 'container',
            remotes: {
                products: 'products@http://localhost:8080/remoteEntry.js',
                cart: 'cart@http://localhost:8082/remoteEntry.js'
            },
        })
    ]
};