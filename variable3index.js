function sayHello() {
  var greeting = "hola";
  greeting = "hello";
  return greeting;
}
 
sayHello()
// Returns "hello",
// This demonstrates that the variable greeting is now pointing to the string "hello" instead of "hola"
 
greeting
// ReferenceError: greeting is not defined
// This demonstrates that the variable greeting is still local instead of global