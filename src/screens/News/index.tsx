import { ListRenderItem, Text, View } from "react-native";
import React from "react";
import {
  Container,
  Content,
  List,
  Loading,
  NewsImages,
  NewsTime,
  NewsTitle,
  Separator,
  Title,
} from "./styles";
import axios from "axios";
import types from "./index.d";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";

export const News: React.FC = () => {
  axios.defaults.timeout = 100000;
  const [newsData, setNewsData] = React.useState<Array<[]>>([]);
  const [isLoading, setLoading] = React.useState<boolean>(false);

  const fetchData = React.useCallback(async () => {
    setLoading(true);
    const newsApiUrl = "https://api-site.amhp.com.br/api/noticias/recentes/8";
    try {
      const { data } = await axios.get(newsApiUrl);
      setNewsData(data);
    } catch (error) {
      console.log(error);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  }, []);

  React.useEffect(() => {
    fetchData();
  }, []);

  const renderItemNews: React.FC<types.newsItem> = React.useCallback(
    ({ item }) => (
      <>
        <NewsImages source={{ uri: `data:image/png;base64,${item.imagem}` }} />
        <NewsTime>
          {format(item.dataCriacao, "dd MMM yyyy", {
            locale: ptBR,
          })}
        </NewsTime>
        <NewsTitle>{item.titulo}</NewsTitle>
      </>
    ),
    []
  );

  return (
    <Container>
      <Content>
        <Title>Notícias</Title>
        {isLoading ? (
          <Loading />
        ) : (
          <List
            data={newsData}
            renderItem={renderItemNews as ListRenderItem<any>}
            ItemSeparatorComponent={() => <Separator />}
          />
        )}
      </Content>
    </Container>
  );
};
