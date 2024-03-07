import React from "react";
import * as S from "./styles";
import { IConvenio } from "../../hooks/types";

interface ConvenioItemProps {
  letter: string;
  conveniosGroup: IConvenio[];
}

const ConvenioItem = ({ letter, conveniosGroup }: ConvenioItemProps) => {
  return (
    <S.Container>
      <S.ContainerLetterOfGroup>
        <S.LetterOfGroup>{letter}</S.LetterOfGroup>
      </S.ContainerLetterOfGroup>
      {conveniosGroup.map((convenio) => (
        <S.NameConvenio key={convenio.id}>{convenio.apelido}</S.NameConvenio>
      ))}
    </S.Container>
  );
};

export default ConvenioItem;
