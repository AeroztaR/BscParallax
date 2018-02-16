module.exports = () => {
    $.gulp.task('watch', () => {
        $.gulp.watch('src/pug/**/*.pug', $.gulp.series('pug')),
        $.gulp.watch('src/static/sass/**/*.scss', $.gulp.series('sass')),
        $.gulp.watch('src/static/js/**/*.js', $.gulp.series('script')),
        $.gulp.watch('src/static/img/*', $.gulp.series('img:dev'))       
    });
};