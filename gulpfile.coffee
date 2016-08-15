cs = require('coffee-script/register')

gulp = require('gulp')
jade = require('gulp-jade')
sass = require('gulp-sass')
cssnext = require('gulp-cssnext')
coffee = require('gulp-coffee')

gulp.task 'jade', ->
  gulp.src(['./src/jade/**/*.jade', '!./src/jade/**/_*.jade'])
    .pipe(jade({ pretty: true }))
    .pipe gulp.dest('./dest/')

gulp.task 'sass', ->
  gulp.src(['./src/sass/**/*.sass', '!./src/sass/**/_*.sass'])
  .pipe(sass())
  .on 'error', (err) ->
    console.log err.message
  .pipe(cssnext())
  .pipe gulp.dest('./dest/css')

gulp.task 'coffee', ->
  gulp.src(['./src/js/**/*.coffee', '!./src/js/**/_*.coffee'])
  .pipe(coffee())
  .pipe gulp.dest('./dest/js')

gulp.task 'watch', ->
  gulp.watch './src/jade/**/*.jade', ["jade"]
  gulp.watch './src/sass/**/*.sass', ["sass"]
  gulp.watch './src/js/**/*.coffee', ["coffee"]

gulp.task 'default', ['jade', 'sass', 'coffee']

