var fs = require('fs');
var _ = require('underscore');
var S = require('string');

var rawData = JSON.parse(fs.readFileSync('data.json')).concat(JSON.parse(fs.readFileSync('data2.json')));
var courseNames = _.pluck(rawData, 'long_title');

var terms = []; // e.g. "Culture", "Capitalism"
var contexts = []; // e.g. "20th Century Literature"

_.each(courseNames, function (courseName) {
  var nameAndContext = courseName.split(/ in /);
  var nameParts = nameAndContext[0].split(/,|&| and /);

  if (nameAndContext[1]) {
    contexts.push(S(nameAndContext[1]).trim().s);
  }

  if (courseName.indexOf('and') < 0) { // We only want and-able terms
    return;
  }

  _.each(nameParts, function (namePart) {
    var trimmedNamePart = S(namePart).trim().s;

    // Remove (most) adjectives
    if (trimmedNamePart.match(/(al|an)$/)) return;

    // Remove numerical terms
    if (!trimmedNamePart.match(/[a-z]/i)) return;

    if (trimmedNamePart && trimmedNamePart.indexOf(' ') < 0) { // One-word term
      terms.push(trimmedNamePart);
    }
  });
});

terms = _.uniq(terms);
contexts = _.uniq(contexts);

console.log(contexts);