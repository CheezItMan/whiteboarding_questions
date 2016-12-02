var DanAndKari = function(str) {
  this.str = str.toLowerCase();
};

DanAndKari.prototype.equalDanAndKari = function() {
  return this.countOccurances("dan") == this.countOccurances("kari");
};

DanAndKari.prototype.countOccurances = function(findString) {
  findString = findString.toLowerCase();
  var indexOf = this.str.indexOf(findString);
  var myString = this.str;
  var count = 0;
  while (indexOf >= 0) {
    count++;
    myString = myString.substring(indexOf+1);
    indexOf = myString.indexOf(findString);
  }
  return count;
};

/*********************************************************/
/*  What questions would you ask the interviewer?        */
/*                                                       */
/*  I would ask, does capitalization matter?             */
/*  What library functions can I use (indexOf?)          */
/*********************************************************/


module.exports = DanAndKari;
