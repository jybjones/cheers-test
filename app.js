#!/usr/bin/env node
var fs = require('fs');

if(process.argv.length > 2) {
  for (var i = 2; i < process.argv.length; i++) {
    // var letter = letter.toUpperCase().split('');
    process.argv[i].split('').forEach(function(letter) {
      // console.log(letter, 'letter');
      switch(letter.toUpperCase()) {
        case 'A':
        case 'E':
        case 'F':
        case 'H':
        case 'I':
        case 'L':
        case 'M':
        case 'N':
        case 'O':
        case 'R':
        case 'S':
        case 'X':
          var article = 'an ';
          break;
        default:
          var article = 'a ';
      }

      console.log('Give me ' + article + letter.toUpperCase() + '!');
    });
  }
}  else {
      var msg = fs.readFileSync('lib/help.txt', { encoding: 'utf8'});
      console.log(msg);
}



