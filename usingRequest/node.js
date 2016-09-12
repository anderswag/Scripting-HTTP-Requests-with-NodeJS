var request = require("request");


function printExampleHTML(callback) {


  request("http://www.google.com", function(err, response, body){

    if (err) {
      throw err;
    }

    console.log("Response Status Code:", response.statusCode);
    callback(body);

  });

}


function printBody(body){
  console.log(body)
}

printExampleHTML(printBody);