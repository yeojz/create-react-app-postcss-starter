let fs = require('fs');
let path = require('path');

function postcssModules(){
  return {
    getJSON: function(cssfile, json) {
      const dirpath = path.dirname(cssfile);
      const filename = path.basename(cssfile, '.css');
      fs.writeFileSync(
        path.join(dirpath, filename) + '.json',
        JSON.stringify(json)
      );
    }
  };
}

module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-cssnext'),
    require('postcss-modules')(postcssModules())
  ]
}
