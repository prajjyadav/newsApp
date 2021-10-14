import React from 'react'
import { View, Text, FlatList } from 'react-native'
import SmallCard from './SmallCard'
import Title from './Title'

const HorizontalList = ({title, data}) => {
    return (
        <View>
            <Title size={20}>{title}</Title>
            <View style={{marginVertical: 10}}>
            <FlatList data={data} keyExtractor={item => item.id} horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => <SmallCard item={item}/>} />
            </View>
        </View>
    )
}

export default HorizontalList
