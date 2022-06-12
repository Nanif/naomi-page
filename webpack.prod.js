const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

const entries = {
    index: "./src/main.js",
};

module.exports = {
    mode: "development",
    entry: entries,
    output: {
        path: path.resolve(__dirname, "./dist"),
        filename: "siteScript.js"
    },
    plugins: [
        new VueLoaderPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                // options: {
                //     loaders: { scss: 'vue-style-loader!css-loader!sass-loader', }
                // }
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