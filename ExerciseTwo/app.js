Promise.resolve('one')
  /* Explaining promise which has a 'then()' method that takes one or two arguments that
  are callbacks for success and failure.  It is used to make cleaner and nicer code
  as opposed to using callbacks that can get complicated to understand. If the promise is fullfilled
  (successful) it runs the code in the promise block for the resolve.  Otherwise if runs the reject
  code if there is one.  This is commonly used with asynchronous code and my example shows nested 
  promises that processes in an asynchronous manner and throws the promises as strings to the next
  'then()' method. */
  .then(function(string) {
    return new Promise(function(resolve, reject) {
      setTimeout(function() {
        string += '-two';
        resolve(string);
      }, 1);
    });
  })
  .then(function(string) {
    setTimeout(function() {
      string += '-three';
      console.log(string);
    }, 1)
    return string;
  })  
  .then(function(string) {
    console.log("three");
    console.log(string);
  });