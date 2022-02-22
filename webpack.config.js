const path = require('path')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const CopyPlugin = require("copy-webpack-plugin");
const nodeExternals = require('webpack-node-externals');
module.exports = {
    entry: './src/index.ts',
    externals: [nodeExternals()],
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname, 'dist'),
        libraryTarget: 'commonjs'
    },
    plugins: [new CleanWebpackPlugin(),
    new CopyPlugin({
        patterns: [
            {from: 'src/generated/qaware-scale-react.css', to: ''}
        ]
    })],
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: ['ts-loader']
            },
            {
                test: /\.css$/,
                use: ['style-loader', "css-loader",'postcss-loader'],
            }
        ]
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js'],
    },
}
