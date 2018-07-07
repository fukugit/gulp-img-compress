var gulp = require('gulp');

var imagemin = require("gulp-imagemin");
var mozjpeg  = require('imagemin-mozjpeg');
var del = require('del');

// To resize image files.
var imageResize = require('gulp-image-resize');
gulp.task('resize', function () {
  gulp.src('img-original/*.{png,jpg,gif}')
    .pipe(imageResize({
      // for camera
      width : 1500,
      height : 997,
      // for phone
      //width : 1500,
      //height : 1125,
      crop : true,
      upscale : false
    }))
    .pipe(gulp.dest('img-resize'));
});

// To compress image files.
gulp.task("compress", function() {
    gulp.src("img-resize/*.{png,jpg,gif}")
    .pipe(imagemin([
       mozjpeg({
         quality:85,
         progressive: true
       }),
       imagemin.svgo(),
       imagemin.optipng(),
       imagemin.gifsicle()
     ]
    ))
    .pipe(gulp.dest("img-compressed"));
  });

// To remove All
gulp.task('clean', ['clean:original', 'clean:compress', 'clean:resize']);

// To remove original image files.
gulp.task('clean:original', function (cb) {
  del([
    'img-original/*.{png,jpg,gif}',
    '!img-original/README.md'
  ], cb);
});

// To remove original image files.
gulp.task('clean:compress', function (cb) {
  del([
    'img-compressed/*.{png,jpg,gif}',
    '!img-compressed/README.md'
  ], cb);
});

// To remove original image files.
gulp.task('clean:resize', function (cb) {
  del([
    'img-resize/*.{png,jpg,gif}',
    '!img-resize/README.md'
  ], cb);
});
