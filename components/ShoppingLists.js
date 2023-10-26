import { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  Text,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  Alert,
} from "react-native";

import {
  collection,
  getDocs,
  addDoc,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";

const ShoppingLists = ({ db, route }) => {
  const { userID } = route.params;

  // declare a new state variable
  const [lists, setLists] = useState([]);
  const [listName, setListName] = useState("");
  const [item1, setItem1] = useState("");
  const [item2, setItem2] = useState("");

  const addShoppingList = async (newList) => {
    const newListRef = await addDoc(collection(db, "shoppinglists"), newList);
    if (newListRef.id) {
      setLists([newList, ...lists]);
      Alert.alert(`The list "${listName}" has been added.`);
    } else {
      Alert.alert("Unable to add. Please try later");
    }
  };

  useEffect(() => {
    const q = query(
      collection(db, "shoppinglists"),
      where("uid", "==", userID)
    );
    const unsubShoppinglists = onSnapshot(q, (documentsSnapshot) => {
      let newLists = [];
      documentsSnapshot.forEach((doc) => {
        newLists.push({ id: doc.id, ...doc.data() });
      });
      setLists(newLists);
    });

    return () => {
      if (unsubShoppinglists) unsubShoppinglists();
    };
  }, []);

  // const fetchShoppingLists = async () => {
  //   {
  //     /* get documents of the collection, the first argument (db) is the database object passed from app.js and the second is the collection name youre pointing to */
  //   }
  //   const listsDocuments = await getDocs(collection(db, "shoppinglists"));
  //   {
  //     /* create empty array */
  //   }
  //   let newLists = [];
  //   listsDocuments.forEach((docObject) => {
  //     {
  //       /* .push function adds an object to the array */
  //     }
  //     newLists.push({ id: docObject.id, ...docObject.data() });
  //     // newLists.push({
  //     //   id: docObject.id,
  //     //   name: docObject.data().name,
  //     //   items: docObject.data().items,
  //     // });
  //   });
  //   setLists(newLists);
  // };

  // useEffect(() => {
  //   fetchShoppingLists();
  // }, [`${lists}`]);

  return (
    <View style={styles.container}>
      {/* Use React native component 'FlatList' to render data from list state. It requires 2 props - data and renderItem*/}
      <FlatList
        style={styles.listsContainer}
        data={lists}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <Text>
              {/* The array function join() converts an array into a string*/}
              {item.name}: {item.items.join(", ")}
            </Text>
          </View>
        )}
      />
      <View style={styles.listForm}>
        <TextInput
          style={styles.listName}
          placeholder="List Name"
          value={listName}
          onChangeText={setListName}
        />
        <TextInput
          style={styles.item}
          placeholder="Item #1"
          value={item1}
          onChangeText={setItem1}
        />
        <TextInput
          style={styles.item}
          placeholder="Item #2"
          value={item2}
          onChangeText={setItem2}
        />
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => {
            const newList = {
              uid: userID,
              name: listName,
              items: [item1, item2],
            };
            addShoppingList(newList);
          }}
        >
          <Text style={styles.addButtonText}>Add</Text>
        </TouchableOpacity>
      </View>

      {Platform.OS === "ios" ? (
        <KeyboardAvoidingView behavior="padding" />
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listItem: {
    height: 70,
    justifyContent: "center",
    paddingHorizontal: 30,
    borderBottomWidth: 1,
    borderBottomColor: "#AAA",
    flex: 1,
    flexGrow: 1,
  },
  listForm: {
    flexBasis: 275,
    flex: 0,
    margin: 15,
    padding: 15,
    backgroundColor: "#CCC",
  },
  listName: {
    height: 50,
    padding: 15,
    fontWeight: "600",
    marginRight: 50,
    marginBottom: 15,
    borderColor: "#555",
    borderWidth: 2,
  },
  item: {
    height: 50,
    padding: 15,
    marginLeft: 50,
    marginBottom: 15,
    borderColor: "#555",
    borderWidth: 2,
  },
  addButton: {
    justifyContent: "center",
    alignItems: "center",
    height: 50,
    backgroundColor: "#000",
    color: "#FFF",
  },
  addButtonText: {
    color: "#FFF",
    fontWeight: "600",
    fontSize: 20,
  },
});

export default ShoppingLists;
