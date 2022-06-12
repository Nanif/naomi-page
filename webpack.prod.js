const path = require('path');
// const TerserPlugin = require('terser-webpack-plugin');‏
const TerserPlugin = require('terser-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
//todo uglify
const entries = {
    // index: "./src/main.js",
    catalog:"./src/smart_catalog.js"
};

module.exports = {
    mode: 'production',
    optimization: {
        minimizer: [new TerserPlugin()]
    },
    entry: entries,
    output: {
        path: path.resolve(__dirname, "./dist/public"),
        filename: "catalog.js"
    },
    plugins: [
        new VueLoaderPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loaders: {scss: 'vue-style-loader!css-loader!sass-loader',}
                }
            },
            {
                test: /\.js$/,
                exclude: /(node_modules)/
            },
            {
                test: /\.css$/,
                use: ['vue-style-loader', 'css-loader']
            },
            {
                test: /\.scss$/,
                use: [
                    {loader: "vue-style-loader"},
                    {loader: "css-loader", options: {sourceMap: true}},
                    {loader: "sass-loader", options: {sourceMap: true}}
                ]
            },
            {
                test: /\.(png|jpg|woff|woff2|eot|ttf|svg)$/,
                loader: 'url-loader?limit=100000'
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.vue'],
        //alias: { vue: "vue/dist/vue.js" }
    },
};