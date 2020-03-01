import React, {useState} from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';

export default function App() {

 

  const [placename, setPlacename] = useState('');
  const [enteredPlace, setEnteredPlace] = useState('');

  const placeNameHandler = (input) => {
    setPlacename(input);
  }

  const addAwesomePlaceHandler = () => {
    setEnteredPlace(placename);
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput 
        style={styles.input}
        placeholder="An awesome place"
        value={placename}
        onChangeText={placeNameHandler}
        />
        <Button style={styles.button} title="ADD" onPress={addAwesomePlaceHandler}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputContainer: {
    width:"100%",
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  input: { width:"70%" },
  button : { width: "30%" }
});
