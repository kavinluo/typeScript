
var a = 10

function f() {
  var message = 'Hello, world!'
  return message
}


function fs(){
  var a = 10;
  return function g() {
    var b = a + 2;
    return b
  }
}
var g = fs()
g()