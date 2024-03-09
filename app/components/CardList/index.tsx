import React from 'react';
import { Item, HealthInsurance } from './styled';
import { ItemProps } from './type';

const CardList = ({ nome }: ItemProps) => {
  return (
    <Item>
      <HealthInsurance>{nome}</HealthInsurance>
    </Item>
  );
};

export default CardList;



