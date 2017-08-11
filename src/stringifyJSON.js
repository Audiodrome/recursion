// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here

  // // Primitives ***************************************************************
  // if (typeof obj === 'boolean' || typeof obj === 'number' || obj === null) {
  //   return '' + obj;
  // } else if (typeof obj === 'string') {
  //   return '"' + obj + '"';
  //
  // // Arrays [] ****************************************************************
  // } else if (Array.isArray(obj)) {
  //   var storage = [];
  //   if (obj[0] === undefined) {
  //     return '[]';
  //   } else {
  //     for (var i = 0; i < obj.length; i++) {
  //       storage.push(stringifyJSON(obj[i]));
  //     }
  //     //console.log(storage);
  //     return '[' + storage + ']';
  //   }
  // }
  // Object Literals {} *******************************************************

  if (obj === null) { return 'null'; }

  if (obj.constructor === String) { return '"' + obj + '"'; }

  if (obj.constructor === Array) {
    if (obj.length > 0) {
      var storage = [];
      for (var i = 0; i < obj.length; i++) {
        storage.push(stringifyJSON(obj[i]));
      }
      return '[' + storage + ']';
    } else {
      return '[]';
    }
  }

  if (obj.constructor === Object) {
    // Get all the keys
    var keys = Object.keys(obj);

    if (keys.length > 0) {
      var storage = '';

      for (var i = 0; i < keys.length; i++) {
        var key = keys[i];
        // Conditional: Key exists and is neither a function nor points to one.
        if (key && obj[key] !== undefined && typeof key !== 'function' && typeof obj[key] !== 'function') {
          // Conditional: Is this the last key?
          if (i === keys.length - 1) {
            storage += stringifyJSON(key) + ':' + stringifyJSON(obj[key]);
          } else {
            storage += stringifyJSON(key) + ':' + stringifyJSON(obj[key]) + ',';
          }
        }
      }
      return '{' + storage + '}';
    } else {
      return '{}';
    }
  }

  return obj.toString();
};
