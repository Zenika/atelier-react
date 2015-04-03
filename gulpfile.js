'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync');

var $ = require('gulp-load-plugins')();

gulp.task('webpack', function () {
    gulp.src('src/init.jsx')
        .pipe(webpack({
            output: {
                filename: "bundle.js"
            },
            module: {
                loaders: [
                    {test: /\.jsx$/, loader: 'jsx-loader'}
                ]
            }
        }))
        .pipe(gulp.dest('dist'));
});

function webpack(watch, callback) {
  return gulp.src('src/init.jsx')
    .pipe($.webpack({
      watch: watch,
      module: {
        preLoaders: [
          { test: /\.(js|jsx)$/, exclude: /node_modules/, loader: 'eslint-loader'}
        ],
        loaders: [
          { test: /\.(js|jsx)$/, exclude: /node_modules/, loader: 'babel-loader'}
        ]//,
        //noParse: [/lie\.js/, /leveldown/, /levelup/]
      },
      output: {
        filename: 'bundle.js'
      }
    }, null, function(err, stats) {
      if(err) {
        throw new $.util.PluginError('webpack', err);
      }
      $.util.log(stats.toString({
        colors: $.util.colors.supportsColor,
        chunks: false,
        hash: false,
        version: false
      }));
      browserSync.reload();
      if(watch) {
        watch = false;
        callback();
      }
    }))
    .pipe(gulp.dest('dist'));
}

gulp.task('webpack', function () {
  return webpack(false);
});

gulp.task('webpack:watch', function (callback) {
  return webpack(true, callback);
});

gulp.task('serve', ['webpack:watch'], function () {
  browserSync.init({
    startPath: '/',
    server: {
      baseDir: ['./dist', './src', './node_modules'],
      middleware: require('./obd-proxy')
    }
  });
});
