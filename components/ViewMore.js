import React from 'react'
import { View, Text } from 'react-native'

const ViewMore = ({style}) => {
    return (
        <View 
        style={[{justifyContent:'center', 
        alignItems: 'center', 
        borderRadius: 15, 
        height: 50, width: '100%', 
        backgroundColor: '#ddd'}, style]}>
            <Text>View More</Text>
        </View>
    )
}

export default ViewMore
