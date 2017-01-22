void-elements
==============

### Object of "void elements" defined by the HTML Standard

Exports an `Object` of "void element" node names as defined by the HTML spec.

The list is programatically generated from the [latest WHATWG HTML Standard](https://html.spec.whatwg.org/multipage/syntax.html#void-elements).

[![Build Status](https://img.shields.io/travis/pugjs/void-elements/master.svg?style=flat)](https://travis-ci.org/pugjs/void-elements)
[![Developing Dependency Status](https://img.shields.io/david/dev/pugjs/void-elements.svg?style=flat)](https://david-dm.org/pugjs/void-elements#info=devDependencies)
[![npm version](https://img.shields.io/npm/v/void-elements.svg?style=flat)](https://www.npmjs.org/package/void-elements)

Usage
-----

```js
const voidElements = require('void-elements');

assert(!voidElements['span'], '<span> is not a void element');
assert(voidElements['img'], '<img> is a void element');
```

License
-------

MIT
