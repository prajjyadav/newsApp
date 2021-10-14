import React, {useState} from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'
import fakeData from '../fakeData'
import SearcModal from './SearcModal'
// import newsApi from '../api/newsApi'

let timeOutId;

const debounce = (func, delay) => {
    return (...args) => {
        if(timeOutId) clearTimeout(timeOutId);
        timeOutId = setTimeout(() => {
            func.apply(null, args);
        }, delay);
    };
};

const SearchBar = ({setSearchFocused}) => {

    const [query, setQuery] =useState('');
    const [visible, setVisible] =useState(false);
    const [data, setData] =useState([]);
    const [notFound, setNotFound] =useState('');

    const handleChange = (nativeEvent) => {
        console.log(nativeEvent);
        const {text} = nativeEvent;
        setQuery(text);
        setVisible(true);
        debounceSearch(query);
    }

    const handleSearch = async (query) => {
        const res = await newsApi.searchPost(query);
        if(res.success) {
            setNotFound('');
            setData(res.news);
        }
        if(!res.success){
            setNotFound(res.message);
        }
    }

    const debounceSearch = debounce(handleSearch, 500);

    return (
        <>       
            <View style={styles.container}>
                <TextInput value={query} style={styles.searchInput} placeholder="Search"
                    onChange={({nativeEvent})=>handleChange(nativeEvent)}
                    onFocus={()=> setSearchFocused(true)}
                    onBlur={()=> {
                        setSearchFocused(false);
                        setQuery('');
                        setVisible(false);
                        setData([]);
                        setNotFound('');
                    }}
                />
            </View>
            <SearcModal visible={visible} data={data} notFound={notFound}/>
        </>
    )
}

const styles = StyleSheet.create({
    container:{
        width: "100%",
        height: 50,
        backgroundColor: 'white',
        borderRadius: 8,
    },
    searchInput:{
        flex:1,
        paddingLeft: 8,
        fontSize: 16
    }
})

export default SearchBar
