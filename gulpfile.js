'use strict'

var gulp = require('gulp')
var sass = require('gulp-sass')
var browserSync = require('browser-sync').create()

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function () {
  browserSync.init({
    server: './app',
  })
  gulp.watch('app/sass/*.scss', ['sass',])
  gulp.watch('app/*.html').on('change', browserSync.reload)
})

gulp.task('sass', function () {
  return gulp
    .src('app/sass/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.stream())
})
