'use strict';

const jsdom = require('jsdom');

jsdom.env('https://html.spec.whatwg.org/multipage/syntax.html', (err, window) => {
  if (err) {
    throw err;
  }
  const document = window.document;
  const codes = document.querySelector('dfn#void-elements')
              .parentNode
              .nextElementSibling
              .textContent
              .replace(/\s/gm,'')
              .split(",")
              .reduce((obj, code) => {
                obj[code] = true;
                return obj;
              }, {});

  console.log('/**');
  console.log(' * This file automatically generated from `pre-publish.js`.');
  console.log(' * Do not manually edit.');
  console.log(' */');
  console.log();
  console.log('module.exports = %s;', JSON.stringify(codes, null, 2));
  window.close();
});
