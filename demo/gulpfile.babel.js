// generated on 2016-02-13 using generator-gulp-webapp 1.1.1
import gulp from 'gulp';
import gulpLoadPlugins from 'gulp-load-plugins';
import browserSync from 'browser-sync';
import del from 'del';
import {stream as wiredep} from 'wiredep';

const $ = gulpLoadPlugins();
const reload = browserSync.reload;

gulp.task('styles', () => {
  return gulp.src('app/styles/*.scss')
  .pipe($.plumber())
  .pipe($.sourcemaps.init())
  .pipe($.sass.sync({
    outputStyle: 'compressed',
    precision: 10,
    includePaths: ['.']
  }).on('error', $.sass.logError))
  .pipe($.autoprefixer({browsers: ['> 1%', 'last 2 versions', 'Firefox ESR']}))
  .pipe($.sourcemaps.write())
  .pipe(gulp.dest('dist/styles'))
  .pipe(reload({stream: true}));
});

gulp.task('js', () => {
  return gulp.src(['app/js/*.js', 'app/js/**/*.js'])
  .pipe($.plumber())
  .pipe($.sourcemaps.init())
  .pipe($.babel())
  .pipe($.uglify())
  .pipe($.concat('app.js'))
  .pipe($.sourcemaps.write('.'))
  .pipe(gulp.dest('dist/js'))
  .pipe(reload({stream: true}));
});

gulp.task('vendor', () => {
  return gulp.src(['vendor/**/*.js'])
  .pipe($.plumber())
  .pipe($.sourcemaps.init())
  //.pipe($.babel())
  .pipe($.uglify())
  .pipe($.concat('vendor.js'))
  .pipe($.sourcemaps.write('.'))
  .pipe(gulp.dest('dist/js'))
  .pipe(reload({stream: true}));
});

//html
gulp.task('html', () => {
  return gulp.src('app/*.html')
  .pipe(gulp.dest('dist'));
  reload;
});

function lint(files, options) {
  return () => {
    return gulp.src(files)
    .pipe(reload({stream: true, once: true}))
    .pipe($.eslint(options))
    .pipe($.eslint.format())
    .pipe($.if(!browserSync.active, $.eslint.failAfterError()));
  };
}
const testLintOptions = {
  env: {
    mocha: true
  }
};

gulp.task('lint', lint('app/js/**/*.js'));
gulp.task('lint:test', lint('test/spec/**/*.js', testLintOptions));


gulp.task('images', () => {
  return gulp.src('app/assets/img/**/*')
  .pipe($.if($.if.isFile, $.cache($.imagemin({
    progressive: true,
    interlaced: true,
      // don't remove IDs from SVGs, they are often used
      // as hooks for embedding and styling
      svgoPlugins: [{cleanupIDs: false}]
    }))
  .on('error', function (err) {
    console.log(err);
    this.end();
  })))
  .pipe(gulp.dest('dist/img'));
});

gulp.task('fonts', () => {
  return gulp.src(require('main-bower-files')('**/*.{eot,svg,ttf,woff,woff2}', function (err) {})
    .concat('app/assets/fonts/**/*'))
  .pipe(gulp.dest('dist/fonts'))
  .pipe(gulp.dest('dist/fonts'));
});


gulp.task('clean', del.bind(null, 'dist'));

gulp.task('serve', ['styles', 'vendor', 'js', 'fonts', 'html', 'images'], () => {


 browserSync.init({
  "server" : "dist/"
});

 gulp.watch('app//**/*.html', ['html']).on('change', reload);
 gulp.watch('app/images/**/*', ['images']).on('change', reload);
 gulp.watch('app/styles/**/*.scss', ['styles']);
 gulp.watch('app/js/**/*.js', ['js']);
 gulp.watch('app/vendor/**/*.js', ['vendor']);
 gulp.watch('app/fonts/**/*', ['fonts']);
 gulp.watch('bower.json', ['wiredep', 'fonts']);
});

// inject bower components
gulp.task('wiredep', () => {
  gulp.src('app/styles/*.scss')
  .pipe(wiredep({
    ignorePath: /^(\.\.\/)+/
  }))
  .pipe(gulp.dest('app/styles'));

  gulp.src('app/*.php')
  .pipe(wiredep({
    ignorePath: /^(\.\.\/)*\.\./
  }))
  .pipe(gulp.dest('app'));
});

gulp.task('build', ['lint', 'images', 'fonts'], () => {
  return gulp.src('dist/**/*').pipe($.size({title: 'build', gzip: true}));
});

gulp.task('default', ['clean'], () => {
  gulp.start('build');
});
