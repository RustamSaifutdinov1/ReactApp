const path =require('path');
const NODE_ENV=process.env.NODE_ENV;
const HTMLWebpackPlugin = require('html-webpack-plugin');
const IS_DEV= NODE_ENV==='development';
const IS_Prod= NODE_ENV==='production';

function setupDevTool(){
    if(IS_DEV) return 'eval';
    if(IS_Prod) return false;
}

module.exports={
    resolve: {
        extensions: ['.js','.jsx','.ts','.tsx','.json']
    },
    mode: NODE_ENV ? NODE_ENV : 'development',
    entry: path.resolve(__dirname,'src/index.jsx'),
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: 'index.js'
    },
    module: {
        rules: [{
            test: /\.[tj]sx?$/,
            use: ['ts-loader']
        }]
    },
    plugins: [
        new HTMLWebpackPlugin({template: path.resolve(__dirname,'index.html')})
    ],
    devServer: {
        port: 3000,
        open:true,
        hot:IS_DEV
    },
    devtool:setupDevTool()
};