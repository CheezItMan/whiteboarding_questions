var DanAndKari = require('./danandkari');

describe('Generates a Palindrome', function () {
  it('Checking for 1st example', function () {
    var dak = new DanAndKari("Dan ate kari’s lunch");
    expect(dak.equalDanAndKari()).toEqual(true);
  });
  it('Checking for 2nd example', function () {
    var dak = new DanAndKari("Dan really like’s Kari’s dog, but Jamie adores Kari’s Dog");
    expect(dak.equalDanAndKari()).toEqual(false);
  });
  it('Checking for 3rd example', function () {
    var dak = new DanAndKari("Danforth Theodore Wilford the Third");
    expect(dak.equalDanAndKari()).toEqual(false);
  });
  it('Checking for for an example without dan or kari', function () {
    var dak = new DanAndKari("Chris likes Jamie's cats");
    expect(dak.equalDanAndKari()).toEqual(true);
  });
});
