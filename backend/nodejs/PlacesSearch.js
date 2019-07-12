// The package that handles the HTTP requests
var https = require("https");

// Uncomment to save the response body to a file on disk
var fs = require("fs");

// Retrieve the Google API key from the file on disk
const googleApiKey = require("../../GoogleAPIKey")

// The options that go into the HTTP request body for the Place search
var placeSearchReqBody = {
    hostname: "maps.googleapis.com",
    path: "/maps/api/place/findplacefromtext/json" +
    "?key=" + googleApiKey +
    "&inputtype=textquery" +
    "&fields=place_id,geometry/location" +
    /** @TODO Set location bias to the device's current location */
    "&locationbias=circle:2000@42.365703,-71.08057100000001" +
    "&input=bon%20me",
    method: "GET"
};

var placeSearchRequest = https.request(placeSearchReqBody, function(placeSearchResponse) {
    // This is where all our JSON for the Place Search response body will end up
    var placeSearchResBody = "";

    console.log("Response from the server has started.");

    // This needs to be here, otherwise we get back a buffer in what looks like hex
    placeSearchResponse.setEncoding("UTF-8");

    // This records the full response body from.. all the APIs we hit?
    placeSearchResponse.on("data", function(chunk) {
        placeSearchResBody += chunk;
    });

   placeSearchResponse.on("end", function (){

        /**
         * @TODO This is for debugging
        */
        // console.log("\"Place Search Response Body\":", placeSearchResBody)

        // The options that go into the HTTP request body for the Place details
        var nearbySearchReqBody = {
            hostname: "maps.googleapis.com",
            path: "/maps/api/place/nearbysearch/json" +
            "?key=" + googleApiKey +
            "&type=restaurant" +
            "&inputtype=textquery" +
            // Convert the location from the last query to data that this query can use as a location bias
            "&location=" + JSON.parse(placeSearchResBody).candidates[0].geometry.location.lat.toString() + "," + JSON.parse(placeSearchResBody).candidates[0].geometry.location.lng.toString() +
            "&rankby=distance",
            method: "GET"
        };


        var nearbySearchRequest = https.request(nearbySearchReqBody, function(nearbySearchResponse) {
            // This is where all our JSON for the Place Details response body will end up
            var nearbySearchResBody = "";

            // This needs to be here, otherwise we get back a buffer in what looks like hex
            nearbySearchResponse.setEncoding("UTF-8");

            // This records the full response body from.. all the APIs we hit?
            nearbySearchResponse.on("data", function(chunk) {
                nearbySearchResBody += chunk;
            });

            // Do this at the end of the API request for Place details
            nearbySearchResponse.on("end", function (){
                /**
                 * @TODO This is for debugging
                */
                // console.log("\"Place Details Response Body\":", nearbySearchResBody)

                // Put together the data that will be used for the frontend
                var frontendData = {
                    "userSearchResult": JSON.parse(placeSearchResBody),
                    "nearbyRestaurants": JSON.parse(nearbySearchResBody)
                };

                console.log(JSON.stringify(frontendData));

                // fs.writeFile("output.json", JSON.stringify(frontendData), function(err){
                //     if (err) {
                //         throw err;
                //     }
                //     console.log("File Downloaded");
                // });
            });
        });

        // End the Place details request here
        nearbySearchRequest.end();
   });
});

// Catch errors here
placeSearchRequest.on("error", function (err) {
    console.log(`Error with request: ${err.message}`);
});

// Tell Node.js to stop working with the request here
placeSearchRequest.end();
