var gulp = require('gulp');
var connect = require('connect');
var serveStatic = require('serve-static');
var serveIndex = require('serve-index');
var wrap = require('gulp-wrap');
var del = require('del');
var runSeq = require('run-sequence');

gulp.task('serve', function(cb) {
	runSeq('clean', 'layout', 'move', 'connect', cb)
});

gulp.task('connect', function () {
  var app = require('connect')()
    .use(serveStatic('.tmp'))
    .use(serveStatic('dist'))
    .use(serveIndex('dist'));

  var server = require('http').createServer(app)
    .listen(9000)
    .on('listening', function () {
      console.log('Started connect web server on http://localhost:9000');
    });
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