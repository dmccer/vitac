var
  gulp = require('gulp'),
  path = require('path'),
  sourcemaps = require('gulp-sourcemaps'),
  less = require('gulp-less'),
  minifyCss = require('gulp-minify-css'),
  autoprefixer = require('gulp-autoprefixer'),
  config = require('./package.json')
;

var DEST = 'dist';

function build () {
  return gulp
    .src(['./vitac.less'])
    .pipe(less())
    .pipe(minifyCss())
    .pipe(autoprefixer({
      browsers: ['> 1%', 'last 2 versions', 'ie 9', 'iOS 4', 'Android 4'],
      cascade: false
    }))
    .pipe(gulp.dest(DEST));
}

gulp.task('build', build);

gulp.task('default', ['build']);