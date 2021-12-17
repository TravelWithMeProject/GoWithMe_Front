import React from 'react';
import { CovidButton } from './style';

interface Props {
  formValues: {
    country: string;
  };
  getCovid: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const CovidForm = ({ formValues, getCovid, onChange }: Props) => {
  return (
    <form>
      <select name="country" id="country" onChange={onChange}>
        <option value="0">나라를 선택해주세요.</option>
        <option value="korea-south">대한민국</option>
      </select>

      <CovidButton onClick={getCovid}>불러오기</CovidButton>
    </form>
  );
};

export default CovidForm;