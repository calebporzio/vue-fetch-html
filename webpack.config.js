const path = require('path');

module.exports = {
    entry: "./src/index.js",

    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "vue-fetch-html.js",
        library: 'vue-fetch-html',
        libraryTarget: 'umd',
        umdNamedDefine: true,
    },

    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            }
        ]
    }
}