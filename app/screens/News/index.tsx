import { ScrollView, Text, FlatList, View } from 'react-native';
import { useEffect, useState } from 'react';
import { Container } from "./styles";
import NewsCard from "../../components/NewsCard";
import { getNewsRecent } from '../../services/api';
import { INewsRecent } from '../../services/api/types';

const News = () => {
  const [news, setNews] = useState<INewsRecent[]>([]);
  const [isLoading, seIsLoading] = useState(true);

  const getNews = async () => {
    const AMOUNT_OF_NEWS = 8;
    const response = await getNewsRecent(AMOUNT_OF_NEWS);
    const data: INewsRecent[] = response.data;
    setNews(data);
    seIsLoading(false);
 }

  useEffect(() => {
    getNews();
  }, []);

  if (isLoading) {
    return (
      <View>
        <Text>Loading</Text> 
        {/* Wip loading */}
      </View>
    )
  }

  return (
    <Container>
      { <FlatList
       data={news}
       keyExtractor={item => String(item.id)}
       renderItem={({item}) => <NewsCard data={item} /> }
      /> }
    </Container>
  )
}

export default News;