
// not like python be aware

/*
Math.random() generates a floating-point number between 0 (inclusive) and 1 (exclusive),
 meaning it can be as close to 0 as possible but never exactly 1.
Multiplying the result of Math.random() by 100 changes the range from [0, 1) to [0, 100).
     This means you now have numbers starting from 0 up to but not including 100.
Using Math.floor() on this result rounds down to the nearest whole number, which gives 
you a whole number in the range of 0 to 99.
Finally, adding 1 shifts this range from [0, 99] to [1, 100], ensuring the random number
 is between 1 and 100, inclusive.
Example:

This code snippet will always print a random number between 1 and 100.
*/ 

const randomNumber = Math.floor(Math.random()*100 +1)
console.log("Random Number: ", randomNumber);


// app.js
const ordererQuantity = 4;
const pricePerTumbler = 49;
const message = "You have to pay:";
console.log(message,ordererQuantity * pricePerTumbler);


// Imagine building a dynamic blogging platform



/*

The code snippet provided demonstrates how to read the contents of a file using the fs module in Node.js,
 specifically utilizing the fs.readFile method from the fs.promises API for asynchronous operation. 
Import the fs module with promises:
const fs = require('fs').promises;
This line imports the fs module, specifically its promises-based API, which allows you to work with
 file operations in an asynchronous manner using promises.
Read the file:
fs.readFile('blog-post.txt', 'utf-8')
  .then(content => {
    console.log('Current content:', content);
  })
  .catch(err => {
    console.error('Error reading file:', err);
  });
fs.readFile('blog-post.txt', 'utf-8'): This line initiates reading the file named blog-post.txt 
with the encoding set to 'utf-8'. This means the file's content will be returned as a string.
 If the encoding is not specified, the file content would be returned as a Buffer object.
.then(content => {...}): If the file is read successfully, the promise is resolved, and the content 
of the file is passed to the .then() method. The content is then logged to the console.
.catch(err => {...}): If there's an error reading the file (e.g., the file doesn't exist), the promise 
is rejected, and the error is caught and logged by the .catch() method.
This code effectively reads the contents of a text file asynchronously and logs it to the console, 
handling any potential errors that might occur during the read operation.
*/

const fs = require('fs').promises;

fs.readFile('blog--post.txt', 'utf-8')
  .then(content => {
    console.log(content);
  })
  .catch(err => {
    console.error(err);
  });