
import React from 'react'
import {TouchableOpacity, Text, View, StyleSheet} from 'react-native'

const ListItem = props => {
    
    return (       
        <TouchableOpacity onPress={props.deletePlace}>
            <View style={styles.listItem}>
                <Text>{props.placename}</Text>
            </View>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    listItem : {
        padding: 5,
        backgroundColor: '#eee',
        margin: 5
    }
});

export default  ListItem;