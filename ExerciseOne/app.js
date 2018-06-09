var fs = require('fs');
//^^this assigns the fs (file system) module in node to a variable

fs.readFile('/foo.txt', function(err, data) {
    /*Error Handling and error first callback used here.  The file is not
    available and should throw an error when ran in the console.  The concept
    of error first callback is to take in 2 arguments and if the function
    throws an error, the programmer is able to handle the error, and if not,
    the code would proceed successfully.  In this case, the file does not
    exist so it will throw and error when looking for the file in the directory.
    */
    if(err) {
        console.log('Unknown Error');
        return;
      }
      /*I have handled the error to return the string "Unknown Error" onto
      the console when trying to read the non-existent file.  This is a
      simple example of an error first callback*/
    console.log(data);
  });