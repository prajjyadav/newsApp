import React, {useState, useEffect} from 'react'
import { View, Text } from 'react-native'
import HorizontalList from '../components/HorizontalList';
import ViewMore from '../components/ViewMore';
// import newsApi from '../api/newsApi';

const NewsDetail = ({route}) => {
    const { id: postId, category: postCategory } = route.params.item;

    const [news, setNews] = useState({});
    const [relatedNews, setRelatedNews] = useState([]);

    const fetchPost = async (id) => {
        // const result = await newsApi.getSingle(id);
        // setNews(result);
    }

    const fetchRelatedPosts = async (category) => {
        // const result = await newsApi.getByCategory(category, 6)
        
        // setRelatedNews(result.filter(item =>item.id !== postId));

    }
    useEffect(() => {
        fetchPost(postId)
        
    }, [])
    return (
        <View>
            <Text>News Details</Text>
            <View>
                <HorizontalList title="Related"/>
            </View>
        </View>
    )
}

export default NewsDetail
