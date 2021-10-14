import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'
import Title from './Title'
import Subtitle from './Subtitle'

const FlatCard = ({style, imageStyle, item}) => {
    const { thumbnail, title, desc} = item;
    return (
        <View style={[styles.container, style]}>
            <Image style={[{height: '100%', width: '100%', flex:0.35}, imageStyle]}  source={{uri: 'https://picsum.photos/300/200'}}/>
            <View style={{padding: 8, flex:0.65}}>
                <Title>{title}</Title>
                <Subtitle>{desc}</Subtitle>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        borderRadius: 15,
        overflow: 'hidden',
        backgroundColor: "#fff"   
     }
})

export default FlatCard 
