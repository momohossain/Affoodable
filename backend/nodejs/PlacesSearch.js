const axios = require('axios');

// Retrieve the Google API key from the file on disk
const googleApiKey = require("../../GoogleAPIKey");

// The HTTP request for the Place Search
axios.request({
    baseURL: "https://maps.googleapis.com",
    url: "/maps/api/place/findplacefromtext/json" +
    "?key=" + googleApiKey +
    "&inputtype=textquery" +
    "&fields=place_id,geometry/location" +
    /** @TODO Set location bias to the device's current location */
    "&locationbias=circle:2000@42.365703,-71.08057100000001" +
    "&input=bon%20me",
    method: "GET"
})
// Resolve the response
.then(function (response) {
    return nearbySearch(response.data);
})

function nearbySearch(userSearchResult) {
    var location = userSearchResult.candidates[0].geometry.location;
    // The HTTP request for the Nearby Search
    axios.request({
        baseURL: "https://maps.googleapis.com",
        url: "/maps/api/place/nearbysearch/json" +
        "?key=" + googleApiKey +
        "&type=restaurant" +
        "&inputtype=textquery" +
        // Convert the location from the last query to data that this query can use to find nearby restaurants
        "&location=" + location.lat.toString() + "," + location.lng.toString() +
        "&rankby=distance",
        method: "GET"
    })
    // Resolve the response
    .then(function (response) {
        nearbyRestaurants = response.data;
        var frontendData = {
            "userSearchResult": userSearchResult,
            "nearbyRestaurants": nearbyRestaurants
        };
        console.log(frontendData)
        /** @TODO What do I do with this? */
        return frontendData;
    });
}
