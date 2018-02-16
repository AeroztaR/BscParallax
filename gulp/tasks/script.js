module.exports = () => {
    $.gulp.task('script:lib', () => {
        return $.gulp.src([
            'node_modules/jquery/dist/jquery.min.js',
        ])
          .pipe($.plugins.concat('libs.min.js'))
          .pipe($.plugins.uglify())
          .pipe($.gulp.dest('build/static/js'))
          .pipe($.browserSync.reload({
              stream: true
          }));
      });

      $.gulp.task('script', () => {
        return $.gulp.src([
            'src/static/js/main.js'
        ])
          .pipe($.plugins.concat('libs.min.js'))
          .pipe($.plugins.uglify())
          .pipe($.gulp.dest('build/static/js'))
          .pipe($.browserSync.reload({
              stream: true
          }));
      });
};