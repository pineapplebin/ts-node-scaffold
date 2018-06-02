const fs = require('fs');
const path = require('path');

function open(filename) {
  const file = fs.readFileSync(path.resolve(path.dirname(__dirname), filename));
  const file_content = file.toString().split('\n').map(s => s.trim()).join('');
  return file_content;
}

function match(content) {
  const result = content.match(/<template>(.*)<\/template>/);
  if (result) {
    return result[1];
  } else
    throw Error('unmatch');
}

function genJsFile(matched, name) {
  const template = `
  var Reuse = {
    render: function render(dom_id) {
      var root = document.getElementById(dom_id);
      if (!root)
        throw Error('node not found');

      root.innerHTML = '${matched}';
    }
  }`
  fs.writeFileSync(path.resolve(path.dirname(__dirname), 'dist', `${name}.js`), template);
}

function main() {
  const file = open('test.html');
  const content = match(file);
  genJsFile(content, 'test');
}
main();
