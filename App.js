/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import BlockCard from './components/BlockCard';
import FeaturedNews from './components/FeaturedNews';
import SearchBar from "./components/SearchBar"
import SmallCard from './components/SmallCard';
import Screen from "./screens/Screen"
import BreakingNews from "./components/BreakingNews"

// for api call to get all data
// import useNews from './hooks/useNews'


import data from "./fakeData"
import TechNews from './components/TechNews';
import FlatCard from './components/FlatCard';
import VerticalList from './components/VerticalList';

const App = () => {

  // to get data from backend using hooks
  // const [featuredNews, breakingNews, loading] = useNews();

  let breakingNews = data.filter(item => item.category === 'breaking-news')
  breakingNews.push({type: 'viewMore', category: 'breaking-news', id: 'breaking-news'})
  const techNews = data.filter(item => item.category === 'tech')

  const [isSearchFocused, setIsSearchFocused] = useState(false)

  return(
      // for loading screen while fetching data from server
      // <ActivityIndicator visible={loading} />
      <Screen isSearchFocused={}>
        <SearchBar />
        <FeaturedNews item ={{
      id: '2',
      title: 'This is the title no two.',
      desc:
        'Desc is the short form of description and this format is the actual same as our real database.',
      thumbnail: 'https://picsum.photos/300/200',
      category: 'breaking-news',
    }}/>
        <BreakingNews data ={breakingNews}/>
        <TechNews data={techNews} />
        <VerticalList title="Political news" data={techNews} />
      </Screen>
  )
}

export default App;


