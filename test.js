const pify = require('.');
const fs = require('fs');

test('main', async () => {
  await pify(fs.readFile)('package.json', 'utf8').then(data => {
    console.log(data);
  });
});
