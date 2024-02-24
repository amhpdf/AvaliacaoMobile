import { ListRenderItem } from "react-native";
import React from "react";
import {
  Container,
  Content,
  InsuranceTitle,
  List,
  Loading,
  Separator,
  Title,
} from "./styles";
import axios from "axios";
import types from "./index.d";

export const Insurance: React.FC = () => {
  const [insuranceData, setInsuranceData] = React.useState<Array<[]>>([]);
  const [isLoading, setLoading] = React.useState<boolean>(false);

  const fetchData = React.useCallback(async () => {
    setLoading(true);
    const insuranceApiUrl = "https://api-site.amhp.com.br/api/convenios/ativos";
    try {
      const { data } = await axios.get(insuranceApiUrl);
      setInsuranceData(data);
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

  const renderItemInsurance: React.FC<types.insuranceItem> = React.useCallback(
    ({ item }) => (
      <InsuranceTitle testID="insurance-title">
        {item.nomeDivulgacao}
      </InsuranceTitle>
    ),
    []
  );

  return (
    <Container>
      <Content>
        <Title>Convênios</Title>
        {isLoading ? (
          <Loading testID="loading" />
        ) : (
          <List
            data={insuranceData}
            renderItem={renderItemInsurance as ListRenderItem<any>}
            ItemSeparatorComponent={() => <Separator />}
          />
        )}
      </Content>
    </Container>
  );
};
