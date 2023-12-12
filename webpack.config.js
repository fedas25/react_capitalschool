const path = require("path")
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HTMLWebpackPlugin = require("html-webpack-plugin")
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin')

module.exports = {
    mode: "development",
    target: "web",
    entry: ["@babel/polyfill", "./src/index.jsx"],
    output: {
        path: path.resolve(__dirname, "build"),
        filename: "[name].[hash].js",
        clean: true,
    },
    devServer: {
        port: 3000
    },
    resolve: {
        extensions: ['.js', '.json', '.jsx'],
    },
    plugins: [
        new HTMLWebpackPlugin({ template: "./src/index.html" }),
        new CleanWebpackPlugin(),
    ],
    module: {
        rules: [ // Загрузчики для обработки разных типов файлов
            {
                test: /\.(css)$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.(jpg|jpeg|png|svg)$/,
                type: "asset/resource"
            },
            {
                test: /\.(ttf|woff|woff2)$/,
                type: "asset/resource"
            },
            {
                test: /\.(jsx|js)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env', "@babel/preset-react"]
                    }
                }
            }
        ]
    }
}