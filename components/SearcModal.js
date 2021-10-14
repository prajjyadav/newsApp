import React from 'react'
import { View, Text, ScrollView, StyleSheet, Dimensions } from 'react-native'
import { DebugInstructions } from 'react-native/Libraries/NewAppScreen';
import FlatCard from './FlatCard';
// import {useNavigation} from "@react-navigaton/native";

const {height} = Dimensions.get('window');

const SearcModal = ({ visible, data, notFound}) => {
    // const navigation = useNavigation();
    if(!visible) return null;

    if(visible && data.length === 0 && !notFound) return null;

    if(notFound) return <Text>{notFound}</Text>

    return (
        <View style={styles.container}>
            <ScrollView keyboardDismissMode='on-drag' keyboardShouldPersistTaps="always">
                {data.map(item => <FlatCard item={item} key={item.id} 
                    // onPress={()=>navigation.navigate('NewsDetail', {item})}
                />)}                
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    container:{
        position: 'absolute',
        top: 60,
        backgroundColor: 'rgba(0,0,0,0.5)',
        width: '100%',
        maxHeight: height/2,
        zIndex: 1,
        padding: 10,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10
    }
})
export default SearcModal
