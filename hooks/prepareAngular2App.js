const fs = require('fs');
const exec = require('child_process').exec;

module.exports = function(context) {
  console.log('--> Removing *.gz files from www directory.');
  const basePath = context.opts.projectRoot;
  const baseWWW = basePath + '/www';

  var files = fs.readdirSync(baseWWW);
  for (var i = 0; i < files.length; i++) {
    if (files[i].endsWith('.gz')) {
      fs.unlinkSync(baseWWW + '/' + files[i]);
    }
  }
};
