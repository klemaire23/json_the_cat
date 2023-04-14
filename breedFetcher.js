const request = require('request');

const args = process.argv.slice(2);
let breedName = args[0];


const fetchBreedDescription = function(breedName, callback) {
  const URL = "https://api.thecatapi.com/v1/breeds/search?q=" + breedName;
  request(URL, (error, response, body) => {

    if (error) {
      callback(error, null);
      return;
    }
    // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    // console.log('body:', body);
console.log("URL:", URL);
    const data = JSON.parse(body);
    if (data.length === 0) {
      callback("Breed could not be found", null);
      return;
    }
    callback(null, data[0].description);

  });
};


module.exports = {
  fetchBreedDescription
};










