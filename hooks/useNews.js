import React, {useState, useEffect} from 'react'
import newsApi from '../api/newsApi'

import { View, Text } from 'react-native'

const useNews = () => {
    const [featuredNews, setFeaturedNews] = useState({});
    const [breakingNews, setBreakingNews] = useState([]);
    const [loading, setLoading] = useState(false);
    
    const filterByCategory = (data, category) => {
      const result = [...data].filter(item => item.category === category);
      
      if(result.length){
        result.push({type: 'viewMore', category: category, id: category});
      }

      return result

      // to display only 5 latest news
      return [...data].filter(item => item.category === category).reverse().splice(0.5);
    }
  
    const filterMultipleNews = async () => {
      setLoading(true);
      const allNews = await newsApi.getAll();
      const featured = allNews.filter(item => item.featured === 'on').reverse()[0];
      setFeaturedNews(featured);
  
      setBreakingNews(filterByCategory(allNews,'breaking-news'));
      setLoading(false);
      
    }
  
    useEffect(()=>{
      filterMultipleNews()
    }, [])

    return [featuredNews, breakingNews, loading];
}

export default useNews
