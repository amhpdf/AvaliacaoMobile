/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {
    FullContainer,
    FullNewsHeader,
    FullNewsImage,
    NewsContainer,
    NewsDate,
    NewsImage,
    NewsTextContainer,
    NewsTitle,
    Summary,
} from './styles';
import { NewsProps } from '../../Shared/globalTypes';
import { Pressable } from 'react-native';

type NewsCardProps = {
    newsData: NewsProps
}

export const NewsCard = ({ newsData }: NewsCardProps) => {
    const [seeSummary, setSeeSummary] = useState<boolean>(false);

    const formatDate = (datetoFormart: string) => {
        const year = datetoFormart.slice(0, 4);
        const month = datetoFormart.slice(5, 7);
        const day = datetoFormart.slice(8, 10);

        return day + '/' + month + '/' + year;
    };

    const renderFullNews = () => (
        <FullContainer>
            <FullNewsHeader>
                <NewsTextContainer>
                    <NewsTitle>{newsData.titulo}</NewsTitle>
                    <NewsDate>{formatDate(newsData.dataCriacao)}</NewsDate>
                </NewsTextContainer>
                <Pressable onPress={() => setSeeSummary(false)}>
                    <Icon name={'close'} color="black" size={32} />
                </Pressable>
            </FullNewsHeader>
            <FullNewsImage source={{ uri: `data:image/jpeg;base64,${newsData.imagem}` }} />
            <Summary>{newsData.resumo}</Summary>
        </FullContainer>
    );

    return (
        <Pressable key={newsData.id} onPress={() => setSeeSummary(!seeSummary)}>
            {!seeSummary ?
            <NewsContainer>
                <NewsImage source={{ uri: `data:image/jpeg;base64,${newsData.imagem}` }} />
                <NewsTextContainer>
                    <NewsTitle>{newsData.titulo}</NewsTitle>
                    <NewsDate>{formatDate(newsData.dataCriacao)}</NewsDate>
                </NewsTextContainer>
            </NewsContainer> :
            renderFullNews()}
        </Pressable>
    );
};
