import React, { useCallback, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { covidLiveCountryRequest } from '@redux/actionCreator/covid';
import { RootState } from '@redux/reducers';
import CovidList from '@components/Covid/List';
import { ColumnWrapper } from '@components/Common';
import CovidForm from '@components/Covid/form';
import useInput from '@hooks/useInputs';
import axios from 'axios';


interface FormValues {
  country: string;
}

const CovidPage = () => {
  const dispatch = useDispatch();
  
  const { loading } = useSelector((state:RootState) => state.covid);
  const { data } = useSelector((state: RootState) => state.covid);
  const [formValues, onChange] = useInput<FormValues>({
    country: "",
  });

  const getCovid = useCallback((e) => {
    e.preventDefault();
    const { country } = formValues;

    if (country) {
      dispatch(covidLiveCountryRequest({ country }));
    }
  }, [dispatch, formValues]);

  useEffect(() => {
    axios.get('https://api.covid19api.com/countries').then(res => console.log(res));
  }, []);

  return (
    <ColumnWrapper>
      <CovidForm
        formValues={formValues}
        onChange={onChange}
        getCovid={getCovid} 
      />
      {loading ? (
        <p>데이터를 불러오고 있습니다.</p>
      ) : (
        <CovidList covidData={data} />
      )}
    </ColumnWrapper>
  );
};

export default CovidPage;