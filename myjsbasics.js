/*1;
3;
1+3;
food=12;
food*12; 
*/

var foo = 10;

if (foo=13){
    console.log('hello');
}
else {
    console.log('goodbye');
}
/*
var lion = {
    name: 'simba',
    age: 3
  };
  
  // name and age are properties of the lion object.
  
  // dot notation.
  lion.age;
  
  // bracket notation.
  // This is useful if you're accessing a property through a variable
  var prop = 'name';

  lion[prop];
*/


var things = ['laptop', 'tvset','computer'];
things.length;
things.push('desktop');
things.push('monitor');

/*adds desktop and monitor to our variable things. */

// for loops.
// Three statements on one line.

for (var i = 0; i < 10; i++) {
    console.log('jambo', i);
  }
  
  // while loops.
  // Execute while a condition is true.
  // Like a for loop, except the statements are on individual lines

  var j = 0;
  
  while (j < 10) {
    console.log('hakuna matata', j);
  
    j++;
  }
  
  var a = 15;
  
  // do while loops

  // Like a while loop, except the body executes at least once

  do {
    console.log('a is', a);
    a++;
  } while (a < 10);
