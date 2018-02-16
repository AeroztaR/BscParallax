module.exports = () => {
    $.gulp.task('sass', () => {
        return $.gulp.src('src/static/sass/main.scss')
          .pipe($.plugins.sourcemaps.init())
          .pipe($.plugins.sass())
          .pipe($.plugins.cssimport())
          .pipe($.plugins.autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
          }))
          .pipe($.plugins.csso())
          .pipe($.plugins.sourcemaps.write())
          .pipe($.gulp.dest('build/static/css/'))
          .pipe($.browserSync.reload({
              stream: true
          }));
      });
};