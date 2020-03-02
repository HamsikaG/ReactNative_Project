import React, {useState} from 'react';
import { TextInput, Button, View, StyleSheet } from 'react-native'

const Input = props => {    
    return (
        <View style={styles.inputContainer}>
            <TextInput 
            style={styles.input}
            placeholder="An awesome place"
            value={props.placename}
            onChangeText={props.placeNameHandler}
            />  
            <Button style={styles.button} title="ADD" onPress={props.addAwesomePlaceHandler}/>
        </View>
    )
}


const styles = StyleSheet.create({
    input: { width:"70%" },
    button : { width: "30%" },
    inputContainer: {
        width:"100%",
        flexDirection: 'row',
        justifyContent: 'space-between'
      }
});

export default Input;