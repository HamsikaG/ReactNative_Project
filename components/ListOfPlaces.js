
import React from 'react'
import { FlatList, View, StyleSheet} from 'react-native'
import ListItem from './ListItem';
import { ScrollView } from 'react-native-gesture-handler';

const ListOfPlaces = props => {
  
    var listOfPlaces = props.enteredPlaces.map((placename,i) => (    
        <ListItem key={i} placename={placename} deletePlace={() => {
            props.deletePlace(i);
        }} 
        />
    ));
         
    return (
    <ScrollView style={styles.itemContainer}>
        {listOfPlaces}
    </ScrollView>
    )
}


const styles = StyleSheet.create({
    itemContainer : {
        width: "100%"
      }
});

export default  ListOfPlaces;