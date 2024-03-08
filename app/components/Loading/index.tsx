import React from 'react';
import styled from 'styled-components/native';
import { ActivityIndicator } from 'react-native';

const LoadingContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Loading: React.FC = () => {
  return (
    <LoadingContainer>
      <ActivityIndicator size="large" color="#0000ff" />
    </LoadingContainer>
  );
};

export default Loading;