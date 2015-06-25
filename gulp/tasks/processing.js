var gulp     = require("gulp"),
    util     = require("gulp-util"),
    uglify   = require("gulp-uglify"),
    imageMin = require("gulp-imagemin"),
    pngquant = require('imagemin-pngquant'),
    less     = require("gulp-less"),
    jade     = require("gulp-jade");

//Processing JavaScript files
gulp.task('processJs', function(){

  return gulp.src('src/js/**/*.js')
    .pipe(uglify())
    .pipe(gulp.dest("build/js"));
});
//Processing Images
gulp.task('processImg', function(){

  return gulp.src('src/images/**/*.*')
    .pipe(imageMin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
    .pipe(gulp.dest("build/images"));
});
//Processing Css files
gulp.task('processCss', function(){

  return gulp.src('src/css/**/*.css')
    .pipe(less())
    .pipe(gulp.dest("build/css"));
});
//Processing Jade files
gulp.task('processJade', function(){

  return gulp.src('src/jade/**/*.jade')
    .pipe(jade())
    .pipe(gulp.dest("build"));
});
gulp.task("processing", ["processJs", "processImg", "processCss","processJade"]);