import { CovidAllCountryData } from '@redux/types/covid';
import React from 'react';
import { CovidButton } from './style';

interface Props {
  allCountryData: CovidAllCountryData[];
  getCovid: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const CovidForm = ({ allCountryData, getCovid, onChange }: Props) => {
  return (
    <form>
      <select name="country" id="country" onChange={onChange}>
        <option value="0">나라를 선택해주세요.</option>
        {allCountryData.map(el => (
          <option value={el.Country} key={el.Country}>{el.Country}</option>
        ))}
      </select>

      <CovidButton onClick={getCovid}>불러오기</CovidButton>
    </form>
  );
};

export default CovidForm;