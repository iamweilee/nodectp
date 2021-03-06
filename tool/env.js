const path = require('path');
const { getRoot } = require('bindings');

if (process.platform === 'win32') {
  let root = getRoot(__filename);
  let arch = process.arch === 'x64' ? '64' : '';
  let envpath = path.join(root, `api/tradeapi_windows${arch}`);
  console.log(envpath)
  if (process.env.PATH.indexOf(envpath) === -1) {
    process.env.PATH += `;${envpath}`;
  }
}
