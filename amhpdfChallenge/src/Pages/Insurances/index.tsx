/* eslint-disable prettier/prettier */
import { View } from 'react-native';
import { Character, CharacterDivider, Container, Nickname, ScrollContent, Title } from './styles';
import React, { useEffect, useState } from 'react';
import { getInsurances } from '../../Services/api';

type InsurancesProps = {
  id: number;
  apelido: string;
}

const Insurances = () => {
  const [insurances, setInsurances] = useState<InsurancesProps[]>([]);

  const getInsurancesFromAPI = async () => {
    const insurancesFromAPI = await getInsurances();

    setInsurances(insurancesFromAPI);
  };

  useEffect(() => {

    try {

      getInsurancesFromAPI();
    } catch (error) {

      throw new Error(JSON.stringify(error));
    }
  }, []);

  return (
    <Container>
      <Title>Convênios</Title>
      <ScrollContent>
        {insurances.map((company, index) => (
          <>
            {index === 0 || company.apelido[0] !== insurances[index - 1].apelido[0] ?
              <View key={company.id}>
                <CharacterDivider>
                  <Character>{company.apelido[0]}</Character>
                </CharacterDivider>
                <Nickname>{company.apelido}</Nickname>
              </View> :
              <Nickname>{company.apelido}</Nickname>
            }
          </>
        ))}
      </ScrollContent>
    </Container>
  );
};

export default Insurances;
