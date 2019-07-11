# Affoodable

This is a mobile app that was created using React Native! So far we have only been testing the app on iOS devices.

## Setup for iOS

- install dependencies: `yarn install` or `npm install`
- link react-navigatoon: `react-native link react-native-gesture-handler`
- install pods:

```
cd ios/
pod install
```

- using Xcode open affoodable.xcproj located in the ios/ folder:
  - open AppDelegate.m: affoodable/affoodable/AppDelegate.m
  - replace _YOUR_KEY_HERE_REMOVE_WHEN_PUSHING_ with your google maps API Key
- run app: `react-native run-ios`
