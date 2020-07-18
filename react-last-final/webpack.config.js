const path = require("path");
const autoprefixer = require("autoprefixer");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require( "mini-css-extract-plugin" );

module.exports = {
    mode: "development",
    devtool: "eval-cheap-module-source-map",
    entry: "./src/index.js",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
        publicPath: "/"
    },
     module: {
        rules: [ {
                test: /\.css$/,
                exclude: /src/,
                use: [
                    MiniCssExtractPlugin.loader, // instead of style-loader
                    "css-loader",
                ],
            },
            {
                test: /\.js$/,
                loader: "babel-loader",
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                use: [ {
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader",
                        options: {
                            importLoaders: 1,
                            modules: {
                                localIdentName: "[name]__[loca]__[hash:base64:5]",
                            },
                        },
                    },
                    {
                        loader: "postcss-loader",
                        options: {
                            ident: "postcss",
                            plugins: () => [ autoprefixer() ],
                        },
                    },
                ],
            },
            {
                test: /\.(png|gif|svg|jpe?g)$/,
                loader: "url-loader?limit=8000&name=images/[name].[ext]",
            },
        ],
    },
    devServer: {
        historyApiFallback: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: __dirname + "/src/index.html",
            filename: "index.html",
            inject: "body",

        }),
        new MiniCssExtractPlugin(),
    ]
};


