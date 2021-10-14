import React from 'react'
import { View, Text } from 'react-native'
import FlatCard from './FlatCard'
import ViewMore from './ViewMore'

const VerticalCard = ({item}) => {
    if(item.type === 'viewMore')
    return <ViewMore />
    
    return (
        <FlatCard item ={item}/>
    )
}

export default VerticalCard
