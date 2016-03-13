var gulp = require("gulp");
var gutil = require("gulp-util");
var webpack = require("webpack");
var path = require('path');
var node_modules = path.resolve(__dirname, 'node_modules');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var WebpackDevServer = require("webpack-dev-server");
var webpackConfig = require("./webpack.js");
var gulpWebpack = require('webpack-stream');
var clean = require('gulp-clean');


gulp.task("debug", function(callback) {
    webpackConfig.entry.unshift('webpack/hot/only-dev-server')
    webpackConfig.entry.unshift("webpack-dev-server/client?http://0.0.0.0:8080");
    webpackConfig.module.loaders[0].loaders.unshift('react-hot');
    webpackConfig.plugins.unshift(new webpack.HotModuleReplacementPlugin())
 new WebpackDevServer(webpack(webpackConfig,function(err,state){
            console.log(state)
    }),{
        hot: true,
        stats: { colors: true },
        contentBase:"build"
    }).listen(8080, "0.0.0.0", function(err) {
        if(err) throw new gutil.PluginError("webpack-dev-server", err);
        else gutil.log("[webpack-dev-server]", "http://localhost:8080");
    });
    
});

gulp.task("clean",function(){
    gulp.src('build', {read: false}).pipe(clean());
})
gulp.task("build",function(){
    webpackConfig.output.filename="[name][hash].js"
    webpackConfig.plugins.unshift(new webpack.HotModuleReplacementPlugin())
    webpackConfig.plugins.unshift(new webpack.optimize.UglifyJsPlugin({
                compress: {warnings: false}
        }));
    webpack(webpackConfig,function(err,state){
            console.log(state)
    })
});

gulp.task("pro",["clean",'build']);
gulp.task("default", ["debug"]);


