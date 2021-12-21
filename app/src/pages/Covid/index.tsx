import React, { useCallback, useEffect } from 'react';
import CovidList from '@components/Covid/List';
import CovidForm from '@components/Covid/form';
import useInput from '@hooks/useInputs';
import { useDispatch, useSelector } from 'react-redux';
import { covidLiveRequest, covidAllCountryRequest } from '@redux/actionCreator/covid';
import { RootState } from '@redux/reducers';
import { ColumnWrapper } from '@components/Common';


interface FormValues {
  country: string;
}

const CovidPage = () => {
  const dispatch = useDispatch();
  const { 
    LiveLoading, 
    LiveData, 
    AllCountryData, 
    AllCountryLoading 
  } = useSelector((state: RootState) => state.covid);
  const [formValues, onChange] = useInput<FormValues>({
    country: "",
  });

  const getCovid = useCallback((e) => {
    e.preventDefault();
    const { country } = formValues;

    if (country) {
      dispatch(covidLiveRequest({ country }));
    }
  }, [dispatch, formValues]);

  useEffect(() => {
    dispatch(covidAllCountryRequest());
  }, [dispatch]);

  return (
    <ColumnWrapper>
      {AllCountryLoading ? (
        <p>도시 데이터를 불러오고 있습니다.</p>
      ) : (
        <CovidForm
          allCountryData={AllCountryData}
          onChange={onChange}
          getCovid={getCovid} 
        />
      )}
      {LiveLoading ? (
        <p>라이브 데이터를 불러오고 있습니다.</p>
      ) : (
        <CovidList covidData={LiveData} />
      )}
    </ColumnWrapper>
  );
};

export default CovidPage;