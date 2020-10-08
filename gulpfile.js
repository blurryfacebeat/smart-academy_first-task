const gulp = require('gulp');
const sass = require('gulp-sass');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');
const babel = require('gulp-babel');

gulp.task('scss', async function() {
    gulp.src('scss/index.scss')
        .pipe(sass())
        .pipe(postcss([
            autoprefixer(['last 15 versions', '> 1%'], { cascade: true })
        ]))
        .pipe(gulp.dest('css'));
});

gulp.task('js', async function() {
    gulp.src('js/index.js')
        .pipe(babel({
            presets: ['@babel/preset-env']
        }))
        .pipe(gulp.dest('js/main'));
});

gulp.task('develop', gulp.parallel('scss', 'js'));