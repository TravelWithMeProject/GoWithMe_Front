import React, { useMemo } from 'react';
import moment from 'moment';
import CovidItem from '../Item';
import { CovidLiveData } from '@redux/types/covid';
import { CovidListContainer } from './style';

interface Props {
  covidData: CovidLiveData[];
}

const CovidList = ({ covidData }: Props ) => {
  const transformData = useMemo(() => {
    return covidData.map(el => ({
      ...el,
      Date: moment(el.Date).format('YYYY-MM-DD'),
    }));
  }, [covidData]);

  return (
    <CovidListContainer>
      {transformData.map((el: CovidLiveData) => (
        <CovidItem 
          key={el.ID}
          date={el.Date}
          confirmed={el.Confirmed}
          deaths={el.Deaths}
          recovered={el.Recovered}
        />
      ))}
    </CovidListContainer>
  );
};

export default CovidList;