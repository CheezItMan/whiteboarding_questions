var Palindrome = require('./palindrome');

describe('Generates a Palindrome', function () {
  it('Generates a palindrome for aacecaaa', function () {
    var pal = new Palindrome("aacecaaa");
    expect(pal.generatePalindrome("aacecaaa")).toEqual("aaacecaaa");
  });
  it('Generates a palindrome for racecar', function () {
    var pal = new Palindrome("racecar");
    expect(pal.generatePalindrome("racecar")).toEqual("racecar");
  });
  it('Generates a palindrome for ""', function () {
    var pal = new Palindrome("");
    expect(pal.generatePalindrome("")).toEqual("");
  });
  it('Generates a palindrome for "ba"', function () {
    var pal = new Palindrome("ba");
    expect(pal.generatePalindrome("ba")).toEqual("aba");
  });
  it('Generates a palindrome for "alayalam"', function () {
    var pal = new Palindrome("alayalam");
    expect(pal.generatePalindrome("alayalam")).toEqual("malayalam");
  });
});
