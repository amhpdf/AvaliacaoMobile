import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { Container } from './styled'; 
import { CloseButtonProps } from './types';

const CloseButton = ({ onPress }: CloseButtonProps) => {
  return (
    <Container>
      <AntDesign onPress={onPress} name="close" size={40} color="black" />
    </Container>
  );
};

export default CloseButton;
