import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { covidRequest } from '@redux/actionCreator/covid';
import { RootState } from '@redux/reducers';
import CovidList from '@components/Covid/List';
import { ColumnWrapper } from '@components/Common';
import styled from 'styled-components';

const Button = styled.button`
  width: 200px;
  font-size: 30px;
`;

const CovidPage = () => {
  const { loading } = useSelector((state:RootState) => state.covid);
  const dispatch = useDispatch();

  const getCovid = useCallback(() => {
    dispatch(covidRequest());
  }, [dispatch]);

  return (
    <ColumnWrapper>
      <Button onClick={getCovid}>불러오기</Button>
      {loading ? (
        <p>데이터를 불러오고 있습니다.</p>
      ) : (
        <CovidList />
      )}
    </ColumnWrapper>
  );
};

export default CovidPage;