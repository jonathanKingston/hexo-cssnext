var assign = require('object-assign');

hexo.config.cssnext = assign({
  exclude: ['*.min.css']
}, hexo.config.cssnext);

hexo.extend.filter.register('after_render:css', require('./lib/filter'));
