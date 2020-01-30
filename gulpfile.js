var gulp = require ('gulp');
var uglifycss = require('gulp-uglifycss');
var concatCss = require('gulp-concat-css');
var cleanCSS = require('gulp-clean-css');
var autoprefixer = require('gulp-autoprefixer');
var imagemin = require('gulp-imagemin');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');


/// 2 autoprefixer
exports.default = () => (
  gulp.src('./dist/css/*.css')
      .pipe(autoprefixer({
          cascade: false
      }))
      .pipe(gulp.dest('dist/css-minify'))
);
/// 1 css minify
  /// gulp-concat-css
  gulp.task('css', function () {
    return gulp.src('./dist/css/*.css')
    .pipe(uglifycss({
      "maxLineLen": 80,
      "uglyComments": true
       }))
      .pipe(concat("main.css"))
      .pipe(gulp.dest('dist/css-minify'));
});
//clean css
gulp.task('minify-css-clean', () => {
  return gulp.src('./dist/css/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('dist/css-minify/'));
});
//optimaze image
exports.imageMin = () => (
  gulp.src('./dist/portfolio/*')
      .pipe(imagemin())
      .pipe(gulp.dest('dist/image'))
);
//js minify
gulp.task('minify', function () {
  return pipeline(
        gulp.src('dist/js/*.js'),
        uglify(),
        gulp.dest('dist/js-minify'));
});
/// 3 scrips 
gulp.task('scripts', function() {
  return gulp.src('dist/js/*.js')
    .pipe(concat('main.js'))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js-minify'));
});