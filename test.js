var should = require('chai').should();
// var path = require('path');
// var Cheer = require(path.join(process.cwd() + '/app.js'));
var cp = require('child_process');


describe('Mocha + Chai', function() {
    it('truthyness', function () {
      true.should.be.true;
      false.should.be.false;
    });
  });

describe('CLI', function(){
  it("should start my cheer", function(done){
    cp.execFile('./app.js', ["Jennifer"], function(err, stdout) {
      console.log('err', err);
      console.log('stdout', stdout);
      stdout.should.equal('\nGive me a J!\nGive me an E!\nGive me an N!\nGive me an N!\nGive me an I!\nGive me an F!\nGive me an E!\nGive me an R!\n');
      done();
    });
  });

});
