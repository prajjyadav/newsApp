import React from 'react'
import { View, Text } from 'react-native'

const Title = ({children, numberOfLines = 2, size=18}) => {
    return (
        <View>
            <Text numberOfLines={numberOfLines} 
            style={{ fontWeight: 'bold' ,fontSize: size }}>
                {children}</Text>
        </View>
    )
}

export default Title
