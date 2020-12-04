var path = require('path')
var webpack = require('webpack');

module.exports = {
    entry: "./src/app/main.ts",
    output: {
        path: path.resolve(__dirname, "src/dist"),
        filename: "bundle.js"
    },
    resolve: {
        extensions: [".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
    },
    module: {
        rules: [
            { test: /\.tsx?$/, loader: "ts-loader" }
        ]
    },
    optimization: {
        minimize: false
    },
}