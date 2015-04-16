'use strict';

require('harmonize')();

var gulp = require('gulp');
var browserSync = require('browser-sync');

gulp.task('slides', function () {
  browserSync.init({
    startPath: '/',
    server: {
      baseDir: ['./']
    }
  });
});

