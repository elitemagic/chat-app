// // import react Navigation
// import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";

// // Create the navigator
// const Stack = createNativeStackNavigator();

// // import functions for initializing firestore
// import { useNetInfo } from "@react-native-community/netinfo";
// import { useEffect } from "react";
// import { LogBox, Alert } from "react-native";

// import { initializeApp } from "firebase/app";
// import {
//   getFirestore,
//   disableNetwork,
//   enableNetwork,
// } from "firebase/firestore";

// import { getStorage } from "firebase/storage";

// LogBox.ignoreLogs(["AsyncStorage has been extracted from"]);
// LogBox.ignoreLogs(["@firebase/auth"]);
// LogBox.ignoreLogs(["@firebase/firestore"]);

// // importing the  two screens
// import Start from "./components/Start";

// import Chat from "./components/Chat";

// // import Welcome from "./components/Welcome";
// // import ShoppingLists from "./components/ShoppingLists";

// const App = () => {
//   const connectionStatus = useNetInfo();

//   const firebaseConfig = {
//     apiKey: "AIzaSyAQ-s2t6X7IoPE298ifO71DL6mnXdz8MvU",
//     authDomain: "chatapp-a3564.firebaseapp.com",
//     projectId: "chatapp-a3564",
//     storageBucket: "chatapp-a3564.appspot.com",
//     messagingSenderId: "755079665505",
//     appId: "1:755079665505:web:1307108468a4992463d720",
//   };

//   // Initialize Firebase
//   const app = initializeApp(firebaseConfig);

//   // Initialize Firestore Database handler
//   const db = getFirestore(app);

//   // Initialize Firebase Storage handler
//   const storage = getStorage(app);

//   useEffect(() => {
//     if (connectionStatus.isConnected === false) {
//       Alert.alert("Connection Lost!");
//       disableNetwork(db);
//     } else if (connectionStatus.isConnected === true) {
//       enableNetwork(db);
//     }
//   }, [connectionStatus.isConnected]);

//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Start">
//         <Stack.Screen name="Start" component={Start} />
//         <Stack.Screen name="Chat">
//           {(props) => (
//             <Chat
//               isConnected={connectionStatus.isConnected}
//               db={db}
//               storage={storage}
//               {...props}
//             />
//           )}
//         </Stack.Screen>
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default App;

// import the screens
import Start from "./components/Start";
import Chat from "./components/Chat";

// import react Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

// import functions for initializing firestore
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  disableNetwork,
  enableNetwork,
} from "firebase/firestore";

import { getStorage } from "firebase/storage";
import { useNetInfo } from "@react-native-community/netinfo";
import { useEffect } from "react";
import { Alert, LogBox } from "react-native";

// Create the navigator
const Stack = createNativeStackNavigator();

LogBox.ignoreLogs(["AsyncStorage has been extracted from"]);
LogBox.ignoreLogs(["@firebase/auth"]);
LogBox.ignoreLogs(["@firebase/firestore"]);

const App = () => {
  const connectionStatus = useNetInfo();

  const firebaseConfig = {
    apiKey: "AIzaSyAQ-s2t6X7IoPE298ifO71DL6mnXdz8MvU",
    authDomain: "chatapp-a3564.firebaseapp.com",
    projectId: "chatapp-a3564",
    storageBucket: "chatapp-a3564.appspot.com",
    messagingSenderId: "755079665505",
    appId: "1:755079665505:web:1307108468a4992463d720",
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  // Initialize Firestore Database handler
  const db = getFirestore(app);

  // Initialize Firebase Storage handler
  const storage = getStorage(app);

  useEffect(() => {
    if (connectionStatus.isConnected === false) {
      Alert.alert("Connection Lost!!");
      disableNetwork(db);
    } else if (connectionStatus.isConnected === true) {
      enableNetwork(db);
    }
  }, [connectionStatus.isConnected]);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Start">
        <Stack.Screen name="Start" component={Start} />
        <Stack.Screen name="Chat">
          {(props) => (
            <Chat
              isConnected={connectionStatus.isConnected}
              db={db}
              storage={storage}
              {...props}
            />
          )}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

// // import react Navigation
// import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";

// // Create the navigator
// const Stack = createNativeStackNavigator();

// import { initializeApp } from "firebase/app";
// import {
//   getFirestore,
//   disableNetwork,
//   enableNetwork,
// } from "firebase/firestore";

// // import the screens
// import ShoppingLists from "./components/ShoppingLists";
// import Welcome from "./components/Welcome";
// import { useNetInfo } from "@react-native-community/netinfo";
// import { useEffect, useState } from "react";

// import { Alert, LogBox } from "react-native";
// LogBox.ignoreLogs(["AsyncStorage has been extracted from"]);

// const App = () => {
//   const connectionStatus = useNetInfo();

//   const firebaseConfig = {
//     apiKey: "AIzaSyAQ-s2t6X7IoPE298ifO71DL6mnXdz8MvU",
//     authDomain: "chatapp-a3564.firebaseapp.com",
//     projectId: "chatapp-a3564",
//     storageBucket: "chatapp-a3564.appspot.com",
//     messagingSenderId: "755079665505",
//     appId: "1:755079665505:web:1307108468a4992463d720",
//   };

//   // Initialize Firebase
//   const app = initializeApp(firebaseConfig);

//   // Initialize Cloud Firestore and get a reference to the service
//   const db = getFirestore(app);

//   useEffect(() => {
//     if (connectionStatus.isConnected === false) {
//       Alert.alert("Connection Lost!!");
//       disableNetwork(db);
//     } else if (connectionStatus.isConnected === true) {
//       enableNetwork(db);
//     }
//   }, [connectionStatus.isConnected]);

//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Welcome">
//         <Stack.Screen name="Welcome" component={Welcome} />
//         <Stack.Screen name="ShoppingLists">
//           {(props) => (
//             <ShoppingLists
//               isConnected={connectionStatus.isConnected}
//               db={db}
//               {...props}
//             />
//           )}
//         </Stack.Screen>
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// };

// export default App;
