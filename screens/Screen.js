import React from 'react'
import { View, Text, StyleSheet, StatusBar, ScrollView } from 'react-native'
import SearchBar from "../components/SearchBar"

const Screen = ({children, isSearchFocused}) => {
    const keyboardShouldPersistTaps = isSearchFocused ? 'always' : 'never';
    return (
        <ScrollView style={styles.container} scrollEnabled={!isSearchFocused}
            keyboardShouldPersistTaps={keyboardShouldPersistTaps}
        >
            {children}
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        marginTop:40, 
        paddingHorizontal: 15,
        backgroundColor: "#eee",
        flex:1
    }
})

export default Screen
