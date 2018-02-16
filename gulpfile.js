'use strict';

global.$ = {
    gulp: require('gulp'),
    plugins: require('gulp-load-plugins')(),
    browserSync: require('browser-sync').create(),
    pngquant: require('imagemin-pngquant'),
    del: require('del'),

    path: {
        tasks: require('./gulp/paths/tasks.js')
    }
};

$.path.tasks.forEach((taskpath) => {
    require(taskpath)();
});


$.gulp.task('default', $.gulp.series(
    $.gulp.parallel('clean'),
    $.gulp.parallel('pug', 'sass', 'script:lib', 'script', 'img:dev', 'fonts'),
    $.gulp.parallel('watch', 'server')
));

$.gulp.task('build', $.gulp.series(
    $.gulp.parallel('clean'),
    $.gulp.parallel('pug', 'sass', 'script:lib', 'script', 'img:build', 'fonts'),
    $.gulp.parallel('watch', 'server')
));
