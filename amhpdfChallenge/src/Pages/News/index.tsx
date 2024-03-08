/* eslint-disable prettier/prettier */
import { ActivityIndicator } from 'react-native';
import { NewsCard } from '../../Components/NewsCard';
import { getNews } from '../../Services/api';
import COLORS from '../../Shared/colors';
import { Loader, NewsScroll, SessionTitle } from './styles';
import { Container } from './styles';
import React, { useEffect, useState } from 'react';
import { NewsProps } from '../../Shared/globalTypes';

const News = () => {
  const [lastNews, setLastNews] = useState<NewsProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const getLastNewsFromAPI = async () => {
    const newsFromAPI = await getNews();

    setLastNews(newsFromAPI);
  };

  useEffect(() => {

    try {

      setLoading(true);
      getLastNewsFromAPI();
    } catch (error) {

      throw new Error(JSON.stringify(error));
    } finally {

      setLoading(false);
    }
  }, []);

  return (
    <Container>
      {loading ?
        <Loader>
          <ActivityIndicator size={'large'} color={COLORS.blue} />
        </Loader> :
        <>
          <NewsScroll>
            <SessionTitle>Notícias</SessionTitle>
              {lastNews.map(news => <NewsCard newsData={news} />)}
          </NewsScroll>
        </>
      }
    </Container>
  );
};

export default News;
