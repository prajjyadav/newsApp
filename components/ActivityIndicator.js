// take loading gif from lottie Files 
// npm install --save lottie-react-native
// download json from lottieFiles


import React from 'react'
import { View, Text } from 'react-native'
import LottieView from 'lottie-react-native'

const ActivityIndicator = ({visible}) => {
    if(!visible) return null;
    
    return (
        <View style={{flex:1, justifyContent: 'center', alignItems: 'center', zIndex: 1}}>
            <LottieView source={require('../loading.json')} autoPlay loop/>
        </View>
    )
}

export default ActivityIndicator
