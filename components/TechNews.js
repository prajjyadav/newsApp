import React from 'react'
import { View, Text } from 'react-native'
import HorizontalList from './HorizontalList'

const TechNews = ({data}) => {
    return (
        <View>
            <HorizontalList title="Tech News" data={data} />
        </View>
    )
}

export default TechNews
