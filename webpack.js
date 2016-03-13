var webpack = require("webpack");
var path = require('path');
var gutil = require("gulp-util");
var node_modules = path.resolve(__dirname, 'node_modules');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var myConfig={
    debug:true,
    devtool:'source-map',
    entry: [path.resolve(__dirname, 'source/main.js')],
    context: path.resolve(process.cwd(), 'source'),
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'main.js',
        publicPath: ""
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            loaders: ['babel'],
            include: path.join(__dirname, 'source')
        }, {
            test: /\.jade$/,
            loader: 'html!jade-html'
        }, {
            test: /\.css$/,
            loader: 'style!css'
        }, {
            test: /\.sass$/,
            loader: "style!css!sass?indentedSyntax&includePaths[]=" + path.resolve(__dirname, "./node_modules/compass-mixins/lib") + "&includePaths[]=" + path.resolve(__dirname, "./mixins/app_mixins")
        }, {
            test: /\.(png|jpg)$/,
            loader: 'url-loader?limit=10000&name=[path][name]-[hash:8].[ext]'
        }]
    },
    resolve: {
        root: [path.resolve(process.cwd(), 'source'), path.resolve(__dirname, 'node_modules')], //设置搜索目录
        alias: {
            images: './images'
        },
        extensions: ['', '.js', '.jade','.jsx']
    },
    plugins: [
            new webpack.NoErrorsPlugin(),
            new HtmlWebpackPlugin({  // Also generate a test.html
                 filename: 'index.html',
                 template:'index.html',
            }),
            new webpack.ProgressPlugin(function handler(percentage, msg) {
                        gutil.log(msg)}
                )
        //用了该插件就可以在jsx里使用require("jquery")
        // new webpack.ProvidePlugin({
        //     jQuery: "jquery",
        //     $: "jquery"
        // })
        //     new webpack.DefinePlugin({
        //             PRODUCTION: JSON.stringify(!!gulp.env.production)
        // })

    ]
};


module.exports=myConfig;