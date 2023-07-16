const request = require('request');
const fs = require("fs");
const input = process.argv.slice(2);


request(input[0], (error, response, body) => {
  if (error) {
    console.log(`ERRORRR!!!! :${error}`);
  } else {
    fs.writeFile(input[1], body, (error) => {
      if (error) {
        console.log("There is a Error!");
      } else {
        console.log(`Downloaded and saved ${response.headers["content-length"]} bytes to ${input[1]}`);
      }
    });
  }
  
});