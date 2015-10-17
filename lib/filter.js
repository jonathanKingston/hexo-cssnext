var cssnext = require('cssnext');
var assign = require('object-assign');
var minimatch = require('minimatch');
var postcss = require('postcss');

module.exports = function(str, data) {
  var options = this.config.cssnext;
  var path = data.path;
  var exclude = options.exclude;
  if (exclude && !Array.isArray(exclude)) {
    exclude = [exclude];
  }

  if (path && exclude && exclude.length){
    for (var i = 0, len = exclude.length; i < len; i++){
      if (minimatch(path, exclude[i])) {
        return str;
      }
    }
  }

  var result = postcss().use(cssnext(options)).process(str, {from: data.path});

  return result.css;
};
