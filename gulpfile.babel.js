import gulp from 'gulp'
import jade from 'gulp-jade'
import reload from 'gulp-livereload'
import serve from 'gulp-serve'
import 'shelljs/global'

gulp.task('serve', serve({
  root: '.',
  port: 3031
}))

gulp.task('jade', () => {
  gulp.src('./static/index.jade')
    .pipe(jade({
      locals: {
        time: Date.now()
      }
    }))
    .pipe(gulp.dest('./'))
    .pipe(reload())
})

gulp.task('webpack-commonjs', () => {
  exec('npm run commonjs')
})

gulp.task('webpack-browser', () => {
  exec('npm run browser')
  reload()
})

gulp.task('webpack-build', ['webpack-browser', 'webpack-commonjs'])


gulp.task('watch', () => {
  reload.listen()
  gulp.watch('./src/**/*', ['webpack-build'])
})

gulp.task('build', ['webpack-build', 'jade'])

gulp.task('default', ['build', 'watch', 'serve'])
