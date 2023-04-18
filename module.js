var fs=require('fs');
//  fs.writeFile('test.js','learn pages',function(err)
//  {
//     if(err)throw err ;{
//         console.log('fine successfully create');
         
//     }
//  });const fs = require('fs')

// directory to check if exists
// const dir = './test.js';

// // check if directory exists
// if (fs.existsSync(dir)) {
//   console.log('Directory exists!');
// } else {
//   console.log('Directory not found.');
// }
//If directory not exit then add directory

  
const path = "./new-Directory";
  
fs.access(path, (error) => {
   
  // To check if the given directory 
  // already exists or not
  if (error) {
    // If current directory does not exist
    // then create it
    fs.mkdir(path, (error) => {
      if (error) {
        console.log(error);
      } else {
        console.log("New Directory created successfully !!");
      }
    });
  } else {
    console.log("Given Directory already exists !!");
  }
});