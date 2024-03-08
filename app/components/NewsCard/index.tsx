/* StyledNewsCard.tsx */
import React, { useState } from 'react';
import { Modal, View, ScrollView } from 'react-native';
import { CardContainer, CardImageModal, CardImage, Paragraph, TextContainer, Title, CardContainerModal } from './styled'; 
import CloseButton from '../CloseButton';
import { INewsCardProps } from './types';

const StyledNewsCard = ({ imageUrl, title, paragraph }: INewsCardProps) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  return (
    <View>
      <CardContainer onPress={() => setIsModalVisible(true)}>
        <CardImage source={{ uri: imageUrl }} />
        <TextContainer>
        <Title>{title}</Title>
        <Paragraph numberOfLines={3}>{paragraph}</Paragraph>
        </TextContainer>
      </CardContainer>
        <Modal visible={isModalVisible}>
          <ScrollView>
            <CardContainerModal>
              <CardImageModal source={{ uri: imageUrl }} />
              <TextContainer>
              <Title>{title}</Title>
              <Paragraph>{paragraph}</Paragraph>
              </TextContainer>
            </CardContainerModal>
          </ScrollView>
        <CloseButton onPress={() => setIsModalVisible(false)}/>
      </Modal>
    </View>
  );
};

export default StyledNewsCard;
