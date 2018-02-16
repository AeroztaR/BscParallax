module.exports = () => {
    $.gulp.task('server', () => {
        $.browserSync.init({
            server: {
                baseDir: "./build"
            },
            notify: false
        });
    });
};