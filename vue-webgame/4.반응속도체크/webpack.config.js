
const { VueLoaderPlugin } = require('vue-loader');
const path = require('path')// node.js가 만들어주는 절대경로 스크립트


module.exports = {
    mode : 'development',
    devtool : 'eval',
    resolve : {
        extensions : ['.js', '.vue']
    },
    entry: {
        app : path.join(__dirname, 'main.js'),
    },
    module : {
        rules : [{
            test : /\.vue$/,
            use : 'vue-loader'
        }, {
            test: /\.css$/,
            use : [
                'vue-style-loader',
                'css-loader'
            ]
        }],
    },
    plugins : [
        new VueLoaderPlugin(),
    ],
    output : {
        filename : '[name].js',
        path : path.join(__dirname, 'dist')
    },
    devServer: {
        devMiddleware: { publicPath: '/dist' },
        static : {
            directory: path.join(__dirname, '/')
        },
        hot: true
    }
};