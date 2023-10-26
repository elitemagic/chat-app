// import react Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { LogBox } from "react-native";
LogBox.ignoreLogs(["AsyncStorage has been extracted from"]);
LogBox.ignoreLogs(["Console Warning"]);

// Create the navigator
const Stack = createNativeStackNavigator();

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// // import the screens
import Start from "./components/Start";
import Chat from "./components/Chat";
// import Welcome from "./components/Welcome";
// import ShoppingLists from "./components/ShoppingLists";

const App = () => {
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

  // Initialize Cloud Firestore and get a reference to the service
  const db = getFirestore(app);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Start">
        <Stack.Screen name="Start" component={Start} />
        <Stack.Screen name="Chat">
          {(props) => <Chat db={db} {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
