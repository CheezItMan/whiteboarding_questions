var flatten = function(arr) {
  var flattenedArray = [];
  if (! (arr instanceof Array))
    return [];

  for(var i = 0; i < arr.length; i++) {
      // base-case for recursion
    if (arr[i] instanceof Array) {
      flattenedArray = flattenedArray.concat(flatten(arr[i]));
    }
    else {
      if (arr[i])  // if it's not null
        flattenedArray.push(arr[i]);
    }
  };
  return flattenedArray;

};




module.exports = flatten;
