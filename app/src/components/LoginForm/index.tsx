import Button from '@components/Button';
import CheckBox from '@components/CheckBox';
import React from 'react';
import { StyledLoginForm, LoginFormContainer } from './style';

const LoginForm = () => {

  return (
    <StyledLoginForm>
      <LoginFormContainer>
        <input></input>
        <input></input>
        <CheckBox value="1" onChange={() => { }} key="1">
          자동 로그인
        </CheckBox>
        아이디 / 비밀번호 찾기
        <Button
          border="round"
          onClick={() => { }}
          width="70%"
          size="large"
        >로그인
        </Button>
        <Button
          varient="outlined"
          border="round"
          onClick={() => { }}
          width="70%"
          size="large"
        >회원가입
        </Button>
        또는 SNS로 간편하게 로그인/회원가입

      </LoginFormContainer>
    </StyledLoginForm>
  );
};

export default LoginForm;