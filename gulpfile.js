const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify');
const sass = require('gulp-sass');
const concat = require('gulp-concat');
const htmlmin = require('gulp-html-minifier');
const cleanCSS = require('gulp-clean-css');
const babel = require('gulp-babel');
const autoprefixer = require('gulp-autoprefixer');

/*
  -- TOP LEVEL FUNCTIONS --
  gulp.task  - dfine tasks
  gulp.src   - point to used files
  gulp.dest  - point to output folder
  gulp.watch - watch file changes
*/

// Logs message
gulp.task('message', function () {
  return console.log('gupl is running...');
});

// Copy all HTML files
gulp.task('copyHtml', function () {
  gulp.src('src/*.html')
    .pipe(htmlmin({
      collapseWhitespace: true
    }))
    .pipe(gulp.dest('dist'));
});

// Optimize images 
gulp.task('imageMin', () =>
  gulp.src('src/images/*')
  // .pipe(imagemin())
  .pipe(gulp.dest('dist/images'))
);

// Compile sass
gulp.task('sass', function () {
  gulp.src('src/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
    }))
    .pipe(cleanCSS({
      compatibility: 'ie8'
    }))
    .pipe(gulp.dest('dist/css'));
});

// Scripts merge
gulp.task('scripts', function () {
  gulp.src('src/js/*js')
    .pipe(concat('main.js'))
    .pipe(babel({
      presets: ['@babel/env']
    }))
    .pipe(uglify())
    .pipe(gulp.dest('dist/js'));
});

gulp.task('default', ['message', 'copyHtml', 'imageMin', 'sass', 'scripts']);

gulp.task('watch', function () {
  gulp.watch('src/js/*.js', ['scripts']);
  gulp.watch('src/images/*', ['imageMin']);
  gulp.watch('src/sass/**/*.scss', ['sass']);
  gulp.watch('src/*.html', ['copyHtml']);
});