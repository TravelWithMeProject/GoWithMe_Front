import React, { useEffect } from 'react';
import axios from 'axios';
import Covid from '@components/Covid';
import { APIS_URL } from '@api/urls';

const CovidPage = () => {
  useEffect(() => {
    axios.get(APIS_URL.covid.url).then(res => console.log(res));
  }, []);

  return (
    <div>
      <Covid />
    </div>
  );
};

export default CovidPage;