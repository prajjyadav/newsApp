import React from 'react'
import { View, Text, StyleSheet, Dimensions } from 'react-native'
import BlockCard from './BlockCard'
import ViewMore from './ViewMore'

const {width} = Dimensions.get('window')

const SmallCard = ({item}) => {

    if(item.type === 'viewMore'){
        return <ViewMore style={styles.container}/>
    }
    return (
        <View>
            <BlockCard item={item} style={styles.container} imageStyle={styles.imageStyle}/>
        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        width: width/2,
        marginRight: 15,
        height: 200
    },
    imageStyle:{
        height: 100
    }
})

export default SmallCard
