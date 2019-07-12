# Affoodable

Affoodable is a platform for restaurants to advertise and sell their remaining meals before closing time at a discounted
rate. In this way, restaurants can minimize food waste while still being able to increase revenue, and customers can
benefit from food discounts.

This is a mobile app that was created using React Native. So far we have only been testing the app on iOS devices.npm

## Authors

- Mohammed (Momo) Hossain
- Abraham Lara
- Angella Qian
- Daniel Zarco
- Simon Yang
- Vincent Pietropaolo
- Dennis Woo (Honorable mention)

## Setup

### Backend - Google Places API

1. Create a [Google API key](https://developers.google.com/places/web-service/get-api-key).
    - Make sure you add a billing account, otherwise you can only make up to 5 API request per day. It is pretty cheap,
    you get 300 dollars for free with the trial and it costs 4 dollars for every 1000 API requests you make on the
    Atmosphere category (The most expensive category for the Place Search endpoint).
    - Make sure you enable the `Places API` and the `Maps SDK for iOS` on the API key you create.
2. Go into the root directory of the repository and create a file called `GoogleAPIKey.js`.
3. Copy and paste the following to the file:

    ```
    module.exports = "YOUR_API_KEY";
    ```

    Whilst replacing YOUR_API_KEY with your Google API Key.  Do not add any other characters.
4. Running `node backend/nodejs/PlaceDetails.js` should return details for 60 Binney St.

### Frontend - Setup for iOS

1. Install dependencies: `yarn install` or `npm install`
2. Link react-navigatoon: `react-native link react-native-gesture-handler`
3. Install pods:

    ```
    cd ios/
    pod install
    ```

4. Using Xcode open affoodable.xcproj located in the ios/ folder:
  - Open AppDelegate.m: affoodable/affoodable/AppDelegate.m
  - Replace _YOUR_KEY_HERE_REMOVE_WHEN_PUSHING_ with your google maps API Key
5. Run app: `react-native run-ios`
