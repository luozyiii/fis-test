// 加 md5
fis.match('*.{js,css,png,jpg,es6}', {
  useHash: true
});

// fis.match('*', {
//   useHash: false
// });

// 启用 fis-spriter-csssprites 插件
fis.match('::packager', {
  spriter: fis.plugin('csssprites')
});

fis.match('*.js', {
  optimizer: fis.plugin('uglify-js')
});

fis.match('*.css', {
  useSprite: true,
  optimizer: fis.plugin('clean-css')
});

fis.match('*.png', {
  // fis-optimizer-png-compressor 插件进行压缩，已内置
  optimizer: fis.plugin('png-compressor', {
    type: 'pngquant'
  })
});

// fis.match('*.html', {  
//   optimizer: fis.plugin('html-minifier')  
// });

// 压缩 .html 内联的 js
fis.match('*.htm*:js', {
  optimizer: fis.plugin('uglify-js')
});

// 压缩 .html 内联的 css
fis.match('*.htm*:css', {
  optimizer: fis.plugin('clean-css')
});

// 启用插件
fis.hook('relative'); 
// 让所有文件，都使用相对路径。 
fis.match('**', { relative: true })

// es6 转es5
fis.match('*.es6', {
  parser: fis.plugin('translate-es6', {
    presets: ['es2015']
  }),
  rExt: '.js' // .es6 最终修改其后缀为 .js
})