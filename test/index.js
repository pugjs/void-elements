const assert = require('assert');
const voidElements = require('../');
assert(!voidElements['span'], '<span> is not a void element');
assert( voidElements['img'] , '<img> is a void element');

const latestVoidElements = require('./latest');
assert.deepEqual(
  voidElements,
  latestVoidElements,
  'The list of void elements has changed, run "npm run update" to update this list.'
);

console.log('tests passed');
