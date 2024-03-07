import React, { useEffect } from "react";
import * as S from "./styles";
import { ActivityIndicator, ScrollView } from "react-native";
import { useConvenios } from "../../hooks/useConvenios";
import ActivityIndicatorContainer from "../../components/ActivityIndicatorContainer";
import ConvenioItem from "../../components/ConvenioItem";

const ConveniosScreen = () => {
  const { groupedConvenios, isLoading, getConvenios } = useConvenios();

  useEffect(() => {
    getConvenios();
  }, []);


  if (isLoading) {
    return (
      <S.Container>
        <ActivityIndicatorContainer>
          <ActivityIndicator
            testID="loading-indicator"
            size="large"
            color="#000"
          />
        </ActivityIndicatorContainer>
      </S.Container>
    );
  }

  return (
    <S.Container>
      <ScrollView>
        {groupedConvenios &&
          Object.entries(groupedConvenios).map(([letter, conveniosGroup]) => (
            <ConvenioItem
              key={letter}
              letter={letter}
              conveniosGroup={conveniosGroup}
            />
          ))}
      </ScrollView>
    </S.Container>
  );
};

export default ConveniosScreen;
