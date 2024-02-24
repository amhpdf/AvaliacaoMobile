import { ListRenderItem } from "react-native";
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
import types from "./index.d";
import { format } from "date-fns";
import { ptBR } from "date-fns/locale";
import { api } from "src/services/api";

export const News: React.FC = () => {
  const [newsData, setNewsData] = React.useState<Array<[]>>([]);
  const [isLoading, setLoading] = React.useState<boolean>(false);

  const fetchData = React.useCallback(async () => {
    setLoading(true);

    try {
      const news = await api.getNews8();
      setNewsData(news);
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
        <NewsImages
          source={{ uri: `data:image/png;base64,${item.imagem}` }}
          testID="news-image"
        />
        <NewsTime testID="news-time">
          {format(item.dataCriacao, "dd MMM yyyy", {
            locale: ptBR,
          })}
        </NewsTime>
        <NewsTitle testID="news-title">{item.titulo}</NewsTitle>
      </>
    ),
    []
  );

  return (
    <Container>
      <Content>
        <Title>Notícias</Title>
        {isLoading ? (
          <Loading testID="loading" />
        ) : (
          <List
            data={newsData}
            renderItem={renderItemNews as ListRenderItem<any>}
            ItemSeparatorComponent={() => <Separator />}
            initialNumToRender={5}
            removeClippedSubviews
          />
        )}
      </Content>
    </Container>
  );
};
