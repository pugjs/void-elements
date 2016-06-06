var cheerio = require('cheerio');
var request = require('request-promise');

request('https://w3c.github.io/html/syntax.html')
  .then(function (str) {
    var $ = cheerio.load(str);
    var codes = $('dfn#void-elements')
                .parent()
                .next()
                .text()
                .replace(/\s/gm,'')
                .split(",")
                .reduce(function (obj, code) {
                  obj[code] = true;
                  return obj;
                }, {});

    console.log('/**');
    console.log(' * This file automatically generated from `pre-publish.js`.');
    console.log(' * Do not manually edit.');
    console.log(' */');
    console.log();
    console.log('module.exports = %s;', JSON.stringify(codes, null, 2));
  });
