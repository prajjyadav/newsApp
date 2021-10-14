import React from 'react'
import { View, Text } from 'react-native'
import FlatCard from './FlatCard'
import Title from './Title'
import VerticalCard from './VerticalCard'

const VerticalList = ({title, data}) => {
    return (
        <View>
            <Title>{title}</Title>
            <View>
                {data.map(item => <VerticalCard item={item} key={item.id}/>)}
            </View>
        </View>
    )
}

export default VerticalList
