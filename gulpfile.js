var gulp = require('gulp');
var server;

gulp.task('test', function () {
	var mocha = require('gulp-mocha');
	return gulp.src(['modules/test/*', 'test/*'], {read: false})
		.pipe(mocha());
});

gulp.task('lint', function () {
	var jshint = require('gulp-jshint');
	return gulp.src('*.js')
		.pipe(jshint())
		.pipe(jshint.reporter('default'));
});

// gulp.task('scripts', function () {
// 	var concat = require('gulp-concat');
// 	return gulp.source(['string']);
// });

gulp.task('node', function () {
	var gls = require('gulp-live-server');
	if (server) {
		server.stop();
	}
	server = gls.new('main.js');
	server.start();
});

gulp.task('watch', function () {
	gulp.watch('main.js', ['node']);
	gulp.watch('modules/*.js', ['node']);
});

gulp.task('default', ['node', 'watch']);
