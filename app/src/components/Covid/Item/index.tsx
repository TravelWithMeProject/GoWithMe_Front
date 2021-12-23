import React from 'react';
import { CovidItemContainer } from './stlye';

interface Props {
  date: string;
  confirmed: number;
  deaths: number;
  recovered: number;
}

const CovidItem = ({ date, confirmed, deaths, recovered }: Props) => {
  return (
    <CovidItemContainer>
      <p className="coivd-item-date">날짜: {date}</p>
      <p className="coivd-item-confirmed">확진자: {confirmed}</p>
      <p className="coivd-item-deaths">사망자: {deaths}</p>
      <p className="coivd-item-recovered">완치: {recovered}</p>
    </CovidItemContainer>
  );
};

export default CovidItem;
