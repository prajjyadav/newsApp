import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import Title from './Title'
import Subtitle from './Subtitle'

const BlockCard = ({style, imageStyle, item}) => {
    const { thumbnail, title, desc} = item;
    return (
        <View style={[styles.container, style]}>
            <Image style={[{width: "100%", height: 200}, imageStyle]}  source={{uri: 'https://picsum.photos/300/200'}}/>
            <View style={{padding: 8}}>
                <Title>{title}</Title>
                <Subtitle>{desc}</Subtitle>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        borderRadius: 15,
        overflow: 'hidden',
        backgroundColor: "#fff"   
     }
})

export default BlockCard
