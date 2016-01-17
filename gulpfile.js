var gulp = require('gulp');
var connect = require('connect');
var serveStatic = require('serve-static');
var serveIndex = require('serve-index');
var wrap = require('gulp-wrap');
var del = require('del');
var runSeq = require('run-sequence');
var ghPages = require('gulp-gh-pages');
var server = require('gulp-server-livereload');

gulp.task('deploy', ['build'], function() {
  return gulp.src('./dist/**/*')
    .pipe(ghPages());
});

gulp.task('build', function(cb) {
  runSeq('clean', 'layout', 'move', cb);
});

gulp.task('serve', function(cb) {
	runSeq('clean', 'layout', 'move', 'connect', cb);

  gulp.watch('source/**/*', function() {
    runSeq('clean', 'layout', 'move');
  })
});

gulp.task('connect', function () {
  gulp.src('dist')
    .pipe(server({
      livereload: true
    }));
});

gulp.task('move', function() {
	return gulp.src(['source/**/*', '!source/app', '!source/app/**'])
		.pipe(gulp.dest('dist'));
});

gulp.task('layout', function () {
  return gulp.src(['source/app/**/*.html', '!source/app/layout.html'])
    .pipe(wrap({src: 'source/app/layout.html'}))
    .pipe(gulp.dest('dist'));
});

gulp.task('clean', function(cb) {
	del(['dist']).then(function (paths) {
	    console.log('Deleted files and folders:\n', paths.join('\n'));
	    cb()
	});
});