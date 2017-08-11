// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  // your code here

  var elementList = []; // Contains element node with className of document.body

  var findClassName = function(element) {
    if (element.classList && element.classList.contains(className)) {
        // saves an element node that contains the className;
        elementList.push(element);
    }
    for (var i = 0; i < element.childNodes.length; i++) {
      // exhaustive search of all element childNodes looking for className;
      findClassName(element.childNodes[i]);
    }
  }

  findClassName(document.body);
  // console.log(elementList);
  return elementList;
};
