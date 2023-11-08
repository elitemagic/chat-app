# chat-app

chat-app, built with React Native, enables real-time messaging, image and video sharing, and location sharing on mobile devices.


## Features
This React Native mobile chat-app, offers the following features:

- User customization: Choose a username and chat screen background color.
- Conversations: Chat interface displaying messages, input field, and submit button.
- Communication features: Take pictures, send images and location data.
- Data storage: Utilizes Google Firebase for online and offline message storage.
- Personalization: Select from four background color options.
- Real-time chat with anonymous sign-in, offline message viewing, and multimedia sharing.


## Technology Utilized
React Native

Expo

Google Firebase (Authentication, Database, and Storage)

AsyncStorage (Caching for offline viewing)

React Native Gifted Chat Library

Firebase Cloud Storage (for images)

Expo ImagePicker and Media Library


## Setting up the Environment

To create a new React Native project
`npx create-expo-app chat_app --template`

Install Expo
`npm install - expo-cli`

To initaite expo
`expo start or npm start`


## Database Setup
To set up a database for this project: 
- Create and sign-up for a database on https://firebase.google.com/
- Install firebase in your project directory: `npm install firebase`
  
- Import personal firebase config from project settings tab in firebase console into App.js
  
- Within firebase database rules adjust "allow read, write: if false;" to "allow read, write: if true;", then publish


## Packages to install
` npm install --save @react-navigation/native @react-navigation/native-stack`

` npm install react-native-gifted-chat --save`

` npm install firebase@9.13.0 --save`

` expo install react-native-screens react-native-safe-area-context`
` expo install @react-native-async-storage/async-storage`
` expo install @react-native-community/netinfo`
` expo install expo-image-picker`
` expo install expo-location`
` expo install react-native-maps`
` expo install expo-media-library`
