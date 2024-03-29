'use strict';

require('harmonize')();

var gulp = require('gulp');
var gutil = require('gulp-util');
var webpack = require('gulp-webpack');
var browserSync = require('browser-sync');
var karma = require('karma');

function webpackLauncher(watch, callback) {
  return gulp.src('src/init.jsx')
    .pipe(webpack({
      watch: watch,
      module: {
        preLoaders: [
          { test: /\.(js|jsx)$/, exclude: /node_modules/, loader: 'eslint-loader' }
        ],
        loaders: [
          { test: /\.(js|jsx)$/, exclude: /node_modules/, loader: 'babel-loader?optional=runtime' }
        ]
      },
      output: {
        filename: 'bundle.js'
      }
    }, null, function(err, stats) {
      if(err) {
        throw new gutil.PluginError('webpack', err);
      }
      gutil.log(stats.toString({
        colors: gutil.colors.supportsColor,
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

function karmaLauncher(singleRun, done) {
  karma.server.start({
    configFile: __dirname + '/karma.conf.js',
    singleRun: singleRun,
    autoWatch: !singleRun
  }, done);
}

gulp.task('webpack', function () {
  return webpackLauncher(false);
});

gulp.task('webpack:watch', function (callback) {
  return webpackLauncher(true, callback);
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

gulp.task('test', function (done) {
  karmaLauncher(true, done);
});

gulp.task('test:auto', function (done) {
  karmaLauncher(false, done);
});
