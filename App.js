import React, {useState} from 'react';
import { StyleSheet, Text, TextInput, View, Button } from 'react-native';
import Input from './components/Input';
import ListOfPlaces from './components/ListOfPlaces';

export default function App() {
  
  const [placename, setPlacename] = useState('');
  const [enteredPlaces, setEnteredPlaces] = useState([]);

  const placeNameHandler = (input) => {
    setPlacename(input);
  }

  const addAwesomePlaceHandler = () => {
    if(placename.trim()===""){
      return;
    }  
    if(enteredPlaces.length > 0){
      setEnteredPlaces([...enteredPlaces, placename]);
    } else {
      setEnteredPlaces([placename]);
    }   
  }

  const deletePlace = (itemKey) => {
    setEnteredPlaces(enteredPlaces.filter((placename, i) => {
      return i !== itemKey;
    }));
}

  
  return (
    <View style={styles.container}>
      <Input placename={placename} placeNameHandler={placeNameHandler} addAwesomePlaceHandler={addAwesomePlaceHandler} />
      <ListOfPlaces enteredPlaces={enteredPlaces} deletePlace={deletePlace} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 50,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
  
});
