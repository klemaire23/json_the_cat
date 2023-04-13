const request = require('request');

const args = process.argv.slice(2);
let breed = args[0];
const URL = "https://api.rhecatapi.com/v1/breeds/search?q=" + breed;


const getCatInfo = () => {
  request(URL, (error, response, body) => {
    if (error) {
      console.log(`Request failed. Please see error details ${error}`);
      return;
    }

    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    console.log('body:', body);

    const data = JSON.parse(body);
    console.log("DATA:", data);
    if (data.length === 0) {
      return console.log("Breed could not be found");
    }
    console.log("FIRST ENTRY:", data[0].description);


  });
};

getCatInfo();










