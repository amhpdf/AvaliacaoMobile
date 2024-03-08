import React, { useEffect, useState } from 'react';
import { Container } from './styles';
import CardList from '../../components/CardList';
import { getAgreements } from '../../services/api';
import { IAgreements } from '../../services/api/types';
import Loading from '../../components/Loading';

const Agreements = () => {
  const [agreements, setAgreements] = useState<IAgreements[]>([]);
  const [loading, setLoading] = useState(true);
  const loadAgreements = async () => {
    const result = await getAgreements();
    const data: IAgreements[] = result.data;
    setAgreements(data);
    setLoading(false);
  }
  useEffect(() => {
    loadAgreements();
  })

  if (loading) {
    return <Loading />
  }
  return (
    <Container>
      {agreements.map((el) => (
        <CardList key={el.id} nome={el.nomeDivulgacao} />
      ))}
    </Container>
  );
};

export default Agreements;
