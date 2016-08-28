var API = function (){};
module.exports = API;

API.find = function(data,callback) {
	// create http request client to consume the QPX API
    var request = require("request");
    // JSON to be passed to the QPX Express API
    var requestData = {
        "QueryType":"GetPost",
        tag:data.tag,
        page:data.page
    }
    // QPX REST API URL (I censored my api key)
    url = "http://localhost/api.php"
    // fire request
    request({
      url: url,
      method: "POST",
      json: true,
      headers: {
        "content-type": "application/json",
      },
      body: requestData
    }, function (error, response, body) {
      if (!error && response.statusCode === 200) {
        //console.log(body)
        //res.send(body);
    	  callback(null, body);
      }
      else {
        console.log("error: " + error)
        console.log("response.statusCode: " + response.statusCode)
        console.log("response.statusText: " + response.statusText)
      }
    })
}
API.get = function(value,callback) {
	// create http request client to consume the QPX API
    var request = require("request");
    // JSON to be passed to the QPX Express API
    var requestData = {
        "QueryType":"GetPostDetail",
        'id':value
    }
    // QPX REST API URL (I censored my api key)
    url = "http://localhost/api.php"
    // fire request
    request({
      url: url,
      method: "POST",
      json: true,
      headers: {
        "content-type": "application/json",
      },
      body: requestData
    }, function (error, response, body) {
      if (!error && response.statusCode === 200) {
        //console.log(body)
        //res.send(body);
    	  callback(null, body);
      }
      else {
        console.log("error: " + error)
        console.log("response.statusCode: " + response.statusCode)
        console.log("response.statusText: " + response.statusText)
      }
    })
}