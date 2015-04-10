'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync');

var $ = require('gulp-load-plugins')();

function webpack(watch, es6, callback) {
  var src = es6 ? 'src-es6/init.js' : 'src/init.jsx';

  return gulp.src(src)
    .pipe($.webpack({
      watch: watch,
      module: {
        preLoaders: [
          { test: /\.(js|jsx)$/, exclude: /node_modules/, loader: 'eslint-loader'}
        ],
        loaders: [
          { test: /\.(js|jsx)$/, exclude: /node_modules/, loader: 'babel-loader?optional=runtime'}
        ]
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

function server(es6) {
  var src = es6 ? './src-es6' : './src';

  browserSync.init({
    startPath: '/',
    server: {
      baseDir: ['./dist', src, './node_modules'],
      middleware: require('./obd-proxy')
    }
  });
}

gulp.task('webpack', function () {
  return webpack(false, false);
});

gulp.task('webpack:watch', function (callback) {
  return webpack(true, false, callback);
});

gulp.task('serve', ['webpack:watch'], function () {
  server(false);
});

gulp.task('webpack:es6', function () {
  return webpack(false, true);
});

gulp.task('webpack:es6:watch', function (callback) {
  return webpack(true, true, callback);
});

gulp.task('serve:es6', ['webpack:es6:watch'], function () {
  server(true);
});
