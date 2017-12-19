/*
 * You'll eventually be given instructions how to use this file
 * If you want to use it before then, you'll have to figure it out yourself
 */

// You don't actually want to fill *this* value in on line 9, but you'll see
// other places in this file where you'll replace the FILL_ME_IN with a
// different value.
var FILL_ME_IN = 'Fill this value in';

/* 
describe('Introduction to Mocha Tests - READ ME FIRST', function() {
  // A Mocha test is just a function!
  // If the function throws an error when run, it fails.
  // If it doesn't throw an error when run, it doesn't fail. 
  // To read more about mocha, visit mochajs.org

  // Once you've read and understood this section, please comment it out. 
  // You will not be able to proceed with a failing test. 

  it('Throws an error so it fails', function() {
    throw new Error('Delete me!');
  });

  it('Doesn\'t throw an error, so it doesn\'t fail', function() {
    // This test doesn't really test anything at all! It will pass no matter what.
    var even = function(num){
      return num/2 === 0;
    }
    return even(10) === true;
  });

  // In tests, we want to compare the expected behavior to the actual behavior.
  // A test should only fail if the expected behavior doesn't match the actual.
  it('Throws an error when expected behavior does not match actual behavior', function() {
    var even = function(num){
      return num/2 === 0;
    }

    if(even(10) !== true) {
      throw new Error('10 should be even!');
    }
  });
});
*/

