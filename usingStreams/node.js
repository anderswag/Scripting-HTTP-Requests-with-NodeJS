var http = require("http");

var requestOptions = {
  host: "google.ca",
  path: "/"
};

function printExampleHTML(callback){

  http.get(requestOptions, (response) => {    // HTTP Response Callback

  response.setEncoding("utf8");             // Use UTF-8 encoding

  response.on("data", callback);

  });

}

function callback(data){
  console.log(data)
}

printExampleHTML(callback);