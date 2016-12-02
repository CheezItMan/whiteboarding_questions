var Flatten = require('./flatten');

describe('Flattens an Array', function () {
  it('Flattens a 1-level nested Array', function () {
    expect(Flatten([1, 2, 3, [4, 5], 6])).toEqual([1, 2, 3, 4, 5, 6]);
  });
  it('Flattens a 2-level nested Array', function () {
    expect(Flatten([1, 2, [3, [4, 5], 6]])).toEqual([1, 2, 3, 4, 5, 6]);
  });
  it('Flattens a non-nested Array', function () {
    expect(Flatten([1, 2, 3, 4, 5, 6])).toEqual([1, 2, 3, 4, 5, 6]);
  });
  it('Flattens and skips null elements', function () {
    expect(Flatten([1, 2, 3, null, 4, null, 5, 6])).toEqual([1, 2, 3, 4, 5, 6]);
  });
  it('Flattens and skips null elements with nested arrays', function () {
    expect(Flatten([1, 2, [3, null, [4], null], 5, 6])).toEqual([1, 2, 3, 4, 5, 6]);
  });
  it('Flattens and skips null elements with nested arrays with null first', function () {
    expect(Flatten([null, 1, 2, [3, null, [4], null], 5, 6])).toEqual([1, 2, 3, 4, 5, 6]);
  });
  it('Flattens an Array with only nulls', function () {
    expect(Flatten([null, null, null])).toEqual([]);
  });
});