describe('Diner\'s Club', function () {
  // Be careful, tests can have bugs too...

  it('has a prefix of 38 and a length of 14', function () {
    if (detectNetwork('38345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
  });

  it('has a prefix of 39 and a length of 14', function () {
    if (detectNetwork('39345678901234') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }

  });
});

describe('American Express', function () {
  // It can get annoying to keep typing the if/throw, so here is a
  // helper function to throw an error if the input statement isn't true. 
  var assert = chai.assert;

  it('has a prefix of 34 and a length of 15', function () {
    assert(detectNetwork('343456789012345') === 'American Express');
  });

  it('has a prefix of 37 and a length of 15', function () {
    assert(detectNetwork('373456789012345') === 'American Express');
  });
});

describe('Visa', function () {
  // Chai is an entire library of helper functions for tests!
  // Chai provides an assert that acts the same as our previous assert.
  // Search the documentation to figure out how to access it. 
  //   http://chaijs.com/
  var assert = chai.assert;


  it('has a prefix of 4 and a length of 13', function () {
    assert(detectNetwork('4123456789012') === 'Visa');
  });

  it('has a prefix of 4 and a length of 16', function () {
    assert(detectNetwork('4123456789012345') === 'Visa');
  });

  it('has a prefix of 4 and a length of 19', function () {
    assert(detectNetwork('4123456789012345678') === 'Visa');
  });
});

describe('MasterCard', function () {
  // Chai lets you write more human-readable tests that throw helpful errors.
  // Expect syntax is one way to do this, but there are others. 
  // If you want to know more, check out the documentation. 
  //   http://chaijs.com/api/bdd/

  // You can also use should instead of expect, which changes the style
  // slightly. It really doesn't matter which one you use - check out 
  // http://chaijs.com/guide/styles/ for more info, but it's important
  // to be consistent (unlike in this file, where we use BOTH expect
  // and should, but that's just for learning), so once you've gotten 
  // these tests to pass using should syntax, refactor your tests to 
  // use either expect or should, but not both. 
  var should = chai.should();

  for (var prefix = 51; prefix <= 55; prefix++) {
    (function (prefix) {
      it('has a prefix of ' + prefix + ' and a length of 16', function () {
        detectNetwork(prefix + '13456789012345').should.equal('MasterCard');
      });
    })(prefix)
  }

});

describe('Discover', function () {
  // Tests without a function will be marked as "pending" and not run
  // Implement these tests (and others) and make them pass!
  var should = chai.should();

  var generateStringOfNumbers = function (length) {
    return (Math.random().toString(9).substring(2, 2 + length)).toString();
  }

  var createArray = function (start, end) {
    var arr = [];
    for (var i = start; i < end; i++) {
      arr.push(i);
    }
    return arr;
  }

  var prefixArray = [];
  prefixArray = prefixArray.concat(createArray(644, 650));
  prefixArray = prefixArray.concat(6011);
  prefixArray = prefixArray.concat(65);

  var lengthArray = [16, 19];
  for (var prefix = 0; prefix < prefixArray.length; prefix++) {
    for (var length = 0; length < lengthArray.length; length++) {
      (function (prefix, length) {
        it('has a prefix of ' + prefixArray[prefix] + ' and a length of ' + lengthArray[length], function () {
          detectNetwork(prefixArray[prefix] + generateStringOfNumbers(lengthArray[length] - (prefixArray[prefix]).toString().length)).should.equal('Discover');
        });
      })(prefix, length)
    }
  }

});

describe('Maestro', function () {
  // Write full test coverage for the Maestro card
  var should = chai.should();

  var generateStringOfNumbers = function (length) {
    return (Math.random().toString(9).substring(2, 2 + length)).toString();
  }

  var createArray = function (start, end) {
    var arr = [];
    for (var i = start; i < end; i++) {
      arr.push(i);
    }
    return arr;
  }

  var prefixArray = [5018, 5020, 5038, 6304];
  var lengthArray = createArray(12, 20);
  for (var prefix = 0; prefix < prefixArray.length; prefix++) {
    for (var length = 0; length < lengthArray.length; length++) {
      (function (prefix, length) {
        it('has a prefix of ' + prefixArray[prefix] + ' and a length of ' + lengthArray[length], function () {
          detectNetwork(prefixArray[prefix] + generateStringOfNumbers(lengthArray[length] - (prefixArray[prefix]).toString().length)).should.equal('Maestro');
        });
      })(prefix, length)
    }
  }
});

describe('China UnionPay', function () {
  var should = chai.should();

  var generateStringOfNumbers = function (length) {
    return (Math.random().toString(9).substring(2, 2 + length)).toString();
  }

  var createArray = function (start, end) {
    var arr = [];
    for (var i = start; i <= end; i++) {
      arr.push(i);
    }
    return arr;
  }

  var prefixArray = [];
  prefixArray = prefixArray.concat(createArray(622126, 622925));
  prefixArray = prefixArray.concat(createArray(624, 626));
  prefixArray = prefixArray.concat(createArray(6282, 6288));

  var lengthArray = createArray(16, 19);
  var length = 0;
  var prefix = 0;
  for (prefix = 0; prefix < prefixArray.length; prefix++) {
    for (length = 0; length < lengthArray.length; length++) {
      (function (prefix, length) {
        it('has a prefix of ' + prefixArray[prefix] + ' and a length of ' + lengthArray[length], function () {
          detectNetwork(prefixArray[prefix] + generateStringOfNumbers(lengthArray[length] - (prefixArray[prefix]).toString().length)).should.equal('China UnionPay');
        });
      })(prefix, length)
    }
  }

});

describe('Switch', function () {
  var should = chai.should();

  var generateStringOfNumbers = function (length) {
    return (Math.random().toString(9).substring(2, 2 + length)).toString();
  }

  var createArray = function (start, end) {
    var arr = [];
    for (var i = start; i < end; i++) {
      arr.push(i);
    }
    return arr;
  }

  var prefixArray = [4903, 4905, 4911, 4936, 564182, 633110, 6333, 6759];
  var lengthArray = [16, 18, 19];
  for (var prefix = 0; prefix < prefixArray.length; prefix++) {
    for (var length = 0; length < lengthArray.length; length++) {
      (function (prefix, length) {
        it('has a prefix of ' + prefixArray[prefix] + ' and a length of ' + lengthArray[length], function () {
          detectNetwork(prefixArray[prefix] + generateStringOfNumbers(lengthArray[length] - (prefixArray[prefix]).toString().length)).should.equal('Switch');
        });
      })(prefix, length)
    }
  }

});