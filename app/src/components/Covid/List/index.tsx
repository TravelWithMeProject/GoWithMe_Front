import React, { useMemo } from 'react';
import moment from 'moment';
import CovidItem from '../Item';
import { RootState } from '@redux/reducers';
import { CovidData } from '@redux/types/covid';
import { useSelector } from 'react-redux';
import { CovidListContainer } from './style';

const CovidList = () => {
  const { data } = useSelector((state: RootState) => state.covid);

  const transformData = useMemo(() => {
    return data.map(el => ({
      ...el,
      Date: moment(el.Date).format('YYYY-MM-DD'),
    }));
  }, [data]);

  return (
    <CovidListContainer>
      {transformData && transformData.map((el: CovidData) => (
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