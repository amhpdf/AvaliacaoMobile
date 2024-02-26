import { ListRenderItem } from "react-native";
import React from "react";
import { api } from "src/services/api";
import {
  Container,
  Content,
  InsuranceTitle,
  List,
  Loading,
  Separator,
  Title,
} from "./styles";
import types from "./index.d";

export const Insurance: React.FC = () => {
  const [insurancesData, setInsurancesData] = React.useState<Array<[]>>([]);
  const [isLoading, setLoading] = React.useState<boolean>(false);

  const fetchData = React.useCallback(async () => {
    setLoading(true);
    try {
      const insurances = await api.getInsurance();
      setInsurancesData(insurances);
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

  const renderItemInsurances: React.FC<types.insuranceItem> = React.useCallback(
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
            data={insurancesData}
            renderItem={renderItemInsurances as ListRenderItem<any>}
            ItemSeparatorComponent={() => <Separator />}
          />
        )}
      </Content>
    </Container>
  );
};
