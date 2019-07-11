// The package that handles the HTTP requests
var https = require("https");

// Uncomment to save the response body to a file on disk
// var fs = require("fs");

// Retrieve the Google API key from the file on disk
const googleApiKey = require("../../GoogleAPIKey")

// The options that go into the HTTP request body for the Place search
var placeSearchReqBody = {
    hostname: "maps.googleapis.com",
    path: "/maps/api/place/findplacefromtext/json" +
    "?key=" + googleApiKey +
    "&inputtype=textquery" +
    // "&fields=formatted_address,name,place_id,types,price_level,geometry/location" +
    "&input=60%20binney%20st",
    method: "GET"
};

var placeSearchRequest = https.request(placeSearchReqBody, function(placeSearchResponse) {
    // This is where all our JSON for the Place Search response body will end up
    var placeSearchResBody = "";

    console.log("Response from the server has started.");
    // console.log(`Server Status: ${placeSearchResponse.statusCode}`);

    // This needs to be here, otherwise we get back a buffer in what looks like hex
    placeSearchResponse.setEncoding("UTF-8");

    // This looks like it just prints the full response body out for.. the first API we hit?
    // res.once("data", function(chunk) {
    //     console.log(chunk);
    // });

    // This records the full response body from.. all the APIs we hit?
    placeSearchResponse.on("data", function(chunk) {
        // This is from the video I watched, not sure what its really for
        //console.log(`--chunk-- ${chunk.length}`);
        placeSearchResBody += chunk;
    });

    // Uncomment this to save the response body to a file on disk
   placeSearchResponse.on("end", function (){

        /** 
         * @TODO This is for debugging
        */
        console.log("\"Place Search Response Body\":", placeSearchResBody)

    //    console.log(placeSearchResBody[status])
    //    fs.writeFile("bonme.json", response, function(err){
    //        if (err) {
    //            throw err;
    //        }
    //        console.log("File Downloaded");
    //    });

        // The options that go into the HTTP request body for the Place details
        var placeDetailsReqBody = {
            hostname: "maps.googleapis.com",
            path: "/maps/api/place/details/json" +
            "?key=" + googleApiKey +
            "&placeid=" + JSON.parse(placeSearchResBody).candidates[0].place_id,
            method: "GET"
        };


        var placeDetailsRequest = https.request(placeDetailsReqBody, function(placeDetailsResponse) {
            // This is where all our JSON for the Place Details response body will end up
            var placeDetailsResBody = "";

            // This needs to be here, otherwise we get back a buffer in what looks like hex
            placeDetailsResponse.setEncoding("UTF-8");

            // This records the full response body from.. all the APIs we hit?
            placeDetailsResponse.on("data", function(chunk) {
                placeDetailsResBody += chunk;
            });

            // Do this at the end of the API request for Place details
            placeDetailsResponse.on("end", function (){
                console.log("\"Place Details Response Body\":", placeDetailsResBody)
            });
        });

        // End the Place details request here
        placeDetailsRequest.end();
   });
});

// Catch errors here
placeSearchRequest.on("error", function (err) {
    console.log(`Error with request: ${err.message}`);
});

// Tell Node.js to stop working with the request here
console.log("Ending API request.")
placeSearchRequest.end();
