'use strict';

const jsdom = require('jsdom');
const {writeFileSync} = require('fs');

const targets = process.argv.slice(2).map(target => target.split(':'));

const prefixes = {
  cjs: 'module.exports = ',
  es: 'export default '
};

const comment = `/**
 * This file was automatically generated from \`build.js\`.
 * Do not manually edit.
 */

`;

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

  for (const [file, format = 'cjs'] of targets) {
    writeFileSync(file, `${comment}${prefixes[format]}${JSON.stringify(codes, null, 2)};\n`);
  }
  window.close();
});
