module.exports = () => {
    $.gulp.task('img:dev', () => {
        return $.gulp.src('src/static/img/**/*')
        .pipe($.gulp.dest('build/static/img'));
    });

    $.gulp.task('img:build', () => {
        return $.gulp.src('src/static/img/**/*')
        .pipe($.plugins.imagemin({
            interlaced: true,
            progressive: true,
            svgoPlagins: [{removeViewBox: false}],
            use: [$.pngquant()]
        }))
        .pipe($.gulp.dest('build/static/img'));
    });
};
