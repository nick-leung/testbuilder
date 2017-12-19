// Given a credit card number, this function should return a string with the 
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy! 
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function (cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long

  // Once you've read this, go ahead and try to implement this function, then return to the console.
  var prefix = cardNumber;
  var len = cardNumber.length;

  if ((prefix.startsWith('38') || prefix.startsWith('39')) && len === 14) {
    return "Diner's Club";
  } else if ((prefix.startsWith('34') || prefix.startsWith('37')) && len === 15) {
    return "American Express";
  } else if ((prefix.startsWith('4903') || prefix.startsWith('4905') || prefix.startsWith('4911') || prefix.startsWith('4936') || prefix.startsWith('564182') || prefix.startsWith('633110') || prefix.startsWith('6333') || prefix.startsWith('6759')) && (len === 16 || len === 18 || len === 19)) {
    return "Switch";
  } else if (prefix.startsWith('4') && (len === 13 || len === 16 || len === 19)) {
    return "Visa";
  } else if (prefixStartsWithRange(prefix, '51','55') && len === 16) {
    return "MasterCard";
  } else if ((prefix.startsWith('6011') || prefixStartsWithRange(prefix, '644', '649') || prefix.startsWith('65')) && (len === 16 || len === 19)) {
    return "Discover";
  } else if ((prefix.startsWith('5018') || prefix.startsWith('5020') || prefix.startsWith('5038') || prefix.startsWith('6304')) && (len >= 12 && len <= 19)) {
    return "Maestro";
  } else if ((prefixStartsWithRange(prefix, '622126','622925') || prefixStartsWithRange(prefix, '624','626') || prefixStartsWithRange(prefix, '6282','6288')) && (len >= 16 && len <= 19)) {
    return "China UnionPay";
  }
};

var prefixStartsWithRange = function (prefix, start, end) {
  var len = start.length;
  var check = parseInt(prefix.slice(0, len));
  start = parseInt(start);
  end = parseInt(end);

  return (check >= start && check <= end);
}