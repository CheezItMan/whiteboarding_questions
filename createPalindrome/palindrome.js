var Palindrome = function(word) {
  this.word = word;
};

Palindrome.prototype.getShortestPalindrome = function() {
  return this.generatePalindrome(this.word);
};

/*******************************************/
/* This solution is a O(n^2) solution      */
/* There is an O(n) solution that involves */
/* Using 'rolling hashes'                  */
/*******************************************/

Palindrome.prototype.generatePalindrome = function(s) {
    // set i to index of last letter in the string
  if (s.length <= 1)
    return s;

  if (this.isPalindrome(s)) {
    return s;
  }

  var reversed = this.reverseString(s).join('');

  for (var i = 0; i < s.length; i++) {
//    var joined = s.slice(0, i+1).reverse() + s;
    var joined = reversed.slice(0, i+1) + s;
    if (this.isPalindrome(joined))
      return joined;
  }
};

Palindrome.prototype.reverseString = function(s) {
  var toArray = s.split('');
  toArray = toArray.reverse();
  return toArray;
}

Palindrome.prototype.isPalindrome = function(s) {

  for (var i = 0; i < s.length / 2; i++) {
    if (s.charAt(i) != s.charAt(s.length - i - 1))
      return false;
  }
  return true;
}



module.exports = Palindrome;
