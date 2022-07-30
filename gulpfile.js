const { src, dest, parallel } = require('gulp');
const rename = require('gulp-rename');
const minifyJs = require('gulp-uglify');
const minifyCss = require('gulp-uglifycss');
const sass = require('gulp-sass')(require('sass'));
const babel = require('gulp-babel');

function htmlFiles(){
    return src('src/templates/*.html')
        .pipe(dest('dist/'));
}

function javaScriptFiles() {
    return src('src/scripts/*.js')
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(minifyJs())
        .pipe(rename({extname: '.min.js'}))
        .pipe(dest('dist/assets/js/'));
}

function cssFiles(){
    return src('src/styles/main.scss')
        .pipe(sass({
            outputStyle: 'compressed'
        }))
        .pipe(rename({extname: '.min.css'}))
        .pipe(dest('dist/assets/css/'));
}

exports.default = parallel(htmlFiles, javaScriptFiles, cssFiles);